function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#efd6eb]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(243,194,239,0.68)_0%,rgba(235,218,232,0.45)_45%,rgba(238,233,234,0.62)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-4 pb-16 pt-6 sm:px-8 md:px-10 lg:px-14">
        <header className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <a href="#" className="inline-flex items-center gap-3 self-start">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-[#d3559c] bg-white/75 text-4xl font-semibold text-[#d22081] shadow-[0_8px_22px_rgba(133,25,95,0.28)] [font-family:'Playfair_Display',serif]">
              SE
            </span>
            <span className="hidden text-[#a21462] sm:block">
              <span className="block text-[22px] leading-none [font-family:'Playfair_Display',serif]">Scholar&apos;s</span>
              <span className="-mt-1 block text-[22px] leading-none [font-family:'Playfair_Display',serif]">Events</span>
            </span>
          </a>

          <nav className="hidden items-center justify-center gap-10 text-[24px] font-semibold text-[#3f1943] md:flex">
            <a href="#" className="transition hover:text-[#2e0f31]">Home</a>
            <a href="#" className="text-[#f50079] transition hover:text-[#db006d]">Events Packages</a>
            <a href="#" className="transition hover:text-[#2e0f31]">Services</a>
            <a href="#" className="transition hover:text-[#2e0f31]">About Us</a>
            <a href="#" className="transition hover:text-[#2e0f31]">Contact</a>
          </nav>

          <button
            type="button"
            className="justify-self-end rounded-2xl bg-[linear-gradient(180deg,#f344a0_0%,#9b2ba2_100%)] px-8 py-3 text-sm font-bold tracking-wide text-white shadow-[0_8px_0_rgba(92,23,106,0.55)] transition hover:brightness-110"
          >
            LOGIN
          </button>
        </header>

        <main className="mx-auto flex w-full max-w-[980px] flex-1 flex-col items-center justify-center text-center">
          <h1 className="mt-14 text-[52px] font-bold leading-[1.08] tracking-tight text-[#ef0b84] drop-shadow-[0_2px_8px_rgba(239,11,132,0.2)] sm:text-[64px] md:text-[80px] [font-family:'Playfair_Display',serif]">
            Your Dream Celebration,
            <br />
            All-In-One.
          </h1>

          <p className="mt-5 max-w-[860px] text-[22px] leading-relaxed text-[#1e1c21]/90 md:text-[33px]">
            We&apos;ve spent 15 years perfecting the art of the hassle-free milestone. Explore our curated wedding
            and debut collections designed to handle every detail from your first photo to your final dance.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <button
              type="button"
              className="min-w-[210px] rounded-[18px] bg-[linear-gradient(180deg,#ff0b87_0%,#9e149f_100%)] px-10 py-4 text-3xl font-bold text-white shadow-[0_7px_0_rgba(102,19,112,0.6)] transition hover:brightness-110"
            >
              Wedding
            </button>
            <button
              type="button"
              className="min-w-[210px] rounded-[18px] bg-[linear-gradient(180deg,#ff0b87_0%,#9e149f_100%)] px-10 py-4 text-3xl font-bold text-white shadow-[0_7px_0_rgba(102,19,112,0.6)] transition hover:brightness-110"
            >
              Debut
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
