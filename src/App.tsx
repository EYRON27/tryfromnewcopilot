import { useEffect, useRef } from 'react'
import type { PointerEvent, WheelEvent } from 'react'

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
    <div
      className="relative min-h-screen px-7 pt-7 pb-10 box-border"
      style={{
        background:
          'radial-gradient(circle at 0% 45%, rgba(176, 244, 94, 0.42), transparent 28%), radial-gradient(circle at 100% 45%, rgba(176, 244, 94, 0.42), transparent 28%), linear-gradient(180deg, #f4cc84 0%, #eed09a 100%)',
      }}
    >
      <div className="absolute inset-4 rounded-[26px] bg-[#fbf9f5] border border-[#e4d9c9] shadow-[0_24px_60px_rgba(78,55,20,0.14)] pointer-events-none" />

      <div className="absolute top-4 bottom-4 w-2 rounded-full filter blur-sm z-0 left-4 bg-gradient-to-b from-[#c7f56a] to-[#87f38b]" aria-hidden="true" />
      <div className="absolute top-4 bottom-4 w-2 rounded-full filter blur-sm z-0 right-4 bg-gradient-to-b from-[#87f38b] to-[#c7f56a]" aria-hidden="true" />

      <header className="relative z-10 max-w-[1180px] w-[calc(100%-56px)] mx-auto flex items-center justify-between gap-6 pt-5">
        <div className="font-[var(--heading-font)] text-2xl font-bold tracking-tight text-[#0e1116]">BrandLyft</div>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          <a href="#" className="text-[#2e3138] no-underline">Brands</a>
          <a href="#" className="text-[#2e3138] no-underline">Creators</a>
          <a href="#" className="text-[#2e3138] no-underline">Pricing</a>
          <a href="#" className="text-[#2e3138] no-underline">Use Cases</a>
          <a href="#" className="text-[#2e3138] no-underline">Contact</a>
        </nav>
        <div className="flex items-center gap-2.5">
          <button className="rounded-full px-4 py-2.5 text-sm font-semibold bg-white text-[#22252c] border border-[#e6e2d8]">Log in</button>
          <button className="rounded-full px-4 py-2.5 text-sm font-semibold bg-[#263238] text-white">Sign up</button>
        </div>
      </header>

      <main className="relative z-10 max-w-[1180px] w-[calc(100%-56px)] mx-auto mt-6 text-center">
        <div className="mx-auto max-w-[820px]">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#f2c26b] text-[#2f281c] text-sm font-extrabold tracking-tight">Join over 100,000 happy creators</div>
          <h1 className="font-[var(--heading-font)] my-4 text-black text-[clamp(40px,7.5vw,86px)] leading-[0.95] tracking-tight">Engage Audiences with Stunning Videos</h1>
          <p className="mx-auto max-w-[560px] text-[#4c4a46] text-[clamp(15px,1.8vw,27px)] leading-[1.45]">
            Boost your brand with high-impact short videos from our expert
            content creators. Our team is ready to propel your business forward.
          </p>
          <div className="flex justify-center items-center gap-3.5 mt-7">
            <button className="rounded-full px-7 py-3 font-semibold bg-gradient-to-b from-[#fd9172] to-[#f4604e] text-white border border-dashed border-white/55 shadow-[0_12px_28px_rgba(244,96,78,0.35)]">Get Started</button>
            <span className="text-sm text-[#44423d] rotate-[-19deg]">It&apos;s free</span>
          </div>
        </div>

        <div
          className="relative z-10 -mx-7 mt-6 overflow-x-auto overflow-y-hidden py-4 cursor-grab touch-pan-y select-none"
          ref={stripRef}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="flex gap-5 px-9">
            {[...images, ...images].map((src, index) => (
              <div className="flex-none w-[clamp(140px,19vw,205px)] aspect-[0.69] rounded-[24px] overflow-hidden border border-white/55 shadow-[0_14px_22px_rgba(10,10,10,0.18)]" key={index}>
                <img className="w-full h-full object-cover block" src={src} alt="Video preview" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
