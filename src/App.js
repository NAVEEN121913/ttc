import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./img/logo_ttc.png";
import bgImg from "./img/bgttc3.jpg";

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='App'>
      <header className={sticky ? "sticky" : ""}>
        <a href='#' className='logo'>
          <img src={logo} alt='Logo' width='70' />
        </a>
        <div
          className={`menuToggle ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}></div>
        <ul className={`navigation ${menuActive ? "active" : ""}`}>
          {["home", "about", "Why?", "contact"].map((section) => (
            <li key={section}>
              <a href={`#${section}`} onClick={toggleMenu}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <section className='banner' id='banner'>
        <div className='content'>
          <h2>Learn Trading the Smart Way</h2>
          <p>
            Join <strong>TTC – Tamil Trading Couple</strong> and discover the
            confidence, skills, and strategies you need to trade like a pro –
            even if you’re just starting out!
          </p>
        </div>
      </section>

      <section className='about' id='about'>
        <div className='row'>
          <div className='col50'>
            <h2 className='titleText'>
              <span>A</span>bout Us
            </h2>
            <p>
              At <strong>TTC</strong>, we don’t just teach theory — we mentor
              you toward
              <strong> real, consistent profits</strong>. From complete
              beginners to traders looking to level up, our proven methods,
              powerful tools, and personalized support will guide your path to
              success in the stock market.
              <br />
              <br />
              📈 We build traders for life, not just for a course.
            </p>
          </div>
          <div className='col50'>
            <div className='imgBx'>
              <img src={bgImg} alt='About' />
            </div>
          </div>
        </div>
      </section>

      <section className='expert' id='Why?'>
        <div className='title'>
          <h2 className='titleText'>
            Why Choose <span>TTC</span>?
          </h2>
          <p>We give you all the tools to trade with confidence.</p>
        </div>
        <div className='content'>
          {[
            "Live, one-on-one mentorship",
            "Unlimited doubt clearing sessions",
            "Lifetime WhatsApp support",
            "Low capital expiry day strategies",
            "Trending & sideways market strategies",
            "Back-tested systems for Stocks, Index, Options",
            "Daily key-level market updates",
            "End-of-day chart analysis",
            "Lifetime community access",
            "8+ months of index charts for study",
          ].map((point, index) => (
            <div className='box' key={index}>
              <div className='text'>
                <h3>✔️ {point}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='testimonials' id='testimonials'>
        <div className='title white'>
          <h2 className='titleText'>
            Course <span>D</span>etails
          </h2>
          <p>Choose the program that fits your trading goals.</p>
        </div>
        <div className='content'>
          <div className='box'>
            <div className='text'>
              <h3>Beginner to Pro (₹15,000)</h3>
              <p>
                - Stocks
                <br />
                - Stock options
                <br />
                - Intraday trading
                <br />
                - Positional strategy
                <br />
                - Swing trading
                <br />
                - Result-based stock strategies
                <br />- Custom stock selection tool
              </p>
              <p>
                <strong>Duration:</strong> 1 to 3 months (flexible, no extra
                cost)
              </p>
            </div>
          </div>
          <div className='box'>
            <div className='text'>
              <h3>Index Mastery (₹15,000)</h3>
              <p>
                - Index Options Buying
                <br />- Index Options Selling
              </p>
              <p>
                <strong>Includes 1-on-1 training & lifetime access.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='contact' id='contact'>
        <div className='title'>
          <h2 className='titleText'>
            <span>C</span>ontact Us
          </h2>
          <p>We're here to help you get started!</p>
        </div>
        <div className='formContainer'>
          <div className='contactForm'>
            <h3>Send Message</h3>
            <div className='inputBox'>
              <input type='text' placeholder='Name' required />
            </div>
            <div className='inputBox'>
              <input type='email' placeholder='Email' required />
            </div>
            <div className='inputBox'>
              <textarea placeholder='Message line...' required></textarea>
            </div>
            <div className='inputBox'>
              <input type='submit' value='Send' />
            </div>
            <p>📞 Call us: 8838873513 / 9994110100</p>
          </div>
        </div>
      </section>

      <div className='copyrightText'>
        <p>
          © 2025 <strong>Tamil Trading Couple</strong>. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default App;
