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

const MobileMockup = () => {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
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
              <div className="mockup-header text-dark">Send Appreciation</div>
              <div className="skeleton-avatar"></div>
              <div className="skeleton-line w-75"></div>
              <div className="skeleton-line w-50"></div>
              <div className="mockup-input">Great job on the release! 🚀</div>
              <div className="mockup-btn">Send Vote</div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="screen-slide fade-in center-content">
              <div className="mockup-header text-white">You Earned a Badge!</div>
              <div className="mockup-badge-large">🏆</div>
              <div className="mockup-text-lg">Super Star</div>
              <div className="mockup-points">+50 Points</div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="screen-slide fade-in">
              <div className="mockup-header text-white">Rewards Catalog</div>
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="landing-wrapper">
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
        <div className="container hero-container">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-bg">NEW</span>
              <span>Employee Recognition Platform</span>
            </div>
            <h1 className="hero-title text-white">
              Turn Appreciation<br />
              into <span className="text-highlight">Action</span>
            </h1>
            <p className="hero-desc text-gray">
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
            <h2 className="text-white">Why EmPulse?</h2>
            <p className="text-gray">Everything you need to build a culture of appreciation.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="icon-box">{f.icon}</div>
                <h3 className="text-white">{f.title}</h3>
                <p className="text-gray">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="how" className="section bg-darker">
        <div className="container">
          <div className="section-head">
            <h2 className="text-white">How It Works</h2>
            <p className="text-gray">Three simple steps to happiness.</p>
          </div>
          <div className="steps-container">
            {steps.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-num">{s.num}</div>
                <div className="step-icon large">{s.icon}</div>
                <h3 className="text-white">{s.title}</h3>
                <p className="text-gray">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-dark">
        <div className="container">
          <h2 className="text-center mb-large text-white">Trusted by Teams</h2>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((t, x) => (
              <div key={x} className="review-card">
                <p className="text-italic text-gray">&ldquo;{t.text}&rdquo;</p>
                <div className="review-author">
                  <strong className="text-white">{t.author}</strong>
                  <span className="text-highlight">{t.role}</span>
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
            <h2 className="text-white">One Platform. Two Countries.</h2>
            <p className="text-gray-light">Seamlessly connect your distributed teams in Vietnam and Czech Republic.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta-container">
          <h2 className="text-dark">Ready to transform your workplace?</h2>
          <Link href="/login" className="btn-cta">Start Free Demo</Link>
          <p className="cta-small text-dark-muted">No credit card required</p>
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
        /* Reset and Base Styles */
        body, html { 
          margin: 0; 
          padding: 0; 
          background: #000 !important; 
          color: white !important;
          font-family: 'Inter', sans-serif; 
          overflow-x: hidden;
        }
      `}</style>

      <style jsx>{`
        /* Scoped Styles for Landing Page */
        .landing-wrapper {
          width: 100%;
          min-height: 100vh;
          background: #000;
          color: white;
        }

        /* Typography Utilities */
        .text-white { color: #fff !important; }
        .text-gray { color: rgba(255,255,255,0.7) !important; }
        .text-gray-light { color: rgba(255,255,255,0.85) !important; }
        .text-dark { color: #000 !important; }
        .text-dark-muted { color: rgba(0,0,0,0.6) !important; }
        .text-highlight { color: #00D264 !important; }
        .text-italic { font-style: italic; }
        .text-center { text-align: center; }

        /* Container & Layout */
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; position: relative; z-index: 2; }
        .section { padding: 5rem 0; }
        .bg-dark { background: #050505; }
        .bg-darker { background: #000; }
        .bg-gradient { background: linear-gradient(135deg, #001a3d, #000); }
        .mb-large { margin-bottom: 3rem; }

        /* Navbar */
        .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 1.5rem 0; transition: 0.3s; }
        .navbar.scrolled { padding: 1rem 0; background: rgba(0,0,0,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,0.1); }
        .nav-inner { display: flex; justify-content: space-between; align-items: center; }
        .brand { font-size: 1.5rem; font-weight: 800; color: white; }
        .nav-links { display: flex; gap: 1.5rem; }
        .nav-links a { color: rgba(255,255,255,0.7); text-decoration: none; font-weight: 500; transition: color 0.2s; }
        .nav-links a:hover { color: #00D264; }
        .btn-nav { background: white; color: black; padding: 0.5rem 1.25rem; border-radius: 50px; font-weight: 700; text-decoration: none; }

        /* Hero */
        .hero-section { min-height: 100vh; display: flex; align-items: center; background: radial-gradient(circle at 50% 50%, #0a1628 0%, #000 100%); padding-top: 5rem; }
        .hero-container { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 4rem; width: 100%; }
        .hero-text { flex: 1; min-width: 300px; max-width: 600px; }
        .hero-visual { flex: 1; min-width: 300px; display: flex; justify-content: center; }
        
        .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); padding: 0.4rem 0.8rem; border-radius: 50px; margin-bottom: 2rem; }
        .badge-bg { background: #00D264; color: black; font-weight: 800; font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px; }
        
        .hero-title { font-size: 4rem; font-weight: 900; line-height: 1.1; margin-bottom: 1.5rem; color: white; }
        .hero-desc { font-size: 1.25rem; line-height: 1.6; margin-bottom: 2.5rem; color: rgba(255,255,255,0.7); }
        
        .hero-btns { display: flex; gap: 1rem; }
        .btn-primary { background: #00D264; color: black; padding: 1rem 2rem; border-radius: 12px; font-weight: 700; text-decoration: none; transition: 0.2s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0, 210, 100, 0.2); }
        .btn-outline { border: 1px solid rgba(255,255,255,0.3); color: white; padding: 1rem 2rem; border-radius: 12px; font-weight: 600; text-decoration: none; transition: 0.2s; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); border-color: white; }

        /* Mockup */
        .mockup-container { width: 320px; height: 620px; }
        .phone-frame { width: 100%; height: 100%; background: #000; border: 12px solid #222; border-radius: 40px; position: relative; overflow: hidden; box-shadow: 0 40px 80px rgba(0,0,0,0.6); }
        .notch { width: 120px; height: 26px; background: #222; position: absolute; top: 0; left: 50%; transform: translateX(-50%); border-radius: 0 0 16px 16px; z-index: 10; }
        .screen-content { padding: 3rem 1.5rem; height: 100%; background: #111; color: white; }
        .screen-slide { height: 100%; display: flex; flex-direction: column; animation: fade 0.5s ease; }
        @keyframes fade { from { opacity: 0; } to { opacity: 1; } }
        .mockup-header { text-align: center; font-size: 1.2rem; font-weight: 700; margin-bottom: 2rem; }
        .skeleton-avatar { width: 60px; height: 60px; background: #333; border-radius: 50%; margin-bottom: 1rem; }
        .skeleton-line { height: 10px; background: #333; border-radius: 10px; margin-bottom: 0.8rem; }
        .w-75 { width: 75%; } .w-50 { width: 50%; }
        .mockup-input { background: #222; padding: 1rem; border-radius: 12px; font-size: 0.9rem; margin-top: auto; margin-bottom: 1rem; color: #aaa; border: 1px solid #333; }
        .mockup-btn { background: #00D264; color: black; padding: 0.8rem; text-align: center; border-radius: 12px; font-weight: 700; }
        .center-content { align-items: center; justify-content: center; }
        .mockup-badge-large { font-size: 4rem; margin: 1rem 0; animation: bounce 2s infinite; }
        .mockup-text-lg { font-size: 1.5rem; font-weight: 700; }
        .mockup-points { color: #00D264; font-size: 1.2rem; margin-top: 0.5rem; font-weight: 700; }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .catalog-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 1rem; }
        .cat-item { background: #222; padding: 1.5rem; font-size: 2rem; text-align: center; border-radius: 12px; }
        
        .mockup-nav { position: absolute; bottom: 15px; left: 0; right: 0; display: flex; justify-content: center; gap: 8px; }
        .nav-dot { width: 6px; height: 6px; background: #444; border-radius: 50%; cursor: pointer; }
        .nav-dot.active { background: #00D264; width: 18px; border-radius: 10px; }

        /* Features */
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .feature-card { background: rgba(255,255,255,0.05); padding: 2rem; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05); transition: 0.3s; }
        .feature-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.08); }
        .icon-box { font-size: 2.5rem; margin-bottom: 1rem; }
        .feature-card h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: white; }
        .feature-card p { color: rgba(255,255,255,0.7); line-height: 1.6; }

        /* Steps */
        .section-head { text-align: center; margin-bottom: 3rem; }
        .section-head h2 { font-size: 2.5rem; margin-bottom: 0.5rem; color: white; font-weight: 900; }
        .steps-container { display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; }
        .step-card { flex: 1; min-width: 250px; background: #111; padding: 2rem; border-radius: 20px; position: relative; border: 1px solid rgba(255,255,255,0.1); }
        .step-num { position: absolute; top: -15px; left: 20px; width: 36px; height: 36px; background: #00D264; color: black; font-weight: 800; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .step-icon { font-size: 3rem; text-align: center; margin: 1rem 0; }
        .step-card h3 { text-align: center; color: white; margin-bottom: 0.5rem; font-size: 1.2rem; }
        .step-card p { text-align: center; color: rgba(255,255,255,0.7); }

        /* Testimonials */
        .marquee-container { overflow: hidden; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
        .marquee-track { display: flex; gap: 2rem; width: max-content; animation: scroll 40s linear infinite; }
        @keyframes scroll { to { transform: translateX(-50%); } }
        .review-card { width: 320px; background: #111; padding: 2rem; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); }
        .review-author strong { display: block; color: white; }
        .review-author span { color: #00D264; font-size: 0.85rem; }

        /* Cross Border */
        .cb-container { text-align: center; }
        .cb-visual { font-size: 4rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; gap: 1rem; }
        .cb-line { height: 2px; width: 80px; background: #00D264; }
        .cb-text h2 { font-size: 2.5rem; font-weight: 900; color: white; margin-bottom: 1rem; }
        .cb-text p { color: rgba(255,255,255,0.8); font-size: 1.2rem; }

        /* CTA */
        .cta-section { background: #00D264; padding: 6rem 0; text-align: center; }
        .cta-container h2 { font-size: 2.5rem; font-weight: 900; color: black; margin-bottom: 2rem; }
        .btn-cta { background: black; color: white; padding: 1.2rem 3rem; border-radius: 50px; font-weight: 700; text-decoration: none; font-size: 1.2rem; transition: transform 0.2s; display: inline-block; }
        .btn-cta:hover { transform: scale(1.05); }

        /* Footer */
        .footer { padding: 4rem 0 2rem; background: #000; border-top: 1px solid rgba(255,255,255,0.1); }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .brand-muted { color: #444; font-size: 1.5rem; font-weight: 800; }
        .footer-nav { display: flex; gap: 2rem; }
        .footer-nav a { color: #666; text-decoration: none; }
        .footer-nav a:hover { color: white; }
        .footer-copy { text-align: center; color: #444; font-size: 0.9rem; }

        /* Responsive */
        @media (max-width: 900px) {
          .hero-title { font-size: 2.5rem; }
          .mockup-container { height: 500px; }
          .nav-links { display: none; }
        }
      `}</style>
    </div>
  )
}
