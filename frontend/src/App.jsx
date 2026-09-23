import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
   <div className={`app ${darkMode ? 'dark' : ''}`}>
      {/* Navbar */}

       <nav className="navbar">
  <div className="logo">
    <span className="logo-icon">✦</span>
    Flashes
  </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-buttons">
  <button
    className="theme-btn"
    onClick={() => setDarkMode(!darkMode)}
    aria-label="Toggle dark mode"
  >
    {darkMode ? '☀️' : '🌙'}
  </button>

  <button className="login-btn">Log in</button>
  <button className="signup-btn">Get Started</button>
</div>
</nav>
      {/* Hero Section */}
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <div className="badge">
              ✨ AI-powered study platform
            </div>

            <h1>
              Study smarter.
              <br />
              <span>Remember more.</span>
            </h1>

            <p className="hero-text">
              Turn your PDFs and study material into smart summaries,
              flashcards, quizzes, and personalized learning with AI.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Start Learning →
              </button>

              <button className="secondary-btn">
                Explore Features
              </button>
            </div>

            <p className="small-text">
              Upload your study material and let AI do the hard work.
            </p>
          </div>

          {/* Study Card */}
          <div className="hero-card">
            <div className="card-top">
              <div className="file-icon">📄</div>
              <div>
                <h3>Operating Systems.pdf</h3>
                <p>Uploaded just now</p>
              </div>
            </div>

            <div className="ai-box">
              <div className="ai-title">
                <span>✨</span>
                AI Summary
              </div>

              <p>
                An operating system manages computer hardware and
                provides services for applications...
              </p>
            </div>

            <div className="flashcard">
              <div className="flashcard-label">FLASHCARD</div>
              <h3>What is an Operating System?</h3>
              <p>
                Software that manages computer hardware and software
                resources.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="features-section">
          <div className="section-heading">
            <span>POWERFUL FEATURES</span>
            <h2>Everything you need to study better.</h2>
            <p>
              Flashes turns your study material into an interactive
              learning experience.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📄</div>
              <h3>PDF to Summary</h3>
              <p>
                Upload your PDF and get a clear, easy-to-understand
                summary in seconds.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>AI Flashcards</h3>
              <p>
                Automatically create useful flashcards from your
                study material.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Ask AI</h3>
              <p>
                Ask questions about your uploaded documents and get
                helpful answers.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>AI Quizzes</h3>
              <p>
                Test yourself with quizzes generated from your own
                study material.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Smart Search</h3>
              <p>
                Quickly find the files and study content you need.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Track Progress</h3>
              <p>
                Keep track of your learning progress and revision.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="steps-section">
          <div className="section-heading">
            <span>HOW IT WORKS</span>
            <h2>From PDF to prepared in minutes.</h2>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Upload</h3>
              <p>Upload your PDF or study material.</p>
            </div>

            <div className="step">
              <div className="step-number">02</div>
              <h3>AI Processes</h3>
              <p>
                Flashes reads your content and creates useful study
                material.
              </p>
            </div>

            <div className="step">
              <div className="step-number">03</div>
              <h3>Study</h3>
              <p>
                Learn using summaries, flashcards, quizzes, and AI
                assistance.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="about-section">
          <div>
            <span>ABOUT FLASHES</span>
            <h2>Your personal AI study companion.</h2>
          </div>

          <p>
            Flashes is designed to make studying easier by turning
            lengthy study material into simple, interactive learning
            resources. Instead of spending hours creating notes and
            flashcards, let AI help you focus on understanding and
            remembering.
          </p>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2>Ready to study smarter?</h2>
          <p>
            Upload your first PDF and start learning with Flashes.
          </p>
          <button className="primary-btn">
            Get Started →
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="logo">
          <span className="logo-icon">✦</span>
          Flashes
        </div>

        <p>© 2026 Flashes. Study smarter with AI.</p>
      </footer>
    </div>
  )
}

export default App
