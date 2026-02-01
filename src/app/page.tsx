import Link from 'next/link'
import Image from 'next/image'

// Feature icons as simple emoji/text for now
const features = [
  { icon: '⭐', title: 'Easy Recognition', desc: 'Send meaningful appreciation to colleagues with just a few clicks. Personalized messages make recognition authentic.', color: 'green' },
  { icon: '🎁', title: 'Real Rewards', desc: 'Convert recognition into tangible rewards. Digital vouchers, company merchandise, and more.', color: 'blue' },
  { icon: '🌍', title: 'Multi-Region', desc: 'Support for multiple regions with localized catalogs. Vietnam and Czech Republic ready out of the box.', color: 'green' },
  { icon: '🛡️', title: 'Anti-Gaming', desc: 'Built-in safeguards prevent abuse. Weekly limits, same-person cooldowns, and team balance rules.', color: 'blue' },
  { icon: '📊', title: 'Analytics', desc: 'Insights into recognition patterns. Track engagement, identify top performers, measure program success.', color: 'green' },
  { icon: '⚡', title: 'Instant Fulfillment', desc: 'Digital vouchers delivered instantly. Physical items with tracking and expected delivery dates.', color: 'blue' },
]

const benefits = [
  { title: 'Boost Engagement', desc: 'Employees who feel recognized are 2.7x more engaged' },
  { title: 'Strengthen Culture', desc: 'Build a positive workplace through peer appreciation' },
  { title: 'Retain Talent', desc: 'Recognized employees are 56% less likely to leave' },
  { title: 'Align Values', desc: 'Reinforce company values through recognition' },
]

