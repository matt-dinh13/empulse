'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// --- Data ---
const features = [
  { icon: '🎯', title: 'Meaningful Recognition', desc: 'Give props that actually matter. Personal messages make colleagues feel valued.' },
  { icon: '🌍', title: 'Cross-Border Teams', desc: 'Vietnam 🇻🇳 and Czech Republic 🇨🇿 working together? We handle the distance.' },
  { icon: '🎁', title: 'Real Rewards', desc: 'Not just virtual badges. Digital vouchers, company merch, and experiences.' },
  { icon: '🛡️', title: 'No Gaming', desc: 'Smart limits prevent abuse. Weekly quotas enable fair recognition for everyone.' },
  { icon: '📊', title: 'See the Impact', desc: 'Analytics show who is making waves. Celebrate your top cultural contributors.' },
  { icon: '⚡', title: 'Instant Delivery', desc: 'Digital rewards delivered immediately to email. No waiting around.' },
]

const steps = [
  { num: '1', title: 'Recognize Peers', desc: 'Select a colleague, write a heartfelt message, and hit send.', icon: '💬' },
  { num: '2', title: 'Earn Points', desc: 'Every vote received = +1 point. Reach milestones to unlock badges!', icon: '🏆' },
  { num: '3', title: 'Redeem Rewards', desc: 'Exchange points for digital vouchers, merchandise, or experiences.', icon: '🎁' },
]

const testimonials = [
  { text: "EmPulse transformed our team culture. Everyone is more proactive in recognizing each other.", author: "Nguyen Minh Tuan", role: "Engineering Manager" },
  { text: "The cross-border feature is amazing. Our Czech and Vietnamese teams finally feel connected.", author: "Petra Nováková", role: "HR Director" },
  { text: "ROI was clear within 3 months. Employee satisfaction up 32%.", author: "Tran Van Minh", role: "CEO, Embedit" },
  { text: "Finally a tool that employees actually WANT to use!", author: "Le Thi Huong", role: "HR Manager" },
]

// --- Components ---

const EmojiParticle = ({ emoji, style }: { emoji: string, style: React.CSSProperties }) => (
  <div className="emoji-particle" style={style}>{emoji}</div>
)

