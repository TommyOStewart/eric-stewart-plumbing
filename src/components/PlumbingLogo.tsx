import PlumberWordmark from './PlumberWordmark'

interface PlumbingLogoProps {
  /** "sm" for footer/compact, "lg" for header, "xl" for hero */
  size?: 'sm' | 'lg' | 'xl'
  /** true plays the GSAP leak -> tighten sequence on load and on click; false renders the static tightened state. */
  animated?: boolean
  className?: string
}

const heightMap = { sm: 34, lg: 50, xl: 96 }

/** Brand wordmark: "PLUMBING" with the P as an animated pipe wrench. */
export default function PlumbingLogo({ size = 'lg', animated = true, className }: PlumbingLogoProps) {
  return <PlumberWordmark suffix="LUMBING" height={heightMap[size]} animated={animated} className={className} />
}
