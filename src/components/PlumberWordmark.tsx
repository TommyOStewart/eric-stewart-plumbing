import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import gsap from 'gsap'

export interface PlumberWordmarkHandle {
  replay: () => void
}

interface PlumberWordmarkProps {
  className?: string
}

// Shared coordinate system: the wrench-P and the "LUMBER" text both sit on
// this cap-height/baseline so they line up exactly.
const CAP_HEIGHT = 76
const CAP_TOP = 20
const BASELINE = CAP_TOP + CAP_HEIGHT

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 90)
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
  }).join(' ')
}

/**
 * Animated wordmark: the "P" in PLUMBER is a pipe wrench whose silhouette
 * reads as a P at rest. On trigger it tightens onto a leaking nut, the
 * leak stops, and it settles back into a crisp P.
 */
const PlumberWordmark = forwardRef<PlumberWordmarkHandle, PlumberWordmarkProps>(
  ({ className }, ref) => {
    const wrenchGroupRef = useRef<SVGGElement>(null)
    const nutRef = useRef<SVGGElement>(null)
    const highlightsRef = useRef<SVGGElement>(null)
    const dripsRef = useRef<SVGGElement>(null)
    const pooledDropRef = useRef<SVGEllipseElement>(null)
    const drip1Ref = useRef<SVGGElement>(null)
    const drip2Ref = useRef<SVGGElement>(null)
    const drip3Ref = useRef<SVGGElement>(null)
    const shineRef = useRef<SVGRectElement>(null)

    const timelineRef = useRef<gsap.core.Timeline | null>(null)
    const dripLoopRef = useRef<gsap.core.Timeline | null>(null)
    const reducedMotionRef = useRef(false)

    useEffect(() => {
      const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
      reducedMotionRef.current = mql.matches

      const wrenchGroup = wrenchGroupRef.current
      const nut = nutRef.current
      const highlights = highlightsRef.current
      const drips = dripsRef.current
      const pooledDrop = pooledDropRef.current
      const shine = shineRef.current
      if (!wrenchGroup || !nut || !highlights || !drips || !pooledDrop || !shine) return

      const dripEls = [drip1Ref.current, drip2Ref.current, drip3Ref.current].filter(
        Boolean
      ) as SVGGElement[]

      const syncHighlights = () => {
        const rot = gsap.getProperty(wrenchGroup, 'rotation') as number
        gsap.set(highlights, { rotation: -rot, transformOrigin: '30px 46px' })
      }

      if (reducedMotionRef.current) {
        // Final fixed state: tight nut, no leak, no motion.
        gsap.set(wrenchGroup, { scale: 1, rotation: 0, transformOrigin: '30px 46px' })
        gsap.set(nut, { rotation: 0, scale: 0.96, transformOrigin: '31px 32px' })
        gsap.set(drips, { opacity: 0 })
        gsap.set(pooledDrop, { opacity: 0 })
        gsap.set(highlights, { rotation: 0, transformOrigin: '30px 46px' })
        return
      }

      // Looping leak while the nut is loose. Paused: it should only run
      // once triggered (on load / replay), not autoplay on mount.
      const buildDripLoop = () => {
        const loop = gsap.timeline({ repeat: -1, paused: true })
        dripEls.forEach((el, i) => {
          loop.fromTo(
            el,
            { y: 0, opacity: 0 },
            { y: 16, opacity: 1, duration: 0.5, ease: 'power1.in' },
            i * 0.45
          ).to(
            el,
            { y: 26, opacity: 0, duration: 0.35, ease: 'power1.out' },
            i * 0.45 + 0.45
          )
        })
        return loop
      }

      const buildTimeline = () => {
        gsap.set(wrenchGroup, { scale: 1, rotation: 0, transformOrigin: '30px 46px' })
        gsap.set(nut, { rotation: 0, scale: 1, transformOrigin: '31px 32px' })
        gsap.set(highlights, { rotation: 0, transformOrigin: '30px 46px' })
        // Start with no leak visible — it only appears once the timeline
        // reveals it, so the idle/mount state stays a clean, dry P.
        gsap.set(drips, { opacity: 0 })
        gsap.set(pooledDrop, { opacity: 0, scale: 1, transformOrigin: '31px 46px' })
        gsap.set(shine, { opacity: 0, x: -30 })

        const tl = gsap.timeline({ paused: true })

        // 1. Enlarge and hold.
        tl.to(wrenchGroup, {
          scale: 1.08,
          duration: 0.35,
          ease: 'power2.out',
          onUpdate: syncHighlights
        }).to({}, { duration: 0.15 })

        // The joint is revealed as loose: leak starts.
        tl.to(drips, { opacity: 1, duration: 0.15, ease: 'power1.out' })
          .to(pooledDrop, { opacity: 0.85, duration: 0.15, ease: 'power1.out' }, '<')

        // 2. Ratchet swings: wrench body rocks as it tightens the nut.
        const swingAngles = [-7, 5, -5, 3, 0]
        swingAngles.forEach((angle, i) => {
          tl.to(
            wrenchGroup,
            {
              rotation: angle,
              duration: i === swingAngles.length - 1 ? 0.28 : 0.2,
              ease: 'power3.inOut',
              onUpdate: syncHighlights
            },
            i === 0 ? undefined : '>-0.02'
          )
          tl.to(
            nut,
            {
              rotation: `-=${60 + i * 4}`,
              duration: i === swingAngles.length - 1 ? 0.28 : 0.2,
              ease: 'power3.inOut'
            },
            '<'
          )
        })

        // Nut seats fully — slightly smaller, snug in the jaw.
        tl.to(
          nut,
          { scale: 0.96, duration: 0.2, ease: 'power2.out' },
          '<'
        )

        // 3. Leak stops: drips and the pooled droplet fade out.
        tl.to(
          drips,
          { opacity: 0, duration: 0.3, ease: 'power1.out' },
          '-=0.15'
        )
        tl.to(
          pooledDrop,
          { opacity: 0, scale: 0.4, duration: 0.3, ease: 'power1.out' },
          '<'
        )

        // Quick specular shine sweeps across the now-tight, clean metal.
        tl.fromTo(
          shine,
          { x: -30, opacity: 0 },
          { x: 30, opacity: 0.9, duration: 0.28, ease: 'power1.inOut' },
          '-=0.1'
        ).to(shine, { opacity: 0, duration: 0.18, ease: 'power1.out' })

        // 4. Settle back to a clean, crisp P.
        tl.to(
          wrenchGroup,
          { scale: 1, duration: 0.3, ease: 'power2.inOut', onUpdate: syncHighlights },
          '-=0.2'
        )

        return tl
      }

      timelineRef.current = buildTimeline()
      dripLoopRef.current = buildDripLoop()

      const playIntro = () => {
        dripLoopRef.current?.restart()
        timelineRef.current?.eventCallback('onComplete', () => {
          dripLoopRef.current?.pause(0)
        })
        timelineRef.current?.restart()
      }

      // Trigger on page load, once.
      const loadTimer = window.setTimeout(playIntro, 400)

      return () => {
        window.clearTimeout(loadTimer)
        timelineRef.current?.kill()
        dripLoopRef.current?.kill()
      }
    }, [])

    const replay = () => {
      if (reducedMotionRef.current) return
      dripLoopRef.current?.restart()
      timelineRef.current?.eventCallback('onComplete', () => {
        dripLoopRef.current?.pause(0)
      })
      timelineRef.current?.restart()
    }

    useImperativeHandle(ref, () => ({ replay }))

    return (
      <div
        className={`inline-block select-none cursor-pointer ${className ?? ''}`}
        onClick={replay}
        role="img"
        aria-label="Plumber"
        title="Plumber"
      >
        <svg
          viewBox="0 0 400 118"
          className="block"
          style={{ overflow: 'visible', height: '50px', width: 'auto' }}
        >
          <defs>
            {/* userSpaceOnUse: a perfectly vertical/horizontal stroke has a
                zero-width geometry bbox, which makes an objectBoundingBox
                gradient degenerate (invisible). Fixed coordinates also give
                one coherent light source across the whole wrench body. */}
            <linearGradient id="pw-body" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="54" y2="0">
              <stop offset="0%" stopColor="#1c2b3a" />
              <stop offset="22%" stopColor="#5b7189" />
              <stop offset="45%" stopColor="#cfd9e2" />
              <stop offset="58%" stopColor="#8fa2b3" />
              <stop offset="100%" stopColor="#16222d" />
            </linearGradient>
            <linearGradient id="pw-body-length" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="100">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.18" />
            </linearGradient>
            <radialGradient id="pw-nut" cx="32%" cy="28%" r="75%">
              <stop offset="0%" stopColor="#fff6da" />
              <stop offset="35%" stopColor="#e8c568" />
              <stop offset="70%" stopColor="#a9762f" />
              <stop offset="100%" stopColor="#6b451c" />
            </radialGradient>
            <linearGradient id="pw-water" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bfe9ff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#4fb2e8" stopOpacity="0.5" />
            </linearGradient>
            <filter id="pw-shadow-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.2" />
            </filter>
          </defs>

          {/* The wrench-P is authored in a local 0-54 x / 0-100 y box; this
              wrapper maps that box onto the word's cap-height and baseline
              so the P lines up exactly with the "LUMBER" text below. */}
          <g transform={`translate(6 ${CAP_TOP}) scale(${CAP_HEIGHT / 100})`}>
            {/* Static soft contact shadow */}
            <ellipse
              cx="28"
              cy="97"
              rx="22"
              ry="4.5"
              fill="#0f2744"
              opacity="0.35"
              filter="url(#pw-shadow-blur)"
            />

            <g ref={wrenchGroupRef}>
            {/* Body: stem (handle) + curved heel forming the bowl.
                Strokes are kept heavy so the metal reads as boldly as the
                neighboring Georgia Bold letterforms at logo scale. */}
            <g strokeLinecap="round" strokeLinejoin="round" fill="none">
              <path
                d="M15 91 L15 23"
                stroke="url(#pw-body)"
                strokeWidth="17"
              />
              <path
                d="M15 91 L15 23"
                stroke="url(#pw-body-length)"
                strokeWidth="17"
              />
              <path
                d="M15 50 C 15 57, 21 62, 29 62 C 41 62, 48 53, 48 39 C 48 26, 41 17, 29 14"
                stroke="url(#pw-body)"
                strokeWidth="15"
              />
              <path
                d="M15 50 C 15 57, 21 62, 29 62 C 41 62, 48 53, 48 39 C 48 26, 41 17, 29 14"
                stroke="url(#pw-body-length)"
                strokeWidth="15"
              />
            </g>

            {/* Hooked upper jaw with serrated teeth (static relative to body) */}
            <g fill="url(#pw-body)" stroke="#16222d" strokeWidth="0.8">
              <path d="M32 14 C 22 9, 15 4, 12 -3 L 23 -3 C 25 2, 29 6, 36 9 Z" />
              <path d="M18.5 -0.5 l 4 -4.5 l 3 2.6 l -4 4.5 Z" fill="#0f1a24" stroke="none" />
              <path d="M25.5 4.5 l 4 -4.5 l 3 2.6 l -4 4.5 Z" fill="#0f1a24" stroke="none" />
            </g>

            {/* Knurled adjusting nut (thumbwheel) at the base of the head */}
            <g transform="translate(15 54)">
              <circle r="9.5" fill="url(#pw-body)" stroke="#0f1a24" strokeWidth="0.8" />
              {Array.from({ length: 10 }).map((_, i) => {
                const a = (i / 10) * Math.PI * 2
                const x1 = Math.cos(a) * 7.6
                const y1 = Math.sin(a) * 7.6
                const x2 = Math.cos(a) * 10.6
                const y2 = Math.sin(a) * 10.6
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#0f1a24"
                    strokeWidth="1.6"
                  />
                )
              })}
            </g>

            {/* Hex fitting/nut sitting inside the jaw opening */}
            <g ref={nutRef}>
              <polygon points={hexPoints(31, 32, 12.5)} fill="url(#pw-nut)" stroke="#4a2e0f" strokeWidth="1" />
              <polygon
                points={hexPoints(31, 32, 9.6)}
                fill="none"
                stroke="#fff6da"
                strokeOpacity="0.55"
                strokeWidth="1"
              />
            </g>

            {/* Pooled droplet / wet sheen at the joint */}
            <ellipse
              ref={pooledDropRef}
              cx="31"
              cy="46"
              rx="5.4"
              ry="2.4"
              fill="url(#pw-water)"
            />

            {/* Drips */}
            <g ref={dripsRef}>
              <g ref={drip1Ref} transform="translate(26 45)">
                <path d="M0 0 C -1.6 3.4, -1.6 6.8, 0 8 C 1.6 6.8, 1.6 3.4, 0 0 Z" fill="url(#pw-water)" />
              </g>
              <g ref={drip2Ref} transform="translate(32 46.5)">
                <path d="M0 0 C -1.3 3, -1.3 5.8, 0 6.7 C 1.3 5.8, 1.3 3, 0 0 Z" fill="url(#pw-water)" />
              </g>
              <g ref={drip3Ref} transform="translate(29 44.5)">
                <path d="M0 0 C -1.1 2.5, -1.1 5, 0 5.7 C 1.1 5, 1.1 2.5, 0 0 Z" fill="url(#pw-water)" />
              </g>
            </g>

            {/* Fixed-light specular highlights, counter-rotated against wrench rotation */}
            <g ref={highlightsRef} fill="none" stroke="#ffffff" strokeLinecap="round">
              <path d="M17 89 L17 25" strokeWidth="2" strokeOpacity="0.55" />
              <path
                d="M18 51 C 18 57, 23 60, 29 60"
                strokeWidth="1.6"
                strokeOpacity="0.45"
              />
              <path d="M20 8 C 25 12, 30 15, 34 17" strokeWidth="1.4" strokeOpacity="0.4" />
              <polygon
                points={hexPoints(31, 32, 5.6)}
                fill="#ffffff"
                fillOpacity="0.35"
                stroke="none"
              />
            </g>

            {/* Polish shine sweep */}
            <rect
              ref={shineRef}
              x="10"
              y="2"
              width="4"
              height="94"
              fill="#ffffff"
              opacity="0"
              transform="skewX(-18)"
            />
            </g>
          </g>

          <text
            x="52"
            y={BASELINE}
            fontFamily="Georgia, 'Times New Roman', serif"
            fontWeight="700"
            fontSize="106"
            letterSpacing="-2"
            fill="#1e3a5f"
          >
            LUMBER
          </text>
        </svg>
      </div>
    )
  }
)

PlumberWordmark.displayName = 'PlumberWordmark'

export default PlumberWordmark