const MobileMockup = () => {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    // Auto-rotate tabs
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mockup-container">
      <div className="phone-frame">
        <div className="notch"></div>
        <div className="screen-content">
          {activeTab === 0 && (
            <div className="screen-slide fade-in">
              <div className="mockup-header">Send Appreciation</div>
              <div className="skeleton-avatar"></div>
              <div className="skeleton-line w-75"></div>
              <div className="skeleton-line w-50"></div>
              <div className="mockup-input">Great job on the release! 🚀</div>
              <div className="mockup-btn">Send Vote</div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="screen-slide fade-in center-content">
              <div className="mockup-header">You Earned a Badge!</div>
              <div className="mockup-badge-large">🏆</div>
              <div className="mockup-text-lg">Super Star</div>
              <div className="mockup-points">+50 Points</div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="screen-slide fade-in">
              <div className="mockup-header">Rewards Catalog</div>
              <div className="catalog-grid">
                <div className="cat-item">☕</div>
                <div className="cat-item">👕</div>
                <div className="cat-item">🎟️</div>
                <div className="cat-item">🎧</div>
              </div>
            </div>
          )}
        </div>
        {/* Navigation Dots */}
        <div className="mockup-nav">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className={`nav-dot ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [emojis, setEmojis] = useState<{ id: number, char: string, style: React.CSSProperties }[]>([])

  useEffect(() => {
    // Generate background emojis client-side
    const emojiList = ['⭐', '🎁', '🏆', '💎', '🔥', '🚀', '💖']
    const items = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      char: emojiList[i % emojiList.length],
      style: {
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 90}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${15 + Math.random() * 10}s`,
        fontSize: `${1.5 + Math.random() * 1.5}rem`,
      }
    }))
    setEmojis(items)

    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="landing-root">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <div className="brand">EmPulse</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how">How it Works</a>
            <Link href="/login" className="btn-nav">Try Demo</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        {/* Background Particles */}
        <div className="hero-bg-layer">
          {emojis.map(e => <EmojiParticle key={e.id} emoji={e.char} style={e.style} />)}
        </div>

        <div className="container hero-container">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-bg">NEW</span>
              <span>Employee Recognition Platform</span>
            </div>
            <h1 className="hero-title">
              Turn Appreciation<br />
              into <span className="text-highlight">Action</span>
            </h1>
            <p className="hero-desc">
              Empower your team to recognize each other&apos;s wins, earn points, and redeem real rewards.
              Ready for Vietnam & Czech Republic teams.
            </p>
            <div className="hero-btns">
              <Link href="/login" className="btn-primary">View Demo</Link>
              <a href="#features" className="btn-outline">Learn More</a>
            </div>
          </div>

          <div className="hero-visual">
            <MobileMockup />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section bg-dark">
        <div className="container">
          <div className="section-head">
            <h2>Why EmPulse?</h2>
            <p>Everything you need to build a culture of appreciation.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="icon-box">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="how" className="section bg-darker">
        <div className="container">
          <div className="section-head">
            <h2>How It Works</h2>
            <p>Three simple steps to happiness.</p>
          </div>
          <div className="steps-container">
            {steps.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-num">{s.num}</div>
                <div className="step-icon large">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-dark">
        <div className="container">
          <h2 className="text-center mb-large">Trusted by Teams</h2>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((t, x) => (
              <div key={x} className="review-card">
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="review-author">
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross Border */}
      <section className="section bg-gradient">
        <div className="container cb-container">
          <div className="cb-visual">
            <span className="flag">🇻🇳</span>
            <span className="cb-line"></span>
            <span className="flag">🇨🇿</span>
          </div>
          <div className="cb-text">
            <h2>One Platform. Two Countries.</h2>
            <p>Seamlessly connect your distributed teams in Vietnam and Czech Republic.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta-container">
          <h2>Ready to transform your workplace?</h2>
          <Link href="/login" className="btn-cta">Start Free Demo</Link>
          <p className="cta-small">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand-muted">EmPulse</div>
          <div className="footer-nav">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-copy">© 2026 Embedit</div>
      </footer>

      {/* --- STYLES --- */}
      <style jsx global>{`
        :root {
          --c-primary: #00D264;
          --c-accent: #006ED2;
          --c-bg: #050505;
          --c-card: rgba(255, 255, 255, 0.05);
          --c-text: #fff;
          --c-muted: rgba(255, 255, 255, 0.6);
          --font-main: 'Inter', sans-serif;
        }
        body { margin: 0; padding: 0; background: var(--c-bg); color: var(--c-text); font-family: var(--font-main); overflow-x: hidden; }
        * { box-sizing: border-box; }
      `}</style>

      <style jsx>{`
        /* Utils */
        .landing-root { width: 100%; overflow: hidden; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; width: 100%; position: relative; z-index: 2; }
        .section { padding: 5rem 0; }
        .section-head { text-align: center; margin-bottom: 3rem; }
        .section-head h2 { font-size: 2.5rem; margin-bottom: 0.5rem; font-weight: 800; }
        .section-head p { color: var(--c-muted); font-size: 1.1rem; }
        .bg-dark { background: #050505; }
        .bg-darker { background: #000; }
        .bg-gradient { background: linear-gradient(45deg, #001a3d, #000); }
        .text-center { text-align: center; }
        .mb-large { margin-bottom: 3rem; }

        /* Navbar */
        .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 1.5rem 0; transition: all 0.3s; }
        .navbar.scrolled { padding: 1rem 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.1); }
        .nav-inner { display: flex; justify-content: space-between; align-items: center; }
        .brand { font-size: 1.5rem; font-weight: 800; color: white; }
        .nav-links { display: flex; gap: 1.5rem; align-items: center; }
        .nav-links a { text-decoration: none; color: var(--c-muted); transition: color 0.2s; font-weight: 500; }
        .nav-links a:hover { color: var(--c-primary); }
        .btn-nav { background: white; color: black; padding: 0.5rem 1.25rem; border-radius: 50px; font-weight: 600; text-decoration: none; }
        .btn-nav:hover { transform: scale(1.05); }

        /* Hero */
        .hero-section { min-height: 100vh; display: flex; align-items: center; position: relative; padding-top: 4rem; overflow: hidden; }
        .hero-bg-layer { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .emoji-particle { position: absolute; font-size: 2rem; opacity: 0.3; animation: flow 20s infinite linear; }
        @keyframes flow { from { transform: translateY(0) rotate(0deg); } to { transform: translateY(-100px) rotate(20deg); } }
        
        .hero-container { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 4rem; }
        .hero-text { flex: 1; min-width: 300px; max-width: 600px; z-index: 10; }
        .hero-visual { flex: 1; min-width: 300px; display: flex; justify-content: center; z-index: 10; }
        
        .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); padding: 0.4rem 0.8rem; border-radius: 50px; margin-bottom: 2rem; }
        .badge-bg { background: var(--c-primary); color: black; font-weight: 800; font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px; }
        
        .hero-title { font-size: 3.5rem; font-weight: 800; line-height: 1.1; margin-bottom: 1.5rem; }
        .text-highlight { color: var(--c-primary); }
        .hero-desc { font-size: 1.25rem; color: var(--c-muted); line-height: 1.6; margin-bottom: 2.5rem; }
        
        .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary { background: var(--c-primary); color: black; padding: 1rem 2rem; border-radius: 12px; font-weight: 700; text-decoration: none; display: inline-block; transition: all 0.2s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0, 210, 100, 0.3); }
        .btn-outline { border: 1px solid rgba(255,255,255,0.3); color: white; padding: 1rem 2rem; border-radius: 12px; font-weight: 600; text-decoration: none; transition: all 0.2s; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); border-color: white; }

        /* Mockup */
        .mockup-container { width: 300px; position: relative; }
        .phone-frame { width: 100%; height: 600px; border: 12px solid #222; border-radius: 40px; background: #000; position: relative; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.5); }
        .notch { width: 50%; height: 30px; background: #222; position: absolute; top: 0; left: 25%; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; z-index: 20; }
        .screen-content { height: 100%; padding: 3rem 1.5rem; position: relative; }
        .screen-slide { height: 100%; display: flex; flex-direction: column; animation: fadeIn 0.5s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .mockup-header { text-align: center; font-size: 1.2rem; font-weight: 700; margin-bottom: 2rem; }
        .mockup-input { background: #222; padding: 1rem; border-radius: 12px; border: 1px solid #333; margin-top: auto; margin-bottom: 1rem; font-size: 0.9rem; color: #ccc; }
        .mockup-btn { background: var(--c-primary); color: black; padding: 0.8rem; text-align: center; border-radius: 12px; font-weight: 700; }
        .skeleton-avatar { width: 60px; height: 60px; background: #333; border-radius: 50%; margin-bottom: 1rem; }
        .skeleton-line { height: 12px; background: #333; border-radius: 6px; margin-bottom: 0.8rem; }
        .w-75 { width: 75%; } .w-50 { width: 50%; }
        .mockup-badge-large { font-size: 5rem; text-align: center; margin: 2rem 0; animation: bounce 2s infinite; }
        .mockup-text-lg { font-size: 1.5rem; text-align: center; font-weight: 700; }
        .mockup-points { color: var(--c-primary); text-align: center; font-size: 1.2rem; margin-top: 0.5rem; }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .catalog-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .cat-item { background: #222; padding: 1.5rem; text-align: center; font-size: 2rem; border-radius: 12px; }
        .mockup-nav { display: flex; justify-content: center; gap: 6px; padding: 1rem 0; position: absolute; bottom: 10px; left: 0; right: 0; }
        .nav-dot { width: 8px; height: 8px; background: #444; border-radius: 50%; cursor: pointer; transition: 0.3s; }
        .nav-dot.active { background: var(--c-primary); transform: scale(1.2); }

        /* Features */
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .feature-card { background: var(--c-card); padding: 2rem; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05); transition: 0.3s; }
        .feature-card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.2); }
        .icon-box { font-size: 2.5rem; margin-bottom: 1rem; }
        .feature-card h3 { font-size: 1.25rem; margin-bottom: 0.5rem; font-weight: 700; }
        .feature-card p { color: var(--c-muted); line-height: 1.6; }

        /* Steps */
        .steps-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; }
        .step-card { flex: 1; min-width: 250px; background: #111; padding: 2rem; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); position: relative; }
        .step-num { position: absolute; top: -20px; left: 20px; width: 40px; height: 40px; background: var(--c-primary); color: black; border-radius: 50%; font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
        .step-icon.large { font-size: 3rem; margin: 1rem 0; text-align: center; }
        .step-card h3 { text-align: center; margin-bottom: 0.5rem; font-size: 1.25rem; }
        .step-card p { text-align: center; color: var(--c-muted); font-size: 0.95rem; }

        /* Testimonials */
        .marquee-container { width: 100%; overflow: hidden; white-space: nowrap; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
        .marquee-track { display: inline-flex; gap: 2rem; animation: scroll 30s linear infinite; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .review-card { width: 350px; background: #111; border: 1px solid rgba(255,255,255,0.1); padding: 2rem; border-radius: 16px; white-space: normal; }
        .review-card p { font-style: italic; color: #ccc; margin-bottom: 1.5rem; }
        .review-author strong { display: block; color: white; }
        .review-author span { color: var(--c-primary); font-size: 0.85rem; }

        /* Cross Border */
        .cb-container { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 4rem; text-align: center; }
        .cb-visual { display: flex; align-items: center; gap: 1rem; font-size: 4rem; }
        .cb-line { height: 2px; width: 100px; background: var(--c-primary); }
        .cb-text h2 { font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem; }
        .cb-text p { font-size: 1.2rem; color: var(--c-muted); max-width: 500px; margin: 0 auto; }

        /* CTA */
        .cta-section { background: var(--c-primary); color: black; padding: 6rem 0; text-align: center; }
        .cta-container h2 { font-size: 3rem; font-weight: 900; margin-bottom: 2rem; color: black; }
        .btn-cta { background: black; color: white; padding: 1.2rem 3rem; font-size: 1.2rem; font-weight: 700; border-radius: 50px; text-decoration: none; transition: transform 0.2s; display: inline-block; }
        .btn-cta:hover { transform: scale(1.05); }
        .cta-small { margin-top: 1rem; font-weight: 600; opacity: 0.7; }

        /* Footer */
        .footer { padding: 4rem 0 2rem; background: #000; border-top: 1px solid rgba(255,255,255,0.1); }
        .footer-inner { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 2rem; align-items: center; margin-bottom: 2rem; }
        .brand-muted { font-size: 1.5rem; font-weight: 800; color: #555; }
        .footer-nav { display: flex; gap: 2rem; }
        .footer-nav a { color: #555; text-decoration: none; transition: 0.2s; }
        .footer-nav a:hover { color: white; }
        .footer-copy { text-align: center; color: #333; font-size: 0.9rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 2rem; }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .hero-container { flex-direction: column; text-align: center; gap: 3rem; }
          .hero-text { align-items: center; } 
          .hero-btns { justify-content: center; }
          .nav-links { display: none; }
          .cb-container { flex-direction: column; gap: 2rem; }
          .cta-container h2 { font-size: 2rem; }
        }
      `}</style>
    </div>
  )
}
