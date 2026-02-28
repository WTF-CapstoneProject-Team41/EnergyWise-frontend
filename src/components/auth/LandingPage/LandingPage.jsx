import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSeeHowItWorks = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.landingPage}>
      {/* navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
              >
                <rect width="40" height="40" fill="#008070" rx="12" />
                <path
                  fill="#f59e0b"
                  stroke="#f59e0b"
                  strokeWidth=".047"
                  d="m24.97 10.023-1.735 6.971-.006.03h4.975L16.068 29.917l2.715-10.912.008-.03H14.79l2.229-8.953z"
                />
              </svg>
            </div>
            <span className={styles.logoText}>EnergyWise</span>
          </div>

          <div className={styles.navLinks}>
            <a href="#features" className={styles.navLink}>
              Features
            </a>
            <a href="#pricing" className={styles.navLink}>
              Pricing
            </a>
            <a href="#about" className={styles.navLink}>
              About
            </a>
            <button onClick={handleLogin} className={styles.loginButton}>
              Log In
            </button>
            <button
              onClick={handleGetStarted}
              className={styles.getStartedButtonNav}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* hero */}
      <section className={styles.hero}>
        <div className={`${styles.blob} ${styles.blobGreen}`} />
        <div className={`${styles.blob} ${styles.blobAmber}`} />
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1031_3909)">
                    <path
                      d="M6.6243 10.3332C6.56478 10.1025 6.44453 9.89191 6.27605 9.72343C6.10757 9.55495 5.89702 9.43469 5.6663 9.37517L1.5763 8.32051C1.50652 8.3007 1.44511 8.25867 1.40138 8.2008C1.35765 8.14293 1.33398 8.07238 1.33398 7.99984C1.33398 7.9273 1.35765 7.85675 1.40138 7.79888C1.44511 7.74101 1.50652 7.69898 1.5763 7.67917L5.6663 6.62384C5.89693 6.56438 6.10743 6.44422 6.2759 6.27587C6.44438 6.10751 6.56468 5.8971 6.6243 5.66651L7.67897 1.57651C7.69857 1.50645 7.74056 1.44474 7.79851 1.40077C7.85647 1.35681 7.92722 1.33301 7.99997 1.33301C8.07271 1.33301 8.14346 1.35681 8.20142 1.40077C8.25938 1.44474 8.30136 1.50645 8.32097 1.57651L9.37497 5.66651C9.43449 5.89722 9.55474 6.10777 9.72322 6.27625C9.8917 6.44473 10.1023 6.56499 10.333 6.62451L14.423 7.67851C14.4933 7.69791 14.5553 7.73985 14.5995 7.79789C14.6437 7.85594 14.6677 7.92688 14.6677 7.99984C14.6677 8.0728 14.6437 8.14374 14.5995 8.20179C14.5553 8.25983 14.4933 8.30177 14.423 8.32117L10.333 9.37517C10.1023 9.43469 9.8917 9.55495 9.72322 9.72343C9.55474 9.89191 9.43449 10.1025 9.37497 10.3332L8.3203 14.4232C8.3007 14.4932 8.25871 14.5549 8.20075 14.5989C8.1428 14.6429 8.07205 14.6667 7.9993 14.6667C7.92656 14.6667 7.85581 14.6429 7.79785 14.5989C7.73989 14.5549 7.69791 14.4932 7.6783 14.4232L6.6243 10.3332Z"
                      stroke="#09907F"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.333 2V4.66667"
                      stroke="#09907F"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 3.3335H12"
                      stroke="#09907F"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.66699 11.3335V12.6668"
                      stroke="#09907F"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33333 12H2"
                      stroke="#09907F"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1031_3909">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className={styles.badgeText}>
                AI-Powered Energy Intelligence
              </span>
            </div>
            {/* left side */}
            <div>
              <h1 className={styles.heroTitle}>
                Track, Optimize & <br />
                Save on <span className={styles.highlight}>Energy</span>
                <br />
                Costs
              </h1>

              <p className={styles.heroDescription}>
                Monitor your electricity usage in real-time, get AI-
                <br />
                powered forecasts, and connect with verified technicians
                <br />— all in one platform built for African homes and
                <br />
                businesses
              </p>

              <div className={styles.heroCta}>
                <button
                  onClick={handleGetStarted}
                  className={styles.primaryButton}
                >
                  Get Started FREE →
                </button>
                <button
                  onClick={handleSeeHowItWorks}
                  className={styles.secondaryButton}
                >
                  See How It Works
                </button>
              </div>

              <div className={styles.stats}>
                <div className={styles.statCard}>
                  <div className={styles.statValue}>25%</div>
                  <div className={styles.statLabel}>Average Savings</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statValue}>98%</div>
                  <div className={styles.statLabel}>Forecast Accuracy</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statValue2}>24/7</div>
                  <div className={styles.statLabel}>Real-Time Monitoring</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right -dashboard mockup */}
          <div className={styles.heroImage}>
            <div className={styles.dashboardMockup}>
              <div className={styles.mockupCard}>
                <div className={styles.mockupTopRow}>
                  <div>
                    <div className={styles.mockupLabel}>Current Usage</div>
                    <div className={styles.mockupBalance}>140 kWh</div>
                  </div>
                  <div className={styles.mockupBadgesCol}>
                    <div className={styles.mockupOptimalBadge}>Optimal</div>
                  </div>
                </div>
                <div>
                  <div className={styles.mockupProgressTrack}>
                    <div className={styles.mockupProgressFill} />
                  </div>
                  <div className={styles.mockupProgressRow}>
                    <span>750 units remaining</span>
                    <span className={styles.mockupProgressRow2}>75% left</span>
                  </div>
                </div>
                <div className={styles.mockupChart}>
                  {[91, 105, 77, 97, 112, 85, 95].map((h, i) => (
                    <div
                      key={i}
                      className={styles.chartBar}
                      style={{ height: `${h}%`, opacity: i === 4 ? 1 : 0.5 }}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.mockupFloating}>
                <div className={styles.floatingIcon}>$</div>
                <div>
                  <div className={styles.floatingLabel}>Saved today</div>
                  <div className={styles.floatingValue}>₦450</div>
                </div>
              </div>
              <div className={styles.mockupFloating2}>
                <div className={styles.floatingIcon2}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22 17L13.5 8.5L8.5 13.5L2 7"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 17H22V11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className={styles.floatingLabel2}>This Week</div>
                  <div className={styles.floatingValue2}>-12%</div>
                </div>
              </div>
              <div className={styles.mockupFloating3}>
                {/* <div className={styles.blobFloat} /> */}
                <div className={styles.floatingIcon3}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="172"
                    height="178"
                    fill="none"
                  >
                    <g filter="url(#a)">
                      <path
                        fill="url(#b)"
                        d="M125.004 94.963c-15.454 21.54-45.443 26.473-66.982 11.019S31.549 60.54 47.002 39.001c15.454-21.54 45.443-26.473 66.983-11.02 21.539 15.454 26.473 45.443 11.019 66.982"
                        shape-rendering="crispEdges"
                      />
                      <g
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3.333"
                        clip-path="url(#c)"
                      >
                        <path d="M92.198 64.247a3.33 3.33 0 0 0 .55 3.342l6.77 8.103a.833.833 0 0 1-.934 1.302l-9.846-3.817a3.33 3.33 0 0 0-3.341.549l-8.103 6.77a.834.834 0 0 1-1.304-.935l3.82-9.844a3.33 3.33 0 0 0-.55-3.342l-6.773-8.102a.833.833 0 0 1 .937-1.305l9.844 3.82a3.33 3.33 0 0 0 3.342-.55l8.103-6.771a.833.833 0 0 1 1.304.936zM66.426 71.397l3.886-5.417M65.66 66.746l5.417 3.886M101.694 67.984l1.943-2.709M101.312 65.658l2.709 1.943" />
                      </g>
                    </g>
                    <defs>
                      <linearGradient
                        id="b"
                        x1="97.022"
                        x2="74.984"
                        y1="133.964"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".216" stop-color="#f59e0b" />
                        <stop offset=".356" stop-color="#09907f" />
                      </linearGradient>
                      <clipPath id="c">
                        <path
                          fill="#fff"
                          d="m90.595 94.891-32.5-23.318 23.317-32.5 32.5 23.318z"
                        />
                      </clipPath>
                      <filter
                        id="a"
                        width="209.964"
                        height="209.964"
                        x="-18.979"
                        y="-13"
                        color-interpolation-filters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feMorphology
                          in="SourceAlpha"
                          radius="12"
                          result="effect1_dropShadow_1031_4116"
                        />
                        <feOffset dy="25" />
                        <feGaussianBlur stdDeviation="25" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1031_4116"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1031_4116"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* features*/}
      <section className={styles.features} id="features">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Everything You Need to Manage Energy
          </h2>
          <p className={styles.sectionSubtitle}>
            Stay informed, AI forecasting, cost analytics, and expert support in
            one platform.
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
                <h3 className={styles.featureTitle}>
                  Monitor Your Energy Usage Live
                </h3>
                <p className={styles.featureDescription}>
                  Track your household or business electricity consumption,
                  identify high-usage appliances, and get instant updates on
                  your energy balance.
                </p>
                <ul className={styles.featureList}>
                  <li>Track energy usage in real-time</li>
                  <li>Appliance-level monitoring</li>
                  <li>Daily, weekly, and monthly trends</li>
                  <li>Instant balance updates</li>
                </ul>
              </div>
            </div>

            <div
              className={`${styles.featureBlock} ${styles.featureBlockReverse}`}
            >
              <div className={styles.featureContent}>
                <div className={styles.featureBadge}>
                  <span>🤖</span> AI Scheduling
                </div>
                <h3 className={styles.featureTitle}>
                  Protect Your Energy Needs
                </h3>
                <p className={styles.featureDescription}>
                  Get AI-driven predictions to forecast when your energy will
                  run out and receive unexpected forecasts.
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
            Setup takes less than 5 minutes. Start managing your energy smarter
            today.
          </p>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepIcon}>👤</div>
              <h3 className={styles.stepTitle}>Create Your Profile</h3>
              <p className={styles.stepDescription}>
                Sign up and let us know you use energy for your home or
                business. It's quick and easy!
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepIcon}>⚡</div>
              <h3 className={styles.stepTitle}>Log Your Energy</h3>
              <p className={styles.stepDescription}>
                Log your electricity units as you purchase or add units right
                from the platform for easy tracking.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepIcon}>📊</div>
              <h3 className={styles.stepTitle}>Get Insights</h3>
              <p className={styles.stepDescription}>
                View personalized AI-powered forecasts, track usage, and connect
                with trusted technicians.
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
              <div className={styles.imagePlaceholder}>
                🔧 Professional Service
              </div>
            </div>
            <div className={styles.techText}>
              <h2 className={styles.techTitle}>
                Connect with Verified Technicians
              </h2>
              <p className={styles.techDescription}>
                Access a marketplace of verified electricians, energy auditors,
                and installation specialists. Get professional help when you
                need it most.
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
            Join thousands already saving money and managing energy smarter with
            EnergyWise
          </p>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>💰</div>
              <h4 className={styles.benefitTitle}>Reduce costs by 15-25%</h4>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>📊</div>
              <h4 className={styles.benefitTitle}>
                Never run out unexpectedly
              </h4>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🤖</div>
              <h4 className={styles.benefitTitle}>
                AI-powered insights every day
              </h4>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🔒</div>
              <h4 className={styles.benefitTitle}>
                No contracts. No hassle. Cancel anytime.
              </h4>
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
              <h4 className={styles.benefitTitle}>
                Personalized recommendations
              </h4>
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
            Join 5,000+ homes and businesses managing energy smarter with
            EnergyWise
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span>EnergyWise</span>
              </div>
              <p className={styles.footerTagline}>
                Transforming energy decision
                <br />
                making for Africa.
              </p>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.footerHeading}>Product</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#how-it-works">Get Started</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.footerHeading}>Company</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.footerHeading}>Support</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#help">Help Centre</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
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
