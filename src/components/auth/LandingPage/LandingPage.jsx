import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSeeHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.landingPage}>
      {}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className={styles.logoText}>EnergyWise</span>
          </div>
          
          <div className={styles.navLinks}>
            <a href="#features" className={styles.navLink}>Features</a>
            <a href="#pricing" className={styles.navLink}>Pricing</a>
            <a href="#about" className={styles.navLink}>About</a>
            <button onClick={handleLogin} className={styles.loginButton}>Log In</button>
            <button onClick={handleGetStarted} className={styles.getStartedButtonNav}>Get Started</button>
          </div>
        </div>
      </nav>

      {}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>⚡</span>
              <span className={styles.badgeText}>AI-Powered Energy Intelligence</span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Track, Optimize & <br />
              Save on <span className={styles.highlight}>Energy</span><br />
              Costs
            </h1>
            
            <p className={styles.heroDescription}>
              Gain complete visibility into your energy usage, receive accurate<br />
              forecasts, and connect with verified technicians—all in one<br />
              platform—for African homes and businesses.
            </p>
            
            <div className={styles.heroCta}>
              <button onClick={handleGetStarted} className={styles.primaryButton}>
                Get Started FREE →
              </button>
              <button onClick={handleSeeHowItWorks} className={styles.secondaryButton}>
                See How It Works
              </button>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>25%</div>
                <div className={styles.statLabel}>Energy saved</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>88%</div>
                <div className={styles.statLabel}>Customer satisfaction</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>24/7</div>
                <div className={styles.statLabel}>Support available</div>
              </div>
            </div>
          </div>
          
          <div className={styles.heroImage}>
            <div className={styles.dashboardMockup}>
              {}
              <div className={styles.mockupCard}>
                <div className={styles.mockupHeader}>Daily kWh</div>
                <div className={styles.mockupChart}>
                  <div className={styles.chartBar} style={{ height: '60%' }}></div>
                  <div className={styles.chartBar} style={{ height: '40%' }}></div>
                  <div className={styles.chartBar} style={{ height: '80%' }}></div>
                  <div className={styles.chartBar} style={{ height: '55%' }}></div>
                  <div className={styles.chartBar} style={{ height: '90%' }}></div>
                  <div className={styles.chartBar} style={{ height: '70%' }}></div>
                  <div className={styles.chartBar} style={{ height: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className={styles.features} id="features">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Everything You Need to Manage Energy</h2>
          <p className={styles.sectionSubtitle}>
            Stay informed, AI forecasting, cost analytics, and expert support in one platform.
          </p>
          
          <div className={styles.featureGrid}>
            <div className={styles.featureBlock}>
              <div className={styles.featureImage}>
                <div className={styles.dashboardPreview}>
                  {}
                  <div className={styles.previewCard}>📊 Live Dashboard</div>
                </div>
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureBadge}>
                  <span>⚡</span> Real-Time Insights
                </div>
                <h3 className={styles.featureTitle}>Monitor Your Energy Usage Live</h3>
                <p className={styles.featureDescription}>
                  Track your household or business electricity consumption, identify high-usage appliances, and get instant updates on your energy balance.
                </p>
                <ul className={styles.featureList}>
                  <li>Track energy usage in real-time</li>
                  <li>Appliance-level monitoring</li>
                  <li>Daily, weekly, and monthly trends</li>
                  <li>Instant balance updates</li>
                </ul>
              </div>
            </div>
            
            <div className={`${styles.featureBlock} ${styles.featureBlockReverse}`}>
              <div className={styles.featureContent}>
                <div className={styles.featureBadge}>
                  <span>🤖</span> AI Scheduling
                </div>
                <h3 className={styles.featureTitle}>Protect Your Energy Needs</h3>
                <p className={styles.featureDescription}>
                  Get AI-driven predictions to forecast when your energy will run out and receive unexpected forecasts.
                </p>
                <ul className={styles.featureList}>
                  <li>Predict your expense forecast</li>
                  <li>Manage your credit limit</li>
                  <li>Get analytics and insights</li>
                  <li>AI recommendations</li>
                </ul>
              </div>
              <div className={styles.featureImage}>
                <div className={styles.illustrationPreview}>
                  {}
                  <div className={styles.previewCard}>🔮 AI Forecasting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className={styles.howItWorks} id="how-it-works">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Get Started in 3 Simple Steps</h2>
          <p className={styles.sectionSubtitle}>
            Setup takes less than 5 minutes. Start managing your energy smarter today.
          </p>
          
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepIcon}>👤</div>
              <h3 className={styles.stepTitle}>Create Your Profile</h3>
              <p className={styles.stepDescription}>
                Sign up and let us know you use energy for your home or business. It's quick and easy!
              </p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepIcon}>⚡</div>
              <h3 className={styles.stepTitle}>Log Your Energy</h3>
              <p className={styles.stepDescription}>
                Log your electricity units as you purchase or add units right from the platform for easy tracking.
              </p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepIcon}>📊</div>
              <h3 className={styles.stepTitle}>Get Insights</h3>
              <p className={styles.stepDescription}>
                View personalized AI-powered forecasts, track usage, and connect with trusted technicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className={styles.technicians}>
        <div className={styles.container}>
          <div className={styles.techContent}>
            <div className={styles.techImage}>
              {}
              <div className={styles.imagePlaceholder}>🔧 Professional Service</div>
            </div>
            <div className={styles.techText}>
              <h2 className={styles.techTitle}>Connect with Verified Technicians</h2>
              <p className={styles.techDescription}>
                Access a marketplace of verified electricians, energy auditors, and installation specialists. Get professional help when you need it most.
              </p>
              <ul className={styles.techList}>
                <li>Admin-verified credentials</li>
                <li>Browse by location and specialty</li>
                <li>Read reviews and ratings</li>
                <li>Direct contact and booking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className={styles.whyChoose}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleWhite}>Why Choose EnergyWise?</h2>
          <p className={styles.sectionSubtitleWhite}>
            Join thousands already saving money and managing energy smarter with EnergyWise
          </p>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>💰</div>
              <h4 className={styles.benefitTitle}>Reduce costs by 15-25%</h4>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>📊</div>
              <h4 className={styles.benefitTitle}>Never run out unexpectedly</h4>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🤖</div>
              <h4 className={styles.benefitTitle}>AI-powered insights every day</h4>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🔒</div>
              <h4 className={styles.benefitTitle}>No contracts. No hassle. Cancel anytime.</h4>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>📱</div>
              <h4 className={styles.benefitTitle}>Access from anywhere</h4>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>⏰</div>
              <h4 className={styles.benefitTitle}>24/7 real-time monitoring</h4>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🎯</div>
              <h4 className={styles.benefitTitle}>Personalized recommendations</h4>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🔧</div>
              <h4 className={styles.benefitTitle}>Expert technician access</h4>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Start Saving?</h2>
          <p className={styles.ctaDescription}>
            Join 5,000+ homes and businesses managing energy smarter with EnergyWise
          </p>
          <button onClick={handleGetStarted} className={styles.ctaButton}>
            Get Started Free Today →
          </button>
          <p className={styles.ctaNote}>
            No credit card required • Free forever
          </p>
        </div>
      </section>

      {}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerColumn}>
              <div className={styles.footerLogo}>
                <div className={styles.logoIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span>EnergyWise</span>
              </div>
              <p className={styles.footerTagline}>
                Transforming energy decision<br />making for Africa.
              </p>
            </div>
            
            <div className={styles.footerColumn}>
              <h4 className={styles.footerHeading}>Product</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#how-it-works">Get Started</a></li>
              </ul>
            </div>
            
            <div className={styles.footerColumn}>
              <h4 className={styles.footerHeading}>Company</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#about">About</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            
            <div className={styles.footerColumn}>
              <h4 className={styles.footerHeading}>Support</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#help">Help Centre</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>© 2025 EnergyWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
