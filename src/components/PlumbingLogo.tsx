import { useState, useCallback, useRef } from 'react'

interface PlumbingLogoProps {
  /** Overall size scale. "sm" for footer/compact, "lg" for header, "xl" for hero */
  size?: 'sm' | 'lg' | 'xl'
  /** If true, plays leak->tighten animation on mount and replays on hover. If false, renders static "fixed" state. */
  animated?: boolean
  className?: string
}

const sizeMap = {
  sm: { fontSize: 22, width: 190, height: 50 },
  lg: { fontSize: 30, width: 258, height: 66 },
  xl: { fontSize: 54, width: 452, height: 118 },
}

/** Total duration of the leak+ratchet sequence, in ms */
const SEQUENCE_MS = 3300

/**
 * Brand wordmark: "PLUMBING" where the "P" is a detailed pipe wrench.
 *
 * The wrench IS the letter P:
 *  - Red handle running vertically = the stem of the P
 *  - Grey head/hook jaw curving up and over to the right = the bowl of the P
 *  - Serrated teeth on the inside of the jaws
 *  - In the open mouth of the jaw (the enclosed area of the P) sits a grey
 *    hex bolt that is leaking.
 *
 * On mount / hover: the bolt leaks drips, the wrench rocks clockwise to
 * tighten, ratchets back, tightens again -- and the leak stops.
 */
