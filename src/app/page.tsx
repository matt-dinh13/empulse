'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
  { text: "EmPulse transformed our team culture. Everyone is more proactive in recognizing each other.", author: "Nguyen Minh Tuan", role: "Engineering Manager, VN" },
  { text: "The cross-border feature is amazing. Our Czech and Vietnamese teams finally feel connected.", author: "Petra Nováková", role: "HR Director, CZ" },
  { text: "ROI was clear within 3 months. Employee satisfaction up 32%.", author: "Tran Van Minh", role: "CEO, Embedit" },
  { text: "Finally a tool that employees actually WANT to use!", author: "Le Thi Huong", role: "HR Manager, VN" },
]

// --- Components ---

const EmojiParticle = ({ emoji, style }: { emoji: string, style: React.CSSProperties }) => (
  <div className="emoji-particle" style={style}>{emoji}</div>
)

const MobileMockup = () => {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setActiveTab(prev => (prev + 1) % 3), 4000)
    return () => clearInterval(interval)
  }, [])

  const screens = [
    // Screen 1: Recognize
    <div key="0" className="mockup-screen">
      <div className="mockup-header">Send Appreciation</div>
      <div className="mockup-body">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-line w-3_4"></div>
        <div className="skeleton-line w-1_2"></div>
        <div className="mockup-input">Great job on the release! 🚀</div>
        <div className="mockup-btn">Send Vote</div>
      </div>
    </div>,
    // Screen 2: Earn
    <div key="1" className="mockup-screen">
      <div className="mockup-header">You Earned a Badge!</div>
      <div className="mockup-body center">
        <div className="mockup-badge-large">🏆</div>
        <div className="mockup-text-lg">Super Star</div>
        <div className="mockup-points">+50 Points</div>
      </div>
    </div>,
    // Screen 3: Redeem
    <div key="2" className="mockup-screen">
      <div className="mockup-header">Rewards Catalog</div>
      <div className="mockup-body grid-2">
        <div className="mockup-card">☕ Voucher</div>
        <div className="mockup-card">👕 T-Shirt</div>
        <div className="mockup-card">🎟️ Cinema</div>
        <div className="mockup-card">🎧 Headset</div>
      </div>
    </div>
  ]

  return (
    <div className="mockup-container">
      <div className="phone-frame">
        <div className="notch"></div>
        <div className="screen-content">
          {screens[activeTab]}
        </div>
      </div>
      <div className="mockup-dots">
        {[0, 1, 2].map(i => (
          <div key={i} className={`dot ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)} />
        ))}
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  // Floating Emojis logic
  const [emojis, setEmojis] = useState<{ id: number, char: string, style: React.CSSProperties }[]>([])

  useEffect(() => {
    // Generate random floating emojis
    const emojiList = ['⭐', '🎁', '🏆', '💎', '🔥', '🚀', '💖']
    const newEmojis = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      char: emojiList[Math.floor(Math.random() * emojiList.length)],
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${10 + Math.random() * 20}s`,
        fontSize: `${1 + Math.random() * 2}rem`
      }
    }))
    setEmojis(newEmojis)

    // Scroll listener
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="landing-page">
      {/* --- Navigation --- */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">
            <span className="logo-text">EmPulse</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it Works</a>
            <Link href="/login" className="btn-nav">Try Demo</Link>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="hero">
        <div className="hero-bg">
          {emojis.map(e => <EmojiParticle key={e.id} emoji={e.char} style={e.style} />)}
        </div>
        <div className="container hero-content">
          <div className="hero-text-col">
            <div className="badge-wrapper">
              <span className="badge-new">New</span>
              <span className="badge-text">Employee Recognition Platform</span>
            </div>
            <h1 className="hero-title">
              Turn Appreciation<br />into <span className="highlight">Action</span>
            </h1>
            <p className="hero-subtitle">
              Empower your team to recognize each other&apos;s wins, earn points, and redeem real rewards. Cross-border ready.
            </p>
            <div className="hero-actions">
              <Link href="/login" className="btn-primary">View Demo</Link>
              <a href="#contact" className="btn-secondary">Contact Sales</a>
            </div>
          </div>
          <div className="hero-visual-col">
            <MobileMockup />
          </div>
        </div>
      </section>

      {/* --- Features Section (3D Tilt) --- */}
      <section id="features" className="section features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why EmPulse?</h2>
            <p>Everything you need to build a culture of appreciation.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- How It Works --- */}
      <section id="how-it-works" className="section steps-section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Three simple steps to happiness.</p>
          </div>
          <div className="steps-wrapper">
            <div className="steps-line"></div>
            {steps.map((s, i) => (
              <div key={i} className="step-item">
                <div className="step-circle">{s.num}</div>
                <div className="step-content">
                  <div className="step-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials (Marquee) --- */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="text-center mb-xl">Trusted by Teams</h2>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="testimonial-card">
                <p>"{t.text}"</p>
                <div className="author">
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Cross Border Highlight --- */}
      <section className="section cross-border-section">
        <div className="container">
          <div className="cb-grid">
            <div className="cb-visual">
              <div className="flag vn">🇻🇳</div>
              <div className="connection-line"></div>
              <div className="flag cz">🇨🇿</div>
            </div>
            <div className="cb-text">
              <h2>One Platform.<br />Two Countries.<br />Infinite Recognition.</h2>
              <p>Connect your distributed teams seamlessly. Whether in Vietnam or Czech Republic, recognition feels local and instant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="section cta-section">
        <div className="cta-bg-particles"></div>
        <div className="container text-center">
          <h2 className="cta-title">Ready to Transform Your Workplace?</h2>
          <p className="cta-subtitle">Start recognizing your team today. No commitment.</p>
          <Link href="/login" className="btn-cta-large">Try EmPulse Demo</Link>
          <p className="cta-note">Demo accounts available • No signup required</p>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <h3>EmPulse</h3>
            <p>© 2026 Embedit.</p>
          </div>
          <div className="footer-links">
            <a href="#">Features</a>
            <a href="#">How it Works</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          Made with 💚 in Vietnam & Czech Republic
        </div>
      </footer>

      {/* --- Styles --- */}
      <style jsx global>{`
        :root {
          --primary-blue: #006ED2;
          --main-green: #00D264;
          --bg-dark: #050505;
          --card-bg: rgba(255, 255, 255, 0.05);
          --text-muted: rgba(255, 255, 255, 0.7);
        }
        body {
          background: var(--bg-dark);
          color: white;
          overflow-x: hidden;
        }
      `}</style>

      <style jsx>{`
        /* --- General Defaults --- */
        .landing-page { font-family: 'Inter', sans-serif; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .section { padding: 6rem 0; position: relative; }
        .text-center { text-align: center; }
        .mb-xl { margin-bottom: 3rem; }
        
        /* --- Navbar --- */
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 1.5rem 0; transition: all 0.3s;
        }
        .navbar.scrolled {
          background: rgba(5,5,5,0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .nav-container { display: flex; justify-content: space-between; align-items: center; }
        .logo-text { font-size: 1.5rem; font-weight: 800; letter-spacing: -0.05em; }
        .nav-links { display: flex; gap: 2rem; align-items: center; }
        .nav-links a { color: var(--text-muted); text-decoration: none; font-weight: 500; transition: color 0.2s; }
        .nav-links a:hover { color: var(--main-green); }
        .btn-nav {
          background: white; color: black; padding: 0.5rem 1.25rem; border-radius: 50px;
          font-weight: 600; text-decoration: none; transition: transform 0.2s;
        }
        .btn-nav:hover { transform: scale(1.05); }

        /* --- Hero --- */
        .hero {
          min-height: 100vh; display: flex; align-items: center; position: relative; overflow: hidden;
          padding-top: 4rem;
        }
        .hero-bg {
          position: absolute; inset: 0; z-index: 0;
          background: linear-gradient(135deg, #000 0%, #0a1628 100%);
        }
        .emoji-particle {
          position: absolute; opacity: 0.3; animation: float 10s infinite ease-in-out;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .hero-content {
          position: relative; z-index: 1; width: 100%;
          display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;
        }
        .hero-text-col { text-align: left; }
        .hero-title {
          font-size: 4rem; font-weight: 800; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.03em;
        }
        .highlight { color: var(--main-green); }
        .hero-subtitle { font-size: 1.25rem; color: var(--text-muted); margin-bottom: 2.5rem; line-height: 1.6; max-width: 500px; }
        .badge-wrapper {
          display: inline-flex; align-items: center; gap: 0.75rem;
          background: rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 50px;
          margin-bottom: 2rem; backdrop-filter: blur(5px);
        }
        .badge-new { background: var(--main-green); color: black; padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; }
        .badge-text { font-size: 0.875rem; font-weight: 500; }
        
        .hero-actions { display: flex; gap: 1rem; }
        .btn-primary {
          background: var(--main-green); color: black; padding: 1rem 2rem; border-radius: 12px;
          font-weight: 700; text-decoration: none; transition: all 0.2s;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0, 210, 100, 0.3); }
        .btn-secondary {
          background: transparent; color: white; padding: 1rem 2rem; border-radius: 12px;
          font-weight: 600; text-decoration: none; border: 1px solid rgba(255,255,255,0.2); transition: all 0.2s;
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.1); border-color: white; }

        /* --- Mobile Mockup --- */
        .phone-frame {
          width: 300px; height: 600px; background: black; border: 12px solid #222; border-radius: 40px;
          margin: 0 auto; position: relative; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
        }
        .notch {
          width: 120px; height: 25px; background: #222; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; z-index: 10;
        }
        .screen-content { height: 100%; background: #111; color: white; padding: 3rem 1.5rem; }
        .mockup-screen { animation: fadeIn 0.5s ease; height: 100%; display: flex; flex-direction: column; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .mockup-header { font-size: 1.25rem; font-weight: 700; margin-bottom: 2rem; text-align: center; }
        .skeleton-avatar { width: 60px; height: 60px; background: #333; border-radius: 50%; margin-bottom: 1rem; }
        .skeleton-line { height: 12px; background: #333; border-radius: 6px; margin-bottom: 0.75rem; }
        .w-3_4 { width: 75%; } .w-1_2 { width: 50%; }
        .mockup-input { background: #222; padding: 1rem; border-radius: 12px; margin-top: auto; margin-bottom: 1rem; color: #aaa; font-size: 0.9rem; border: 1px solid #333; }
        .mockup-btn { background: var(--main-green); color: black; padding: 0.75rem; text-align: center; border-radius: 12px; font-weight: 700; }
        .mockup-dots { display: flex; justify-content: center; gap: 0.5rem; margin-top: 2rem; }
        .dot { width: 8px; height: 8px; background: #333; border-radius: 50%; cursor: pointer; transition: all 0.3s; }
        .dot.active { background: var(--main-green); width: 24px; border-radius: 10px; }
        .center { display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; }
        .mockup-badge-large { font-size: 5rem; margin-bottom: 1rem; animation: bounce 2s infinite; }
        .mockup-text-lg { font-size: 1.5rem; font-weight: 700; color: white; margin-bottom: 0.5rem; }
        .mockup-points { color: var(--main-green); font-weight: 700; font-size: 1.25rem; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .mockup-card { background: #222; padding: 1.5rem 0.5rem; text-align: center; border-radius: 12px; border: 1px solid #333; font-size: 0.9rem; }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

        /* --- Features --- */
        .section-header { text-align: center; margin-bottom: 4rem; }
        .section-header h2 { font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem; }
        .section-header p { color: var(--text-muted); font-size: 1.125rem; }
        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .feature-card {
          background: var(--card-bg); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 2rem;
          transition: all 0.3s;
        }
        .feature-card:hover { 
          transform: translateY(-10px); 
          box-shadow: 0 20px 40px rgba(0,0,0,0.4); 
          border-color: rgba(255,255,255,0.2);
        }
        .feature-icon { font-size: 2.5rem; margin-bottom: 1.5rem; }
        .feature-card h3 { font-size: 1.25rem; margin-bottom: 0.75rem; font-weight: 700; }
        .feature-card p { color: var(--text-muted); line-height: 1.6; font-size: 0.95rem; }

        /* --- Steps --- */
        .steps-wrapper { display: flex; justify-content: space-between; position: relative; margin-top: 3rem; }
        .steps-line {
          position: absolute; top: 24px; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #333 0%, var(--main-green) 50%, #333 100%);
          z-index: 0;
        }
        .step-item { flex: 1; text-align: center; position: relative; z-index: 1; padding: 0 1rem; }
        .step-circle {
          width: 50px; height: 50px; background: #111; border: 2px solid var(--main-green);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          margin: 0 auto 2rem; font-weight: 700; font-size: 1.25rem; color: var(--main-green);
          box-shadow: 0 0 20px rgba(0,210,100,0.2);
        }
        .step-content { background: var(--card-bg); padding: 2rem; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); }
        .step-icon { font-size: 2rem; margin-bottom: 1rem; }
        .step-content h3 { font-size: 1.25rem; margin-bottom: 0.5rem; font-weight: 600; }
        .step-content p { color: var(--text-muted); font-size: 0.9rem; }

        /* --- Testimonials --- */
        .marquee-wrapper { width: 100%; overflow: hidden; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
        .marquee-content { display: flex; gap: 2rem; width: max-content; animation: scroll 40s linear infinite; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .testimonial-card {
          width: 350px; background: #111; padding: 2rem; border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.1); flex-shrink: 0;
        }
        .testimonial-card p { font-style: italic; color: #ddd; margin-bottom: 1.5rem; line-height: 1.6; }
        .author strong { display: block; color: white; }
        .author span { font-size: 0.85rem; color: var(--main-green); }

        /* --- Cross Border --- */
        .cb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .cb-visual { display: flex; justify-content: center; align-items: center; gap: 2rem; font-size: 5rem; }
        .flag { animation: wave 3s infinite ease-in-out; }
        @keyframes wave { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }
        .connection-line {
          height: 4px; flex: 1; background: linear-gradient(90deg, transparent, var(--main-green), transparent);
          border-radius: 2px;
        }
        .cb-text h2 { font-size: 3rem; font-weight: 800; line-height: 1.1; margin-bottom: 1.5rem; }
        .cb-text p { font-size: 1.25rem; color: var(--text-muted); }

        /* --- CTA --- */
        .cta-section { background: linear-gradient(180deg, #050505 0%, #001a0d 100%); }
        .cta-title { font-size: 3rem; margin-bottom: 1rem; font-weight: 800; }
        .cta-subtitle { font-size: 1.5rem; color: var(--text-muted); margin-bottom: 3rem; }
        .btn-cta-large {
          background: var(--main-green); color: black; font-size: 1.25rem; padding: 1.25rem 3.5rem;
          border-radius: 50px; font-weight: 800; text-decoration: none; display: inline-block;
          transition: all 0.2s; box-shadow: 0 10px 40px rgba(0,210,100,0.4);
        }
        .btn-cta-large:hover { transform: scale(1.05); box-shadow: 0 15px 50px rgba(0,210,100,0.6); }
        .cta-note { margin-top: 1.5rem; color: rgba(255,255,255,0.4); font-size: 0.9rem; }

        /* --- Footer --- */
        .footer { padding: 4rem 0 2rem; border-top: 1px solid rgba(255,255,255,0.1); background: #000; }
        .footer-content { display: flex; justify-content: space-between; margin-bottom: 4rem; }
        .footer-brand h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .footer-brand p { color: var(--text-muted); }
        .footer-links { display: flex; gap: 2rem; }
        .footer-links a { color: var(--text-muted); text-decoration: none; transition: color 0.2s; }
        .footer-links a:hover { color: white; }
        .footer-bottom { text-align: center; color: rgba(255,255,255,0.3); font-size: 0.9rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 2rem; margin-top: 2rem; }

        /* --- Mobile Responsive --- */
        @media (max-width: 900px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-text-col { text-align: center; display: flex; flex-direction: column; align-items: center; }
          .hero-title { font-size: 3rem; }
          .features-grid { grid-template-columns: 1fr; }
          .steps-wrapper { flex-direction: column; gap: 2rem; }
          .steps-line { display: none; }
          .cb-grid { grid-template-columns: 1fr; text-align: center; }
          .phone-frame { width: 90%; height: 550px; }
          .nav-links { display: none; } /* Simplified mobile nav */
        }
      `}</style>
    </div>
  )
}
