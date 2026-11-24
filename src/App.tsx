
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Lightbulb,
  Code2,
  BrainCircuit,
  Layers3,
  Sparkles,
  MoveUpRight,
} from 'lucide-react'
import './App.css'

const navigation = [
  { label: 'Home', href: '#home' },
 { label: 'About', href: '/about' },
  { label: 'What We Do', href: '#capabilities' },
  { label: 'Our Products', href: '#products' },
  { label: 'Insights', href: '#insights' },
]

const capabilities = [
  {
    number: '01',
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    description:
      'Applying intelligent technologies to solve complex problems and create better experiences.',
  },
  {
    number: '02',
    icon: Code2,
    title: 'Software Engineering',
    description:
      'Designing and engineering reliable digital solutions built around real-world needs.',
  },
  {
    number: '03',
    icon: Layers3,
    title: 'Digital Product Development',
    description:
      'Turning promising ideas into thoughtful, useful and scalable technology products.',
  },
  {
    number: '04',
    icon: Lightbulb,
    title: 'Technology Innovation',
    description:
      'Exploring new possibilities and developing practical solutions through technology.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      {/* Navigation */}
      <header className="site-header">
        <nav className="navbar container">
          <a href="#home" className="brand" aria-label="Likeido Technologies home">
            <span className="brand-mark">L.</span>
            <span className="brand-name">
              LIKEIDO
              <small>TECHNOLOGIES</small>
            </span>
          </a>

          <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            {navigation.map((item) => (
              <a
                href={item.href}
                key={item.label}
                onClick={() => setMenuOpen(false)}
                className={item.label === 'Home' ? 'active' : ''}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="mobile-contact"
              onClick={() => setMenuOpen(false)}
            >
              Let's Talk <ArrowUpRight size={16} />
            </a>
          </div>

          <a href="#contact" className="nav-cta">
            Let's Talk <ArrowUpRight size={16} />
          </a>

          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero-section" id="home">
        <div className="hero-grid container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow">
              <span className="status-dot" />
              TECHNOLOGY & INNOVATION COMPANY
            </div>

            <h1>
              Building technology.
              <br />
              <span>Creating possibilities.</span>
            </h1>

            <p className="hero-description">
              We build intelligent digital products and develop technology
              solutions that address real-world challenges and create
              meaningful impact.
            </p>

            <div className="hero-actions">
              <a href="#products" className="button-primary">
                Explore our products <ArrowRight size={18} />
              </a>
             <a href="/about" className="button-secondary">
  Discover Likeido <ArrowUpRight size={17} />
</a>
            </div>

            <div className="hero-note">
              <span className="note-line" />
              Technology with purpose. Innovation with impact.
            </div>
          </motion.div>

          {/* Abstract technology visual */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-orbit orbit-three" />

            <div className="visual-core">
              <div className="core-inner">
                <span className="core-symbol">L.</span>
                <span className="core-caption">IDEAS INTO IMPACT</span>
              </div>
            </div>

            <div className="floating-card card-ai">
              <span className="floating-icon"><BrainCircuit size={19} /></span>
              <span>
                <strong>Intelligence</strong>
                <small>Think beyond limits</small>
              </span>
            </div>

            <div className="floating-card card-build">
              <span className="floating-icon"><Code2 size={19} /></span>
              <span>
                <strong>Engineering</strong>
                <small>Build what matters</small>
              </span>
            </div>

            <div className="visual-spark spark-one"><Sparkles size={19} /></div>
            <div className="visual-spark spark-two"><MoveUpRight size={20} /></div>

            <div className="visual-label">
              <span>01 / 03</span>
              <span>INNOVATION IN MOTION</span>
            </div>
          </motion.div>
        </div>

        <div className="hero-bottom container">
          <span>INNOVATION</span>
          <span className="bottom-divider" />
          <span>TECHNOLOGY</span>
          <span className="bottom-divider" />
          <span>IMPACT</span>
          <span className="hero-scroll">SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section section-padding" id="about">
        <div className="container intro-grid">
          <div className="section-label">
            <span>01 — WHO WE ARE</span>
            <span className="label-line" />
          </div>

          <div className="intro-content">
            <h2>
              Innovation begins
              <br />
              with <span>purpose.</span>
            </h2>

            <p>
              Likeido Technologies is a technology and innovation company
              focused on building intelligent digital products and developing
              technology-driven solutions that address meaningful challenges.
            </p>

            <p>
              We bring together technology, research, creativity and
              human-centred thinking to transform ideas into practical
              solutions.
            </p>

            <a href="#contact" className="text-link">
              Get to know us <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="capabilities-section section-padding" id="capabilities">
        <div className="container">
          <div className="capabilities-heading">
            <div>
              <div className="section-label light-label">
                <span>02 — WHAT WE DO</span>
              </div>
              <h2>
                Ideas are powerful.
                <br />
                <span>Execution makes them real.</span>
              </h2>
            </div>

            <p>
              We combine technical expertise and creative thinking to turn
              complex challenges into practical digital solutions.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((item) => {
              const Icon = item.icon

              return (
                <motion.article
                  className="capability-card"
                  key={item.number}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="capability-top">
                    <span>{item.number}</span>
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="capability-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </motion.article>
              )
            })}
          </div>

          <div className="capabilities-footer">
            <span>THOUGHTFUL TECHNOLOGY. MEANINGFUL SOLUTIONS.</span>
            <a href="#contact">
              Explore collaboration <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="products-section section-padding" id="products">
        <div className="container">
          <div className="section-label">
            <span>03 — OUR PRODUCTS</span>
            <span className="label-line" />
          </div>

          <div className="products-heading">
            <h2>
              Built around ideas.
              <br />
              <span>Designed for impact.</span>
            </h2>
            <p>
              We develop our own technology products to address challenges
              that matter.
            </p>
          </div>

          <div className="product-grid">
            <article className="product-card product-popu">
              <div className="product-card-top">
                <span className="product-category">HEALTHCARE TECHNOLOGY</span>
                <span className="product-number">01</span>
              </div>

              <div className="product-visual popu-visual">
                <div className="product-orbit" />
                <div className="product-visual-content">
                  <BrainCircuit size={45} strokeWidth={1.2} />
                  <span>POPU</span>
                  <small>PUBLIC HEALTH INTELLIGENCE</small>
                </div>
              </div>

              <div className="product-info">
                <div>
                  <h3>POPU</h3>
                  <p>
                    Transforming fragmented health data into actionable
                    intelligence for public-health investigation and
                    decision-making.
                  </p>
                </div>
                <a href="https://popu-six.vercel.app/" target="_blank" rel="noreferrer" aria-label="Explore POPU">
                  <ArrowUpRight size={21} />
                </a>
              </div>
            </article>

            <article className="product-card product-funi">
              <div className="product-card-top">
                <span className="product-category">EDUCATION TECHNOLOGY</span>
                <span className="product-number">02</span>
              </div>

              <div className="product-visual funi-visual">
                <div className="funi-orbit" />
                <div className="product-visual-content">
                  <Sparkles size={45} strokeWidth={1.2} />
                  <span>funi.</span>
                  <small>LEARNING, REIMAGINED</small>
                </div>
              </div>

              <div className="product-info">
                <div>
                  <h3>Funi</h3>
                  <p>
                    Making learning more accessible, engaging and
                    personalised through artificial intelligence.
                  </p>
                </div>
                <a href="#contact" aria-label="Learn about Funi">
                  <ArrowUpRight size={21} />
                </a>
              </div>
            </article>
          </div>

          <div className="products-note">
            <Sparkles size={16} />
            More ideas. More possibilities. More to come.
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-section" id="contact">
        <div className="container contact-content">
          <span className="contact-eyebrow">LET'S CREATE SOMETHING MEANINGFUL</span>
          <h2>
            Have an idea
            <br />
            <span>worth building?</span>
          </h2>
          <p>
            Let's explore what technology can make possible when ideas meet
            the right people.
          </p>
          <a href="mailto:hello@likeido.com" className="button-primary contact-button">
            Start a conversation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer" id="insights">
        <div className="container">
          <div className="footer-main">
            <a href="#home" className="brand footer-brand">
              <span className="brand-mark">L.</span>
              <span className="brand-name">
                LIKEIDO
                <small>TECHNOLOGIES</small>
              </span>
            </a>

            <p>
              Building technology. Creating possibilities.
              <br />
              Technology with purpose. Innovation with impact.
            </p>

            <a href="mailto:hello@likeido.com" className="footer-email">
              hello@likeido.com <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Likeido Technologies. All rights reserved.</span>
            <a href="#home">Back to top ↑</a>
            <span>TECHNOLOGY. INNOVATION. IMPACT.</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
