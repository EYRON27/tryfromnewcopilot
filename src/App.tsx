import heroScene from './assets/hero.png'

function App() {
  return (
    <div className="landing-page">
      <div className="gradient-orb orb-left" aria-hidden="true" />
      <div className="gradient-orb orb-right" aria-hidden="true" />

      <header className="top-nav reveal reveal-1">
        <a href="#" className="brand-mark" aria-label="Painting Studio home">
          <span className="brand-icon" aria-hidden="true" />
          paintify
        </a>
        <nav className="main-links" aria-label="Primary navigation">
          <a href="#">Work</a>
          <a href="#">Service</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Shop</a>
        </nav>
      </header>

      <main className="hero-content">
        <div className="hero-text-block">
          <h1 className="reveal reveal-2">Exceptional Design for Ambitious Companies</h1>
          <p className="reveal reveal-3">
            We are Design Agency specialized in illustrations and Motion Graphic Based in Indonesia
          </p>
          <button className="cta-button reveal reveal-4" type="button">
            Let&apos;s Talk
          </button>
        </div>

        <section className="hero-image reveal reveal-5" aria-label="Studio preview">
          <img src={heroScene} alt="Design team collaborating in a digital control room" />
        </section>
      </main>
    </div>
  )
}

export default App
