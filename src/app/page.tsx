'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// --- Data ---
const features = [
  { icon: '🎯', title: 'Meaningful Recognition', desc: 'Give props that actually matter. Personal messages make colleagues feel valued.' },
  { icon: '🌍', title: 'Borderless Teams', desc: 'Whether in Vietnam, Czech Republic, or anywhere else. Work as one global team.' },
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
          <div className="brand">
            <span style={{ color: '#00D264' }}>&lt;</span>Em<span style={{ color: '#00D264' }}>/</span>Pulse<span style={{ color: '#00D264' }}>&gt;</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how">How it Works</a>
            <Link href="/login" className="landing-btn-nav">Try Demo</Link>
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
              Ready for global teams.
            </p>
            <div className="hero-btns">
              <Link href="/login" className="landing-btn-primary">View Demo</Link>
              <a href="#features" className="landing-btn-outline">Learn More</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-wrapper">
              <Image
                src="/hero-visual.png"
                alt="3D Recognition Visual"
                width={600}
                height={600}
                className="hero-img-3d"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section bg-dark">
        <div className="container">
          <div className="section-head">
            <h2 className="text-white">Why <span className="text-highlight">&lt;</span>Em<span className="text-highlight">/</span>Pulse<span className="text-highlight">&gt;</span>?</h2>
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

      {/* Cross Border / Global */}
      <section className="section bg-gradient-global">
        <div className="container cb-container">
          <div className="cb-text-left">
            <h2 className="text-white">One Platform.<br />Borderless Recognition.</h2>
            <p className="text-gray-light">
              Connect your distributed teams globally. From Vietnam to Europe, bridge the gap instantly with localized rewards and seamless fulfillment.
            </p>
          </div>
          <div className="cb-visual-right">
            <Image
              src="/global-map.png"
              alt="Global Network Map"
              width={500}
              height={400}
              className="global-map-img"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta-container">
          <h2 className="cta-heading">Ready to transform your workplace?</h2>
          <Link href="/login" className="landing-btn-cta">Start Free Demo</Link>
          <p className="cta-small">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand-col">
            <div className="brand-muted">
              <Image src="/embedit-logo.svg" alt="EmbedIT" width={240} height={64} className="footer-logo" />
            </div>
            <p className="footer-tagline">Building the future of finance and engagement.</p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Enterprise</a>
            <a href="#">Security</a>
            <a href="#">Changelog</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About EmbedIT</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
            <a href="#">Partners</a>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-copy">© 2026 Embedit</div>
          </div>
        </div>
      </footer>

      {/* --- STYLES --- */}
      <style jsx global>{`
        body, html { 
          margin: 0; padding: 0; background: #000 !important; 
          color: white !important; font-family: 'Satoshi', sans-serif; overflow-x: hidden;
        }
      `}</style>

      <style jsx>{`
        /* Scoped Styles */
        .landing-wrapper { width: 100%; min-height: 100vh; background: #000; color: white; overflow-x: hidden; }

        /* Typography */
        .text-white { color: #fff !important; }
        .text-gray { color: rgba(255,255,255,0.7) !important; }
        .text-gray-light { color: rgba(255,255,255,0.9) !important; }
        .text-highlight { color: #00D264 !important; }
        .text-italic { font-style: italic; }
        .text-center { text-align: center; }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; position: relative; z-index: 2; width: 100%; }
        .section { padding: 6rem 0; }
        .bg-dark { background: #050505; }
        .bg-darker { background: #000; }
        .bg-gradient-global { 
            background: linear-gradient(135deg, #001a3d 0%, #000 100%); 
            position: relative; overflow: hidden;
        }
        .mb-large { margin-bottom: 4rem; }

        /* Navbar */
        .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 1.5rem 0; transition: 0.3s; }
        .navbar.scrolled { padding: 1rem 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.1); }
        .nav-inner { display: flex; justify-content: space-between; align-items: center; }
        .brand { font-size: 1.5rem; font-weight: 800; color: white; }
        .nav-links { display: flex; gap: 2rem; align-items: center; }
        .nav-links a { color: rgba(255,255,255,0.7); text-decoration: none; font-weight: 500; transition: color 0.2s; }
        .nav-links a:hover { color: #00D264; }
        
        /* NEW BUTTON STYLES (Minimalist / Bold) */
        .landing-btn-nav { 
            background: rgba(255,255,255,0.1) !important; 
            color: white !important; 
            padding: 0.6rem 1.5rem; 
            border-radius: 50px; 
            border: 1px solid rgba(255,255,255,0.1);
            font-weight: 600; text-decoration: none; transition: all 0.2s;
            backdrop-filter: blur(5px);
        }
        .landing-btn-nav:hover { 
            background: rgba(255,255,255,0.2) !important; 
            transform: translateY(-2px); 
        }

        /* Hero */
        .hero-section { min-height: 90vh; display: flex; align-items: center; background: radial-gradient(circle at 60% 0%, #0a1628 0%, #000 70%); padding-top: 5rem; }
        .hero-container { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 3rem; width: 100%; }
        .hero-text { flex: 1; min-width: 300px; max-width: 600px; }
        .hero-visual { flex: 1; min-width: 300px; display: flex; justify-content: center; align-items: center; position: relative; }
        
        .hero-img-3d { 
            width: 100%; height: auto; max-width: 550px; 
            filter: drop-shadow(0 0 40px rgba(0, 210, 100, 0.15));
            animation: float 6s infinite ease-in-out;
        }
        @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0); } }

        .hero-badge { display: inline-flex; align-items: center; gap: 0.8rem; background: rgba(255,255,255,0.1); padding: 0.4rem 0.8rem; border-radius: 50px; margin-bottom: 2rem; backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.1); }
        .badge-bg { background: white; color: black; font-weight: 800; font-size: 0.75rem; padding: 0.25rem 0.6rem; border-radius: 4px; }
        
        /* Typography Clamp for Mobile */
        .hero-title { 
            font-size: clamp(1.8rem, 10vw, 4rem); 
            font-weight: 900; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.02em; 
            word-break: break-word; /* Prevent overflow */
        }
        .hero-desc { font-size: 1.25rem; line-height: 1.6; margin-bottom: 2.5rem; }
        
        .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
        
        /* === HERO BUTTONS: Solid White for maximum contrast === */
        .landing-btn-primary { 
            background: #FFFFFF !important; 
            color: #000000 !important; 
            padding: 1rem 2.8rem; border-radius: 50px; font-weight: 700; 
            text-decoration: none; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); 
            display: inline-block; text-align: center;
            letter-spacing: -0.01em;
        }
        .landing-btn-primary:hover { 
            transform: translateY(-4px); 
            box-shadow: 0 10px 40px rgba(255, 255, 255, 0.2); 
        }
        
        .landing-btn-outline { 
            background: transparent !important;
            border: 1px solid rgba(255,255,255,0.3) !important; color: white !important; 
            padding: 1rem 2.8rem; border-radius: 50px; font-weight: 600; text-decoration: none; 
            transition: all 0.2s; display: inline-block; text-align: center;
        }
        .landing-btn-outline:hover { 
            border-color: #FFFFFF !important; 
            background: rgba(255,255,255,0.1) !important; 
        }

        /* Features */
        .section-head { text-align: center; margin-bottom: 4rem; }
        .section-head h2 { font-size: 2.5rem; margin-bottom: 1rem; color: white; font-weight: 800; }
        
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .feature-card { background: rgba(255,255,255,0.03); padding: 2.5rem; border-radius: 24px; border: 1px solid rgba(255,255,255,0.05); transition: 0.3s; }
        .feature-card:hover { transform: translateY(-8px); background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.2); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
        .icon-box { font-size: 2.5rem; margin-bottom: 1.5rem; }
        .feature-card h3 { font-size: 1.35rem; font-weight: 700; margin-bottom: 0.75rem; color: white; }
        .feature-card p { font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.6; }

        /* Steps */
        .steps-container { display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; }
        .step-card { flex: 1; min-width: 280px; background: #111; padding: 2.5rem; border-radius: 24px; position: relative; border: 1px solid rgba(255,255,255,0.1); transition: 0.3s; }
        .step-card:hover { border-color: #00D264; transform: translateY(-5px); }
        .step-num { position: absolute; top: -18px; left: 30px; width: 40px; height: 40px; background: #00D264; color: black; font-weight: 800; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px rgba(0,210,100,0.5); }
        .step-icon.large { font-size: 3.5rem; text-align: center; margin: 1.5rem 0; }
        .step-card h3 { text-align: center; color: white; margin-bottom: 0.75rem; font-size: 1.3rem; font-weight: 700; }
        .step-card p { text-align: center; color: rgba(255,255,255,0.7); line-height: 1.6; }

        /* Testimonials */
        .marquee-container { overflow: hidden; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); padding: 1rem 0; }
        .marquee-track { display: flex; gap: 2.5rem; width: max-content; animation: scroll 40s linear infinite; }
        @keyframes scroll { to { transform: translateX(-50%); } }
        .review-card { width: 350px; background: #0a0a0a; padding: 2.5rem; border-radius: 20px; border: 1px solid rgba(255,255,255,0.08); }
        .review-author strong { display: block; color: white; font-size: 1.1rem; }
        .review-author span { color: #00D264; font-size: 0.9rem; font-weight: 600; }

        /* Global Section */
        .cb-container { display: flex; align-items: center; justify-content: space-between; gap: 4rem; flex-wrap: wrap; }
        .cb-text-left { flex: 1; min-width: 300px; }
        /* Typography Clamp for Global Headline */
        .cb-text-left h2 { 
            font-size: clamp(1.8rem, 8vw, 3rem); 
            font-weight: 900; line-height: 1.1; margin-bottom: 1.5rem; 
            word-break: break-word;
        }
        .cb-text-left p { font-size: 1.25rem; line-height: 1.6; color: rgba(255,255,255,0.8); }
        .cb-visual-right { flex: 1; min-width: 300px; display: flex; justify-content: center; }
        .global-map-img { width: 100%; max-width: 500px; height: auto; opacity: 0.9; mix-blend-mode: screen; filter: hue-rotate(15deg); }

        /* CTA */
        .cta-section { 
            background: linear-gradient(135deg, #00D264 0%, #00AB50 100%); 
            padding: 8rem 0; text-align: center; color: black;
            clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
        }
        .cta-heading { font-size: 3.5rem; font-weight: 900; color: #000; margin-bottom: 2.5rem; letter-spacing: -0.03em; }
        
        /* === CTA BUTTON: Solid Black for Impact on Green === */
        .landing-btn-cta { 
            background: #000000 !important; 
            color: #FFFFFF !important; 
            padding: 1.4rem 4rem; border-radius: 50px; 
            font-weight: 800; text-decoration: none; font-size: 1.3rem; 
            transition: all 0.3s ease; 
            display: inline-block;
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
            border: 2px solid transparent;
        }
        .landing-btn-cta:hover { 
            transform: scale(1.05); 
            box-shadow: 0 25px 60px rgba(0,0,0,0.4); 
            background: #111 !important;
        }
        .cta-small { margin-top: 1.5rem; font-weight: 600; opacity: 0.7; font-size: 1rem; color: #000; }

        /* Footer */
        /* Footer */
        .footer { padding: 6rem 0 0; background: #050505; border-top: 1px solid rgba(255,255,255,0.05); }
        .footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 4rem; margin-bottom: 4rem; }
        .footer-brand-col { display: flex; flex-direction: column; gap: 1rem; }
        .footer-logo { opacity: 1; margin-bottom: 1rem; filter: brightness(1.2) contrast(1.1); }
        .footer-tagline { color: #666; font-size: 0.95rem; max-width: 250px; line-height: 1.6; }
        
        .footer-col { display: flex; flex-direction: column; gap: 1rem; }
        .footer-col h4 { color: white; margin: 0 0 0.5rem; font-size: 1.1rem; font-weight: 700; }
        .footer-col a { color: #888; text-decoration: none; font-size: 1rem; transition: 0.2s; width: fit-content; }
        .footer-col a:hover { color: #00D264; transform: translateX(5px); }
        
        .footer-bottom { background: #000; padding: 2rem 0; border-top: 1px solid rgba(255,255,255,0.05); }
        .footer-copy { color: #444; font-size: 0.9rem; }

        /* Responsiveness */
        @media (max-width: 900px) {
          .nav-links { display: none; }
          
          .hero-section { padding-top: 7rem; text-align: center; }
          .hero-container { flex-direction: column-reverse; gap: 2rem; }
          .hero-text { align-items: center; display: flex; flex-direction: column; }
          /* Font sizes are handled by clamp() above */
          
          .hero-btns { flex-direction: column; gap: 1rem; width: 100%; max-width: 300px; }
          .landing-btn-primary, .landing-btn-outline { width: 100%; display: block; box-sizing: border-box; }
          
          .section { padding: 4rem 0; }
          .section-head h2 { font-size: 2rem; }
          
          .cb-container { flex-direction: column; text-align: center; }
          
          .cta-heading { font-size: 2.2rem; }
          .landing-btn-cta { width: 100%; max-width: 300px; padding: 1rem 2rem; font-size: 1.1rem; }
          
          .hero-img-3d, .global-map-img { width: 100%; max-width: 350px; }

          .footer-grid { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
          .footer-brand-col { align-items: center; }
          .footer-col { align-items: center; }
          .footer-tagline { margin: 0 auto; }
          .footer-copy { text-align: center; }
        }
      `}</style>
    </div>
  )
}