export default function HomePage() {
  return (
    <div className="landing">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="landing-nav-container">
          <div className="nav-brand">
            <Image src="/logo.svg" alt="EmPulse" width={140} height={48} />
          </div>
          <div className="nav-actions">
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How it Works</a>
            <Link href="/login" className="btn-demo">Try Demo</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>New</span> Employee Engagement Platform
          </div>
          <h1 className="hero-title">
            Celebrate Your Team&apos;s<br />
            <span className="brand-color">Success</span>
          </h1>
          <p className="hero-subtitle">
            Empower employees to recognize and reward each other.
            Build a culture of appreciation that drives engagement and retention.
          </p>
          <div className="hero-actions">
            <Link href="/login" className="btn-primary-large">Start Demo</Link>
            <a href="#features" className="btn-secondary-large">View Features</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features light-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title dark-text">Why EmPulse?</h2>
            <p className="section-subtitle dark-text">
              A complete peer-to-peer recognition system designed for modern workplaces
            </p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card light">
                <div className={`feature-icon-wrapper ${f.color}`}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="image-break">
        <div className="image-break-content">
          <h2>&quot;Recognition is not a scarce resource. You can&apos;t use it up or run out of it.&quot;</h2>
          <p>— Susan M. Heathfield</p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="section-container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Three simple steps to build a culture of appreciation</p>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Recognize Your Peers</h3>
              <p>Send a vote to appreciate a colleague&apos;s work. Add a personal message to explain why their contribution mattered.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Earn Points & Badges</h3>
              <p>Recipients earn points for every vote received. Gamify the experience with badges for consistent performance.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Redeem Rewards</h3>
              <p>Exchange accumulated points for real rewards from the catalog. Digital vouchers or company swag delivered to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits light-section">
        <div className="section-container">
          <h2 className="section-title dark-text">Why it matters</h2>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon">✓</div>
                <div>
                  <strong>{b.title}</strong>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-container">
          <h2>Ready to Transform Your Workplace?</h2>
          <p>Join Embedit&apos;s new culture of appreciation today.</p>
          <Link href="/login" className="btn-cta">Try Demo Now</Link>
          <p className="cta-note">Demo accounts available • No signup required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <Image src="/logo.svg" alt="EmPulse" width={120} height={40} />
          </div>
          <div className="footer-links">
            <a href="#">Features</a>
            <a href="#">About Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Embedit. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .landing {
          background: #000;
          color: #fff;
          min-height: 100vh;
        }
        
        /* Navigation */
        .landing-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .landing-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-link {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #00D264;
        }
        .btn-demo {
          background: #00D264;
          color: #000;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-demo:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,210,100,0.4);
        }
        
        /* Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 6rem 2rem 4rem;
          background: linear-gradient(180deg, #000 0%, #0a1628 100%);
        }
        .hero-content {
          max-width: 800px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0,210,100,0.1);
          border: 1px solid rgba(0,210,100,0.3);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          margin-bottom: 2rem;
        }
        .hero-badge span {
          background: #00D264;
          color: #000;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-weight: 600;
        }
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }
        .brand-color {
          color: #00D264;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-primary-large {
          background: #00D264;
          color: #000;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.125rem;
          text-decoration: none;
          transition: all 0.2s;
        }
        .btn-primary-large:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,210,100,0.4);
        }
        .btn-secondary-large {
          background: transparent;
          color: #fff;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.125rem;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.2s;
        }
        .btn-secondary-large:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.5);
        }
        
        /* Sections */
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .section-subtitle {
          font-size: 1.125rem;
          color: rgba(255,255,255,0.7);
        }
        .dark-text { color: #000; }
        .dark-text .section-subtitle, .light-section .section-subtitle { color: #666; }
        
        /* Light Section */
        .light-section {
          background: #fff;
          color: #000;
        }
        
        /* Features */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          background: #f8f9fa;
          border-radius: 16px;
          padding: 2rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
        }
        .feature-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .feature-icon-wrapper.green { background: rgba(0,210,100,0.15); }
        .feature-icon-wrapper.blue { background: rgba(0,110,210,0.15); }
        .feature-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #000;
        }
        .feature-card p {
          color: #666;
          line-height: 1.6;
        }
        
        /* Quote */
        .image-break {
          background: linear-gradient(135deg, #006ED2 0%, #004a94 100%);
          padding: 5rem 2rem;
          text-align: center;
        }
        .image-break-content h2 {
          font-size: 2rem;
          font-weight: 600;
          font-style: italic;
          max-width: 800px;
          margin: 0 auto 1rem;
          line-height: 1.4;
        }
        .image-break-content p {
          color: rgba(255,255,255,0.8);
        }
        
        /* How It Works */
        .how-it-works {
          background: #000;
        }
        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .step-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
        }
        .step-number {
          width: 48px;
          height: 48px;
          background: #00D264;
          color: #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
          margin: 0 auto 1.5rem;
        }
        .step-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }
        .step-card p {
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
        }
        
        /* Benefits */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .benefit-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 12px;
        }
        .benefit-icon {
          width: 32px;
          height: 32px;
          background: #00D264;
          color: #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }
        .benefit-card strong {
          display: block;
          color: #000;
          margin-bottom: 0.25rem;
        }
        .benefit-card p {
          color: #666;
          font-size: 0.875rem;
          margin: 0;
        }
        
        /* CTA */
        .cta-section {
          background: linear-gradient(135deg, #00D264 0%, #00a050 100%);
          text-align: center;
          padding: 5rem 2rem;
        }
        .cta-section h2 {
          font-size: 2.5rem;
          color: #000;
          margin-bottom: 1rem;
        }
        .cta-section > div > p {
          color: rgba(0,0,0,0.7);
          font-size: 1.125rem;
          margin-bottom: 2rem;
        }
        .btn-cta {
          display: inline-block;
          background: #000;
          color: #fff;
          padding: 1rem 3rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.125rem;
          text-decoration: none;
          transition: all 0.2s;
        }
        .btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }
        .cta-note {
          margin-top: 1.5rem;
          color: rgba(0,0,0,0.6);
          font-size: 0.875rem;
        }
        
        /* Footer */
        .landing-footer {
          background: #000;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 3rem 2rem 2rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .footer-links {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .footer-links a {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: #00D264;
        }
        .footer-bottom {
          max-width: 1200px;
          margin: 2rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          text-align: center;
          color: rgba(255,255,255,0.5);
        }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .section-title { font-size: 2rem; }
          .landing-nav-container { padding: 0.75rem 1rem; }
          .nav-link { display: none; }
        }
      `}</style>
    </div>
  )
}
