import { useEffect, useRef } from 'react'
import type { PointerEvent, WheelEvent } from 'react'
import './App.css'

const images = [
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=480&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=480&q=80',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=480&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=480&q=80',
  'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=480&q=80',
  'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=480&q=80',
]

function App() {
  const stripRef = useRef<HTMLDivElement | null>(null)
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
  })

  const syncLoop = () => {
    const container = stripRef.current
    if (!container) return

    const loopWidth = container.scrollWidth / 2
    if (loopWidth <= 0) return

    if (container.scrollLeft >= loopWidth) {
      container.scrollLeft -= loopWidth
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += loopWidth
    }
  }

  useEffect(() => {
    const container = stripRef.current
    if (!container) return

    // Start from center copy so drag/wheel can loop in both directions.
    container.scrollLeft = container.scrollWidth / 2

    const handleResize = () => {
      container.scrollLeft = container.scrollWidth / 2
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const container = stripRef.current
    if (!container) return

    event.preventDefault()

    const delta = event.deltaY || event.deltaX
    if (!delta) return

    container.scrollLeft += delta
    syncLoop()
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const container = stripRef.current
    if (!container) return

    dragStateRef.current = {
      isDragging: true,
      startX: event.clientX,
      startScrollLeft: container.scrollLeft,
    }

    container.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const container = stripRef.current
    if (!container || !dragStateRef.current.isDragging) return

    event.preventDefault()
    const dragDistance = event.clientX - dragStateRef.current.startX
    container.scrollLeft = dragStateRef.current.startScrollLeft - dragDistance
    syncLoop()
  }

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const container = stripRef.current
    if (!container) return

    dragStateRef.current.isDragging = false
    container.releasePointerCapture(event.pointerId)
  }

  return (
    <div className="landing-page">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <header className="lp-header">
        <div className="lp-logo">BrandLyft</div>
        <nav className="lp-nav">
          <a href="#">Brands</a>
          <a href="#">Creators</a>
          <a href="#">Pricing</a>
          <a href="#">Use Cases</a>
          <a href="#">Contact</a>
        </nav>
        <div className="lp-actions">
          <button className="lp-btn lp-btn-ghost">Log in</button>
          <button className="lp-btn lp-btn-primary">Sign up</button>
        </div>
      </header>

      <main className="lp-main">
        <div className="lp-copy">
          <div className="lp-badge">Join over 100,000 happy creators</div>
          <h1>Engage Audiences with Stunning Videos</h1>
          <p className="lp-subtitle">
            Boost your brand with high-impact short videos from our expert
            content creators. Our team is ready to propel your business forward.
          </p>
          <div className="lp-cta-row">
            <button className="lp-btn lp-btn-cta">Get Started</button>
            <span className="lp-cta-note">It&apos;s free</span>
          </div>
        </div>

        <div
          className="lp-strip-wrapper"
          ref={stripRef}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <div className="lp-strip">
            {[...images, ...images].map((src, index) => (
              <div className="lp-card" key={index}>
                <img src={src} alt="Video preview" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
