
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Lightbulb,
  Layers3,
  Target,
  Eye,
  Compass,
  Sparkles,
} from 'lucide-react'
import './About.css'

const values = [
  {
    icon: Lightbulb,
    title: 'Purposeful Innovation',
    description:
      'We believe technology should solve meaningful problems. We focus on ideas that have practical value and the potential to make a difference.',
  },
  {
    icon: Target,
    title: 'Problem-First Thinking',
    description:
      'We begin by understanding the challenge before deciding what to build. Good solutions start with asking the right questions.',
  },
  {
    icon: Layers3,
    title: 'Thoughtful Engineering',
    description:
      'We value quality, usability and continuous improvement in the products and solutions we develop.',
  },
  {
    icon: Sparkles,
    title: 'Continuous Learning',
    description:
      'We stay curious, explore emerging technologies and remain open to better ways of solving problems.',
  },
]

const services = [
  {
    icon: Code2,
    number: '01',
    title: 'Software Engineering',
    description:
      'Designing and developing digital systems, web applications and software solutions.',
  },
  {
    icon: BrainCircuit,
    number: '02',
    title: 'Artificial Intelligence',
    description:
      'Applying AI and intelligent systems to improve processes and solve complex challenges.',
  },
  {
    icon: Layers3,
    number: '03',
    title: 'Digital Product Development',
    description:
      'Taking ideas from early concepts to useful, thoughtfully designed technology products.',
  },
  {
    icon: Lightbulb,
    number: '04',
    title: 'Technology Consulting',
    description:
      'Helping organisations explore technology opportunities and identify practical digital solutions.',
  },
]