export default function PlumbingLogo({ size = 'lg', animated = true, className = '' }: PlumbingLogoProps) {
  const { fontSize, width, height } = sizeMap[size]
  const s = fontSize / 30 // scale factor relative to "lg" baseline

  // P geometry: stem left edge at x0, letter height h
  const h = height * 0.82
  const top = (height - h) / 2
  const x0 = 6 * s

  // Bolt sits in the jaw opening (the "enclosed" part of the P bowl)
  const boltX = x0 + 15 * s
  const boltY = top + h * 0.23


  // Key used to force remount of the animated parts, replaying CSS animations
  const [playKey, setPlayKey] = useState(0)
  const playingRef = useRef(false)

  const replay = useCallback(() => {
    if (!animated || playingRef.current) return
    playingRef.current = true
    setPlayKey(k => k + 1)
    window.setTimeout(() => {
      playingRef.current = false
    }, SEQUENCE_MS)
  }, [animated])

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Plumbing logo"
      onMouseEnter={replay}
      style={{ cursor: animated ? 'pointer' : undefined }}
    >
      <defs>
        <linearGradient id="pwHandleRed" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="45%" stopColor="#b91c1c" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
        <linearGradient id="pwSteel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e5e7eb" />
          <stop offset="50%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#4b5563" />
        </linearGradient>
        <linearGradient id="pwDrop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>

      <g key={playKey}>
        {/* ==================== THE PIPE WRENCH (shaped like a P) ==================== */}
        {/* view-box transform origin so rotation is exactly centered on the bolt */}
        <g
          className={animated ? 'animate-ratchetTighten' : ''}
          style={{
            transformBox: 'view-box',
            transformOrigin: `${boltX}px ${boltY}px`
          }}
        >

          {/* --- Red handle = stem of the P (vertical, full height) --- */}
          <rect
            x={x0}
            y={top + 6 * s}
            width={7.5 * s}
            height={h - 6 * s}
            rx={2.5 * s}
            fill="url(#pwHandleRed)"
            stroke="#450a0a"
            strokeWidth="0.75"
          />
          {/* Handle end cap */}
          <rect
            x={x0 + 0.8 * s}
            y={top + h - 5 * s}
            width={5.9 * s}
            height={4 * s}
            rx={1.5 * s}
            fill="#7f1d1d"
          />
          {/* Handle grip lines */}
          <line x1={x0 + 1.5 * s} y1={top + h * 0.62} x2={x0 + 6 * s} y2={top + h * 0.62} stroke="#450a0a" strokeWidth={0.8 * s} opacity="0.5" />
          <line x1={x0 + 1.5 * s} y1={top + h * 0.72} x2={x0 + 6 * s} y2={top + h * 0.72} stroke="#450a0a" strokeWidth={0.8 * s} opacity="0.5" />
          <line x1={x0 + 1.5 * s} y1={top + h * 0.82} x2={x0 + 6 * s} y2={top + h * 0.82} stroke="#450a0a" strokeWidth={0.8 * s} opacity="0.5" />

          {/* --- Grey head = bowl of the P --- */}
          {/* Lower fixed jaw: extends right from the top of the handle */}
          <path
            d={`M ${x0} ${top + h * 0.42}
                L ${boltX + 11 * s} ${top + h * 0.42}
                Q ${boltX + 14 * s} ${top + h * 0.42} ${boltX + 14 * s} ${top + h * 0.36}
                L ${boltX + 14 * s} ${top + h * 0.30}
                L ${boltX + 8 * s} ${top + h * 0.30}
                L ${boltX + 8 * s} ${top + h * 0.34}
                L ${x0} ${top + h * 0.34}
                Z`}
            fill="url(#pwSteel)"
            stroke="#1f2937"
            strokeWidth="0.75"
          />
          {/* Upper hook jaw: curves up and over the bolt, closing the P bowl */}
          <path
            d={`M ${x0} ${top + 2 * s}
                L ${boltX + 8 * s} ${top + 2 * s}
                Q ${boltX + 14 * s} ${top + 2 * s} ${boltX + 14 * s} ${top + h * 0.14}
                L ${boltX + 14 * s} ${top + h * 0.22}
                L ${boltX + 8 * s} ${top + h * 0.22}
                L ${boltX + 8 * s} ${top + h * 0.12}
                L ${x0} ${top + h * 0.12}
                Z`}
            fill="url(#pwSteel)"
            stroke="#1f2937"
            strokeWidth="0.75"
          />
          {/* Teeth on the upper jaw (pointing down into the mouth) */}
          {[0, 1, 2, 3, 4].map(i => {
            const tx = boltX - 5 * s + i * 3.2 * s
            return (
              <polygon
                key={`ut${i}`}
                points={`${tx},${top + h * 0.12} ${tx + 3.2 * s},${top + h * 0.12} ${tx + 1.6 * s},${top + h * 0.155}`}
                fill="#6b7280"
                stroke="#1f2937"
                strokeWidth="0.4"
              />
            )
          })}
          {/* Teeth on the lower jaw (pointing up into the mouth) */}
          {[0, 1, 2, 3, 4].map(i => {
            const tx = boltX - 5 * s + i * 3.2 * s
            return (
              <polygon
                key={`lt${i}`}
                points={`${tx},${top + h * 0.34} ${tx + 3.2 * s},${top + h * 0.34} ${tx + 1.6 * s},${top + h * 0.305}`}
                fill="#6b7280"
                stroke="#1f2937"
                strokeWidth="0.4"
              />
            )
          })}
          {/* Adjustment worm-screw knurl where head meets handle */}
          <rect
            x={x0 - 2 * s}
            y={top + h * 0.16}
            width={4.5 * s}
            height={7 * s}
            rx={1.2 * s}
            fill="url(#pwSteel)"
            stroke="#1f2937"
            strokeWidth="0.6"
          />
          <line x1={x0 - 1 * s} y1={top + h * 0.18} x2={x0 + 1.5 * s} y2={top + h * 0.18} stroke="#1f2937" strokeWidth="0.5" />
          <line x1={x0 - 1 * s} y1={top + h * 0.21} x2={x0 + 1.5 * s} y2={top + h * 0.21} stroke="#1f2937" strokeWidth="0.5" />
          <line x1={x0 - 1 * s} y1={top + h * 0.24} x2={x0 + 1.5 * s} y2={top + h * 0.24} stroke="#1f2937" strokeWidth="0.5" />
        </g>

        {/* ==================== GREY BOLT IN THE JAW OPENING (leaking) ==================== */}
        {/* Sized to fill the jaw mouth so the teeth actually bite into it.
            The bolt rotates along with the wrench turns. */}
        <g transform={`translate(${boltX}, ${boltY})`}>
          <g
            className={animated ? 'animate-ratchetTighten' : ''}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          >
            <polygon
              points={`0,${-9.5 * s} ${8.2 * s},${-4.75 * s} ${8.2 * s},${4.75 * s} 0,${9.5 * s} ${-8.2 * s},${4.75 * s} ${-8.2 * s},${-4.75 * s}`}
              fill="url(#pwSteel)"
              stroke="#1f2937"
              strokeWidth="0.75"
            />
            <circle r={3 * s} fill="#1f2937" />
          </g>
        </g>


        {/* Drips leaking from the bolt (stop when tightened) */}
        {animated && (
          <>
            <circle
              cx={boltX}
              cy={boltY + 8 * s}
              r={1.5 * s}
              fill="url(#pwDrop)"
              className="animate-dripOnce"
              style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDelay: '0.15s' }}
            />
            <circle
              cx={boltX}
              cy={boltY + 8 * s}
              r={1.5 * s}
              fill="url(#pwDrop)"
              className="animate-dripOnce"
              style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDelay: '0.9s' }}
            />
            <circle
              cx={boltX}
              cy={boltY + 8 * s}
              r={1.5 * s}
              fill="url(#pwDrop)"
              className="animate-dripOnce"
              style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDelay: '1.65s' }}
            />
          </>
        )}


        {/* Spark / steam puff once tightened */}
        {animated && (
          <g>
            <circle cx={boltX + 4 * s} cy={boltY + 4 * s} r={1.3 * s} fill="#fde68a" className="animate-sparkPop" />
            <circle cx={boltX + 7 * s} cy={boltY + 1 * s} r={0.9 * s} fill="#fef3c7" className="animate-sparkPop" style={{ animationDelay: '0.05s' }} />
            <circle cx={boltX + 2 * s} cy={boltY - 2 * s} r={0.9 * s} fill="#fef3c7" className="animate-sparkPop" style={{ animationDelay: '0.1s' }} />
          </g>
        )}
      </g>

      {/* Rest of the word, tight against the wrench-P */}
      <text
        x={x0 + 34 * s}
        y={height / 2 + fontSize * 0.36}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="bold"
        fontSize={fontSize}
        fill="currentColor"
        letterSpacing="0.5"
      >
        LUMBING
      </text>
    </svg>
  )
}
