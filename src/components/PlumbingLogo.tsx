interface PlumbingLogoProps {
  /** Overall size scale. "sm" for footer/compact, "lg" for header, "xl" for hero */
  size?: 'sm' | 'lg' | 'xl'
  /** If true, plays the leak/wrench animation loop. If false, renders a static "fixed" state. */
  animated?: boolean
  className?: string
}

const sizeMap = {
  sm: { fontSize: 22, width: 240, height: 64 },
  lg: { fontSize: 30, width: 300, height: 76 },
  xl: { fontSize: 54, width: 520, height: 130 },
}

/**
 * Animated brand mark: spells "PLUMBING" in a bold industrial slab font.
 * The "U" is rendered as a leaking pipe-joint. A wrench swings in, tightens
 * the joint, and the drip stops -- then the loop resets.
 */
export default function PlumbingLogo({ size = 'lg', animated = true, className = '' }: PlumbingLogoProps) {
  const { fontSize, width, height } = sizeMap[size]

  return (

    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="PLUMBING logo"
    >
      <defs>
        <linearGradient id="pipeMetal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="45%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="waterDrop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>

      {/* Text: P L */}
      <text
        x="0"
        y={height * 0.72}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="bold"
        fontSize={fontSize}
        fill="currentColor"
        letterSpacing="1"
      >
        PL
      </text>

      {/* The "U" as a pipe joint, positioned after "PL" */}
      <g transform={`translate(${fontSize * 1.62}, 0)`}>
        {/* Pipe body forming U shape */}
        <path
          d={`M 4 ${height * 0.28} 
              L 4 ${height * 0.55} 
              Q 4 ${height * 0.68} ${fontSize * 0.34} ${height * 0.68} 
              Q ${fontSize * 0.62} ${height * 0.68} ${fontSize * 0.62} ${height * 0.55} 
              L ${fontSize * 0.62} ${height * 0.28}`}
          fill="none"
          stroke="url(#pipeMetal)"
          strokeWidth={fontSize * 0.16}
          strokeLinecap="round"
        />
        {/* Joint highlight where the leak occurs (right side) */}
        <circle
          cx={fontSize * 0.62}
          cy={height * 0.5}
          r={fontSize * 0.11}
          fill="#94a3b8"
          stroke="#1e293b"
          strokeWidth="1"
        />

        {/* Dripping water (animated) */}
        {animated && (
          <>
            <circle
              cx={fontSize * 0.62}
              cy={height * 0.58}
              r={fontSize * 0.055}
              fill="url(#waterDrop)"
              className="origin-center animate-drip"
              style={{ transformBox: 'fill-box' }}
            />
            <ellipse
              cx={fontSize * 0.62}
              cy={height * 0.86}
              rx={fontSize * 0.1}
              ry={fontSize * 0.035}
              fill="#38bdf8"
              className="origin-center animate-splash"
              style={{ transformBox: 'fill-box' }}
            />
          </>
        )}

        {/* Wrench that swings in and tightens the joint */}
        <g
          transform={`translate(${fontSize * 0.62}, ${height * 0.5})`}
          className={animated ? 'origin-center animate-wrenchTighten' : ''}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        >
          <g transform="rotate(0)">
            <rect
              x={-fontSize * 0.05}
              y={-fontSize * 0.42}
              width={fontSize * 0.1}
              height={fontSize * 0.34}
              rx={fontSize * 0.03}
              fill="#1f2937"
            />
            <path
              d={`M ${-fontSize * 0.12} ${-fontSize * 0.42}
                  Q 0 ${-fontSize * 0.56} ${fontSize * 0.12} ${-fontSize * 0.42}
                  Q ${fontSize * 0.12} ${-fontSize * 0.3} 0 ${-fontSize * 0.28}
                  Q ${-fontSize * 0.12} ${-fontSize * 0.3} ${-fontSize * 0.12} ${-fontSize * 0.42} Z`}
              fill="#1f2937"
            />
          </g>
        </g>

        {/* Little steam/fixed puff once tightened */}
        {animated && (
          <g>
            <circle cx={fontSize * 0.62} cy={height * 0.3} r={fontSize * 0.05} fill="#e2e8f0" className="animate-steamPuff" style={{ animationDelay: '1.8s' }} />
            <circle cx={fontSize * 0.7} cy={height * 0.32} r={fontSize * 0.04} fill="#e2e8f0" className="animate-steamPuff" style={{ animationDelay: '2s' }} />
          </g>
        )}
      </g>

      {/* Remaining letters: M B I N G */}
      <text
        x={fontSize * 2.55}
        y={height * 0.72}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="bold"
        fontSize={fontSize}
        fill="currentColor"
        letterSpacing="1"
      >
        MBING
      </text>
    </svg>
  )
}