function About() {
  return (
    <main className="about-page">
      {/* Navigation */}
      <header className="about-header">
        <nav className="container about-navbar">
          <Link to="/" className="brand">
            <span className="brand-mark">L.</span>
            <span className="brand-name">
              LIKEIDO
              <small>TECHNOLOGIES</small>
            </span>
          </Link>

          <div className="about-nav-links">
            <Link to="/">Home</Link>
            <a href="#about-intro" className="selected">About</a>
            <a href="#our-approach">Our Approach</a>
            <a href="#our-values">Our Values</a>
            <Link to="/#products">Our Products</Link>
          </div>

          <a href="#about-contact" className="about-nav-cta">
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="about-hero" id="about-intro">
        <div className="container about-hero-grid">
          <motion.div
            className="about-hero-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-eyebrow">
              <span /> BEYOND TECHNOLOGY. TOWARDS IMPACT.
            </div>

            <h1>
              We believe in
              <br />
              <span>what technology</span>
              <br />
              can make possible.
            </h1>

            <p>
              We are a technology and innovation company building digital
              products and developing practical technology solutions for
              real-world challenges.
            </p>

            <a href="#about-intro-content" className="about-primary-button">
              Discover who we are <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="about-hero-art"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="about-art-ring ring-a" />
            <div className="about-art-ring ring-b" />
            <div className="about-art-ring ring-c" />

            <div className="about-art-center">
              <span>L.</span>
              <small>IDEAS INTO IMPACT</small>
            </div>

            <div className="about-art-caption caption-top">
              <Sparkles size={17} />
              <span>Ideas</span>
            </div>

            <div className="about-art-caption caption-bottom">
              <Code2 size={17} />
              <span>Execution</span>
            </div>
          </motion.div>
        </div>

        <div className="container about-hero-bottom">
          <span>INNOVATION</span>
          <span className="about-dot" />
          <span>ENGINEERING</span>
          <span className="about-dot" />
          <span>IMPACT</span>
          <span className="about-page-number">01 / ABOUT LIKEIDO</span>
        </div>
      </section>

      {/* Company introduction */}
      <section className="about-introduction section-padding" id="about-intro-content">
        <div className="container about-intro-grid">
          <div className="about-section-label">
            <span>01 — WHO WE ARE</span>
            <div />
          </div>

          <div className="about-intro-content">
            <h2>
              Technology is our tool.
              <br />
              <span>Solving problems is our focus.</span>
            </h2>

            <p>
              Likeido Technologies is a technology and innovation company
              focused on building proprietary digital products and delivering
              technology solutions to organisations.
            </p>

            <p>
              Our work brings together software engineering, artificial
              intelligence, research and human-centred thinking. We explore
              opportunities, understand challenges and develop solutions
              designed around real needs.
            </p>

            <p>
              From products we build ourselves to solutions developed in
              collaboration with others, our focus remains on making technology
              useful, accessible and meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="mission-section section-padding">
        <div className="container">
          <div className="about-section-label light-about-label">
            <span>02 — OUR DIRECTION</span>
            <div />
          </div>

          <div className="mission-grid">
            <motion.article
              className="mission-card"
              whileHover={{ y: -5 }}
            >
              <div className="mission-icon">
                <Target size={25} />
              </div>
              <span>OUR MISSION</span>
              <h2>Build technology that makes a difference.</h2>
              <p>
                To develop intelligent digital products and practical
                technology solutions that address real-world challenges and
                create meaningful value for people and organisations.
              </p>
            </motion.article>

            <motion.article
              className="mission-card vision-card"
              whileHover={{ y: -5 }}
            >
              <div className="mission-icon">
                <Eye size={25} />
              </div>
              <span>OUR VISION</span>
              <h2>Make meaningful innovation accessible.</h2>
              <p>
                To become a forward-thinking technology company known for
                developing useful products and solutions that contribute to a
                better, more connected and technology-enabled future.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="approach-section section-padding" id="our-approach">
        <div className="container">
          <div className="about-section-label">
            <span>03 — OUR APPROACH</span>
            <div />
          </div>

          <div className="approach-heading">
            <h2>
              From understanding
              <br />
              <span>to building what matters.</span>
            </h2>
            <p>
              We believe meaningful technology comes from understanding the
              problem, thinking carefully and executing with purpose.
            </p>
          </div>

          <div className="approach-steps">
            <article>
              <span>01</span>
              <Compass size={24} />
              <h3>Understand</h3>
              <p>
                We explore the challenge, the people affected and the context
                surrounding the problem.
              </p>
            </article>

            <article>
              <span>02</span>
              <Lightbulb size={24} />
              <h3>Explore</h3>
              <p>
                We investigate ideas, evaluate possibilities and identify
                appropriate technologies.
              </p>
            </article>

            <article>
              <span>03</span>
              <Code2 size={24} />
              <h3>Build</h3>
              <p>
                We turn promising ideas into digital products and practical
                solutions through thoughtful engineering.
              </p>
            </article>

            <article>
              <span>04</span>
              <ArrowUpRight size={24} />
              <h3>Improve</h3>
              <p>
                We learn from feedback, refine our work and continuously look
                for ways to create more value.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section section-padding" id="our-values">
        <div className="container">
          <div className="about-section-label light-about-label">
            <span>04 — WHAT GUIDES US</span>
            <div />
          </div>

          <div className="values-heading">
            <h2>
              Principles behind
              <br />
              <span>everything we build.</span>
            </h2>
            <p>
              Our values shape how we think, how we work and how we approach
              every opportunity.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <motion.article
                  className="value-card"
                  key={value.title}
                  whileHover={{ y: -5 }}
                >
                  <div className="value-card-top">
                    <span>0{index + 1}</span>
                    <Icon size={24} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products and services */}
      <section className="about-services section-padding">
        <div className="container">
          <div className="about-section-label">
            <span>05 — WHAT WE DO</span>
            <div />
          </div>

          <div className="about-services-heading">
            <h2>
              Two sides of innovation.
              <br />
              <span>One shared purpose.</span>
            </h2>
            <p>
              We build our own products and work with organisations to develop
              technology solutions that meet their needs.
            </p>
          </div>

          <div className="business-model-grid">
            <article className="business-model-card">
              <span>01 / PRODUCT DEVELOPMENT</span>
              <Layers3 size={28} />
              <h3>Products we build</h3>
              <p>
                We identify opportunities and develop proprietary technology
                products designed to address challenges across different
                industries.
              </p>
              <Link to="/#products">
                Explore our products <ArrowUpRight size={16} />
              </Link>
            </article>

            <article className="business-model-card service-model-card">
              <span>02 / TECHNOLOGY SERVICES</span>
              <Code2 size={28} />
              <h3>Solutions we deliver</h3>
              <p>
                We provide technology expertise and development services to
                help organisations turn ideas, needs and opportunities into
                practical digital solutions.
              </p>
              <a href="#about-contact">
                Discuss a project <ArrowUpRight size={16} />
              </a>
            </article>
          </div>

          <div className="service-list">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <div className="service-row" key={service.number}>
                  <span>{service.number}</span>
                  <Icon size={21} />
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <ArrowUpRight size={18} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="about-contact" id="about-contact">
        <div className="container about-contact-content">
          <span>THE FUTURE STARTS WITH AN IDEA</span>
          <h2>
            Let's build
            <br />
            <strong>what matters.</strong>
          </h2>
          <p>
            Have a challenge to solve, an idea to explore or a project to
            discuss? We'd like to hear from you.
          </p>
          <a href="mailto:hello@likeido.com">
            Start a conversation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="container">
          <div className="about-footer-main">
            <Link to="/" className="brand">
              <span className="brand-mark">L.</span>
              <span className="brand-name">
                LIKEIDO
                <small>TECHNOLOGIES</small>
              </span>
            </Link>

            <p>
              Building technology.
              <br />
              Creating possibilities.
            </p>

            <a href="mailto:hello@likeido.com">
              hello@likeido.com <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="about-footer-bottom">
            <span>
              © {new Date().getFullYear()} Likeido Technologies. All rights reserved.
            </span>
            <Link to="/">Back to homepage ↑</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default About
