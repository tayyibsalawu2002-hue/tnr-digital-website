"use client";

import React from 'react';

export default function Page() {
  return (
    <div style={styles.container}>
      <Nav />
      <Header />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <div style={styles.logo}>TNR Digital</div>
        <div style={styles.navLinks}>
          <a href="#services" style={styles.navLink}>Services</a>
          <a href="#process" style={styles.navLink}>Process</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
          <a href="#contact" style={styles.navButton}>Get Started</a>
        </div>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <div style={styles.hero}>
          <div style={styles.heroContent}>
            <div style={styles.tagline}>SPECIALISED INSURANCE DATA AUTOMATION</div>
            <h1 style={styles.heroTitle}>
              Replace manual insurance data workflows
              <br />
              with controlled, automated processes
            </h1>
            <p style={styles.heroSubtitle}>
              We specialise in transforming insurance data workflows — from ingestion through to bordereaux — 
              ensuring accuracy, consistency, and audit-ready reporting. Designed specifically for brokers 
              and MGAs managing complex reporting requirements.
            </p>
            <div style={styles.heroButtons}>
              <a href="#contact" style={styles.primaryButton}>Book a Free Discovery Call</a>
              <a href="#services" style={styles.secondaryButton}>See Our Services</a>
            </div>
          </div>
          <div style={styles.heroStats}>
            <div style={styles.statCard}>
              <div style={styles.statTitle}>Efficiency</div>
              <div style={styles.statDesc}>Streamline reporting cycles and reduce time spent on manual data processing</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statTitle}>Audit Compliance</div>
              <div style={styles.statDesc}>Maintain controlled, traceable workflows that meet regulatory requirements</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statTitle}>Results</div>
              <div style={styles.statDesc}>Achieve reliable, error-free bordereaux and reporting with consistent accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Services() {
  return (
    <section id="services" style={styles.section}>
      <div style={styles.sectionContainer}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionLabel}>OUR SPECIALITY</div>
          <h2 style={styles.sectionTitle}>Insurance Data Workflow Solutions</h2>
          <p style={styles.sectionDescription}>
            Replacing manual processes with controlled, repeatable, auditable data workflows
          </p>
        </div>
        
        <div style={styles.servicesGrid}>
          <ServiceCard 
            title="Data Ingestion & Control"
            description="Bring scattered Excel, CSV, PDF, and system data into one controlled, structured environment. Replace manual file hunting with automated ingestion."
            features={["Multi-format ingestion", "Source tracking", "Version control", "Single source of truth"]}
          />
          <ServiceCard 
            title="Validation & Quality Control"
            description="Apply insurance-specific rules to ensure data correctness, completeness, and compliance before it moves downstream."
            features={["Field validation", "Logical checks", "Compliance rules", "Early error detection"]}
          />
          <ServiceCard 
            title="Reconciliation & Consistency"
            description="Ensure numbers add up across datasets, time periods, and reports. Catch mismatches before they reach insurers."
            features={["Cross-dataset checks", "Aggregation validation", "Discrepancy flagging", "Financial accuracy"]}
          />
          <ServiceCard 
            title="Reporting & Bordereaux"
            description="Generate reliable, standardised reports and bordereaux that insurers and regulators can trust every period."
            features={["Standardised formats", "Monthly/quarterly cycles", "Audit trails", "Repeatable outputs"]}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, features }: { title: string; description: string; features: string[] }) {
  return (
    <div style={styles.serviceCard}>
      <h3 style={styles.serviceTitle}>{title}</h3>
      <p style={styles.serviceDescription}>{description}</p>
      <div style={styles.serviceFeatures}>
        {features.map((feature: string, index: number) => (
          <div key={index} style={styles.serviceFeature}>{feature}</div>
        ))}
      </div>
    </div>
  );
}

function Process() {
  const steps = [
    { number: "01", title: "Discovery & Analysis", description: "We map your current workflows, pain points, and insurer requirements in detail" },
    { number: "02", title: "Rule Definition & Design", description: "Define validation rules, reconciliation logic, and reporting formats" },
    { number: "03", title: "Build & Implementation", description: "Create controlled workflows tailored to your specific operations" },
    { number: "04", title: "Testing & Training", description: "Validate with real data, train your team, and ensure audit readiness" }
  ];

  return (
    <section id="process" style={styles.sectionDark}>
      <div style={styles.sectionContainer}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionLabelLight}>HOW WE WORK</div>
          <h2 style={styles.sectionTitleLight}>Our Implementation Process</h2>
          <p style={styles.sectionDescriptionLight}>
            Structured, transparent, and focused on operational readiness
          </p>
        </div>
        
        <div style={styles.processSteps}>
          {steps.map((step, index) => (
            <div key={index} style={styles.processStep}>
              <div style={styles.stepNumber}>{step.number}</div>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.sectionContainer}>
        <div style={styles.aboutGrid}>
          <div>
            <div style={styles.sectionLabel}>WHY SPECIALISE</div>
            <h2 style={styles.sectionTitle}>Built for Insurance Operations</h2>
            <p style={styles.aboutDescription}>
              Insurance brokers and MGAs face unique challenges in data management and regulatory reporting. We provide specialised automation solutions that deliver accuracy, efficiency, and audit readiness.
            </p>
            <div style={styles.aboutPoints}>
              <div style={styles.aboutPoint}>
                <div style={styles.pointIcon}>🏢</div>
                <div>
                  <div style={styles.pointTitle}>Who We Serve</div>
                  <div style={styles.pointDesc}>Insurance brokers, MGAs, coverholders, and delegated authority managers</div>
                </div>
              </div>
              <div style={styles.aboutPoint}>
                <div style={styles.pointIcon}>🎯</div>
                <div>
                  <div style={styles.pointTitle}>Our Focus</div>
                  <div style={styles.pointDesc}>Automated data management: bordereaux, reporting, reconciliation, and validation systems</div>
                </div>
              </div>
              <div style={styles.aboutPoint}>
                <div style={styles.pointIcon}>⚡</div>
                <div>
                  <div style={styles.pointTitle}>What We Replace</div>
                  <div style={styles.pointDesc}>Excel spreadsheets, CSV files, manual checks, and copy-paste processes</div>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.aboutCard}>
            <div style={styles.aboutCardTitle}>The Problem We Solve</div>
            <div style={styles.aboutList}>
              {[
                "Scattered data across emails, Excel, PDFs, and systems",
                "Manual validation and error checking",
                "Reconciliation delays impacting reporting deadlines",
                "Audit trail compliance and version management challenges",
                "Over-reliance on key individuals' spreadsheets"
              ].map((item, index) => (
                <div key={index} style={styles.aboutListItem}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mkonbnbb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Contact Form Submission from ${formData.name} - ${formData.company}`,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent successfully. We\'ll contact you to discuss your insurance data workflow needs.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          interest: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Sorry, there was an error sending your message. Please try again or email us directly at enquiries@tnrdigital.co.uk');
    }
  };

  return (
    <section id="contact" style={styles.sectionDark}>
      <div style={styles.sectionContainer}>
        <div style={styles.contactGrid}>
          <div>
            <div style={styles.sectionLabelLight}>START THE CONVERSATION</div>
            <h2 style={styles.sectionTitleLight}>Discuss Your Workflow</h2>
            <p style={styles.contactDescription}>
              Tell us about your current data processes, pain points, and insurer requirements. 
              We'll provide a clear assessment and proposed approach.
            </p>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <div style={styles.contactLabel}>Email</div>
                <div style={styles.contactValue}>enquiries@tnrdigital.co.uk</div>
              </div>
              <div style={styles.contactItem}>
                <div style={styles.contactLabel}>Location</div>
                <div style={styles.contactValue}>London, UK</div>
              </div>
              <div style={styles.contactItem}>
                <div style={styles.contactLabel}>Specialisation</div>
                <div style={styles.contactValue}>Insurance data workflows & automation</div>
              </div>
            </div>
          </div>
          <div style={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                style={styles.formInput}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                style={styles.formInput}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company & Role"
                style={styles.formInput}
                value={formData.company}
                onChange={handleChange}
                required
              />
              <select
                name="interest"
                style={styles.formSelect}
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="">Primary Interest</option>
                <option value="bordereaux">Bordereaux automation</option>
                <option value="reconciliation">Data reconciliation</option>
                <option value="reporting">Reporting workflow</option>
                <option value="validation">Data validation</option>
                <option value="other">Other insurance workflow</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell us about your current data processes and challenges..."
                style={styles.formTextarea}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" style={styles.submitButton}>
                Discuss My Workflow
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerMain}>
          <div style={styles.footerLogo}>TNR Digital</div>
          <p style={styles.footerTagline}>
            Specialised automation for insurance data workflows.
            Replacing manual processes with controlled, auditable systems.
          </p>
        </div>
        <div style={styles.footerLinks}>
          <a href="#services" style={styles.footerLink}>Services</a>
          <a href="#process" style={styles.footerLink}>Process</a>
          <a href="#about" style={styles.footerLink}>Specialisation</a>
          <a href="#contact" style={styles.footerLink}>Contact</a>
        </div>
        <div style={styles.footerBottom}>
          <div>© {year} TNR Digital. All rights reserved.</div>
          <div style={styles.footerNote}>Specialised in insurance operations • London-based • UK-focused</div>
        </div>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    minHeight: '100vh',
    width: '100%',
  },

  // Navigation
  nav: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #e5e7eb',
    zIndex: 100,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    width: '100%',
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '16px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
  logo: {
    fontSize: 'clamp(20px, 4vw, 24px)',
    fontWeight: 700,
    color: 'transparent',
    backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(16px, 2vw, 32px)',
    flexWrap: 'wrap',
  },
  navLink: {
    color: '#374151',
    fontSize: 'clamp(14px, 1.5vw, 15px)',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'color 0.2s',
    whiteSpace: 'nowrap',
  },
  navButton: {
    backgroundColor: '#1e40af',
    color: 'white',
    padding: 'clamp(8px, 1.5vw, 10px) clamp(16px, 2vw, 22px)',
    borderRadius: '6px',
    fontSize: 'clamp(14px, 1.5vw, 15px)',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'background-color 0.2s',
    border: '1px solid #1e3a8a',
    whiteSpace: 'nowrap',
  },

  // Header/Hero
  header: {
    padding: 'clamp(40px, 8vw, 100px) 20px',
    background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
    borderBottom: '1px solid #d1d5db',
    width: '100%',
    boxSizing: 'border-box',
  },
  headerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 'clamp(30px, 5vw, 60px)',
    alignItems: 'center',
    width: '100%',
  },
  heroContent: {
    maxWidth: '100%',
    width: '100%',
  },
  tagline: {
    color: '#1e40af',
    fontSize: 'clamp(11px, 2vw, 13px)',
    fontWeight: 600,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    marginBottom: 'clamp(16px, 2vw, 20px)',
    backgroundColor: 'rgba(30, 64, 175, 0.1)',
    padding: 'clamp(6px, 1vw, 8px) clamp(12px, 2vw, 16px)',
    borderRadius: '4px',
    display: 'inline-block',
    width: 'fit-content',
  },
  heroTitle: {
    fontSize: 'clamp(28px, 5vw, 48px)',
    fontWeight: 700,
    lineHeight: 1.1,
    margin: '0 0 clamp(16px, 2vw, 24px) 0',
    color: '#111827',
  },
  heroSubtitle: {
    fontSize: 'clamp(16px, 2vw, 18px)',
    lineHeight: 1.7,
    color: '#4b5563',
    marginBottom: 'clamp(30px, 4vw, 40px)',
  },
  heroButtons: {
    display: 'flex',
    gap: 'clamp(12px, 2vw, 16px)',
    flexWrap: 'wrap',
  },
  primaryButton: {
    backgroundColor: '#1e40af',
    color: 'white',
    padding: 'clamp(12px, 2vw, 14px) clamp(20px, 3vw, 28px)',
    borderRadius: '6px',
    fontSize: 'clamp(14px, 1.5vw, 15px)',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'background-color 0.2s',
    border: '1px solid #1e3a8a',
    textAlign: 'center' as const,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#1e40af',
    padding: 'clamp(12px, 2vw, 14px) clamp(20px, 3vw, 28px)',
    borderRadius: '6px',
    fontSize: 'clamp(14px, 1.5vw, 15px)',
    fontWeight: 600,
    textDecoration: 'none',
    border: '1px solid #1e40af',
    transition: 'all 0.2s',
    textAlign: 'center' as const,
  },
  heroStats: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'clamp(16px, 2vw, 20px)',
    width: '100%',
  },
  statCard: {
    backgroundColor: 'white',
    padding: 'clamp(20px, 3vw, 28px)',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb',
    borderLeft: '4px solid #1e40af',
    width: '100%',
  },
  statTitle: {
    fontSize: 'clamp(16px, 2vw, 18px)',
    fontWeight: 700,
    color: '#111827',
    marginBottom: 'clamp(8px, 1vw, 12px)',
  },
  statDesc: {
    fontSize: 'clamp(13px, 1.5vw, 14px)',
    color: '#6b7280',
    lineHeight: 1.5,
  },

  // Sections
  section: {
    padding: 'clamp(40px, 8vw, 100px) 20px',
    backgroundColor: 'white',
    width: '100%',
    boxSizing: 'border-box',
  },
  sectionDark: {
    padding: 'clamp(40px, 8vw, 100px) 20px',
    backgroundColor: '#111827',
    color: 'white',
    width: '100%',
    boxSizing: 'border-box',
  },
  sectionContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  sectionHeader: {
    textAlign: 'center' as const,
    marginBottom: 'clamp(40px, 6vw, 60px)',
    maxWidth: '800px',
    margin: '0 auto clamp(40px, 6vw, 60px)',
    width: '100%',
  },
  sectionLabel: {
    color: '#1e40af',
    fontSize: 'clamp(11px, 2vw, 13px)',
    fontWeight: 600,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    marginBottom: 'clamp(12px, 2vw, 16px)',
  },
  sectionLabelLight: {
    color: '#9ca3af',
    fontSize: 'clamp(11px, 2vw, 13px)',
    fontWeight: 600,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    marginBottom: 'clamp(12px, 2vw, 16px)',
  },
  sectionTitle: {
    fontSize: 'clamp(28px, 5vw, 42px)',
    fontWeight: 700,
    margin: '0 0 clamp(16px, 2vw, 20px) 0',
    color: '#111827',
    lineHeight: 1.2,
  },
  sectionTitleLight: {
    fontSize: 'clamp(28px, 5vw, 42px)',
    fontWeight: 700,
    margin: '0 0 clamp(16px, 2vw, 20px) 0',
    color: 'white',
    lineHeight: 1.2,
  },
  sectionDescription: {
    fontSize: 'clamp(16px, 2vw, 18px)',
    color: '#6b7280',
    lineHeight: 1.6,
  },
  sectionDescriptionLight: {
    fontSize: 'clamp(16px, 2vw, 18px)',
    color: '#d1d5db',
    lineHeight: 1.6,
  },

  // Services
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 'clamp(20px, 3vw, 30px)',
    width: '100%',
  },
  serviceCard: {
    backgroundColor: '#f9fafb',
    padding: 'clamp(24px, 3vw, 32px)',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    borderTop: '4px solid #1e40af',
    transition: 'transform 0.2s, box-shadow 0.2s',
    width: '100%',
  },
  serviceTitle: {
    fontSize: 'clamp(18px, 2.5vw, 22px)',
    fontWeight: 700,
    margin: '0 0 clamp(12px, 1.5vw, 16px) 0',
    color: '#111827',
  },
  serviceDescription: {
    fontSize: 'clamp(14px, 1.8vw, 16px)',
    color: '#4b5563',
    lineHeight: 1.6,
    marginBottom: 'clamp(20px, 2.5vw, 24px)',
  },
  serviceFeatures: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'clamp(6px, 1vw, 8px)',
  },
  serviceFeature: {
    backgroundColor: 'rgba(30, 64, 175, 0.1)',
    color: '#1e40af',
    padding: 'clamp(4px, 0.8vw, 6px) clamp(8px, 1.2vw, 12px)',
    borderRadius: '4px',
    fontSize: 'clamp(12px, 1.3vw, 13px)',
    fontWeight: 500,
  },

  // Process
  processSteps: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 'clamp(16px, 2vw, 24px)',
    width: '100%',
  },
  processStep: {
    textAlign: 'center' as const,
    padding: 'clamp(20px, 2.5vw, 24px)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    width: '100%',
  },
  stepNumber: {
    fontSize: 'clamp(32px, 4vw, 40px)',
    fontWeight: 700,
    color: 'rgba(255, 255, 255, 0.15)',
    marginBottom: 'clamp(12px, 1.5vw, 16px)',
  },
  stepTitle: {
    fontSize: 'clamp(16px, 2vw, 18px)',
    fontWeight: 600,
    margin: '0 0 clamp(8px, 1vw, 12px) 0',
    color: 'white',
  },
  stepDescription: {
    fontSize: 'clamp(14px, 1.8vw, 15px)',
    color: '#d1d5db',
    lineHeight: 1.6,
  },

  // About
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 'clamp(30px, 5vw, 60px)',
    alignItems: 'start',
    width: '100%',
  },
  aboutDescription: {
    fontSize: 'clamp(16px, 2vw, 18px)',
    lineHeight: 1.7,
    color: '#4b5563',
    marginBottom: 'clamp(30px, 4vw, 40px)',
  },
  aboutPoints: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'clamp(20px, 2.5vw, 24px)',
  },
  aboutPoint: {
    display: 'flex',
    gap: 'clamp(12px, 2vw, 16px)',
    alignItems: 'flex-start',
  },
  pointIcon: {
    backgroundColor: 'rgba(30, 64, 175, 0.1)',
    color: '#1e40af',
    width: 'clamp(36px, 4vw, 40px)',
    height: 'clamp(36px, 4vw, 40px)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    fontSize: 'clamp(16px, 2vw, 18px)',
    flexShrink: 0,
  },
  pointTitle: {
    fontSize: 'clamp(15px, 2vw, 17px)',
    fontWeight: 600,
    color: '#111827',
    marginBottom: '4px',
  },
  pointDesc: {
    fontSize: 'clamp(13px, 1.5vw, 14px)',
    color: '#6b7280',
    lineHeight: 1.5,
  },
  aboutCard: {
    backgroundColor: '#f3f4f6',
    padding: 'clamp(24px, 3vw, 32px)',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    width: '100%',
  },
  aboutCardTitle: {
    fontSize: 'clamp(18px, 2.5vw, 22px)',
    fontWeight: 700,
    color: '#111827',
    marginBottom: 'clamp(16px, 2vw, 20px)',
    paddingBottom: 'clamp(10px, 1.5vw, 12px)',
    borderBottom: '2px solid #1e40af',
  },
  aboutList: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  aboutListItem: {
    fontSize: 'clamp(14px, 1.8vw, 15px)',
    color: '#4b5563',
    padding: 'clamp(10px, 1.5vw, 12px) 0',
    borderBottom: '1px solid #e5e7eb',
    lineHeight: 1.5,
  },

  // Contact
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 'clamp(30px, 5vw, 60px)',
    width: '100%',
  },
  contactDescription: {
    fontSize: 'clamp(16px, 2vw, 18px)',
    lineHeight: 1.7,
    color: '#d1d5db',
    marginBottom: 'clamp(30px, 4vw, 40px)',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'clamp(20px, 2.5vw, 24px)',
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'clamp(6px, 1vw, 8px)',
  },
  contactLabel: {
    fontSize: 'clamp(12px, 1.3vw, 13px)',
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 600,
  },
  contactValue: {
    fontSize: 'clamp(15px, 2vw, 17px)',
    fontWeight: 600,
    color: 'white',
  },
  contactForm: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 'clamp(24px, 3vw, 32px)',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    width: '100%',
  },
  formInput: {
    width: '100%',
    padding: 'clamp(12px, 2vw, 14px)',
    marginBottom: 'clamp(12px, 2vw, 16px)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '6px',
    color: 'white',
    fontSize: 'clamp(14px, 1.8vw, 15px)',
    outline: 'none',
    boxSizing: 'border-box' as const,
  },
  formSelect: {
    width: '100%',
    padding: 'clamp(12px, 2vw, 14px)',
    marginBottom: 'clamp(12px, 2vw, 16px)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '6px',
    color: 'white',
    fontSize: 'clamp(14px, 1.8vw, 15px)',
    outline: 'none',
    boxSizing: 'border-box' as const,
  },
  formTextarea: {
    width: '100%',
    padding: 'clamp(12px, 2vw, 14px)',
    marginBottom: 'clamp(20px, 2.5vw, 24px)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '6px',
    color: 'white',
    fontSize: 'clamp(14px, 1.8vw, 15px)',
    minHeight: 'clamp(100px, 15vw, 120px)',
    resize: 'vertical' as const,
    outline: 'none',
    fontFamily: 'inherit',
    boxSizing: 'border-box' as const,
  },
  submitButton: {
    width: '100%',
    padding: 'clamp(12px, 2vw, 14px)',
    backgroundColor: '#1e40af',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: 'clamp(14px, 1.8vw, 15px)',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },

  // Footer
  footer: {
    backgroundColor: '#0f172a',
    color: 'white',
    padding: 'clamp(40px, 6vw, 60px) 20px',
    borderTop: '1px solid #1e293b',
    width: '100%',
    boxSizing: 'border-box',
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  footerMain: {
    marginBottom: 'clamp(30px, 4vw, 40px)',
  },
  footerLogo: {
    fontSize: 'clamp(22px, 3vw, 26px)',
    fontWeight: 700,
    color: 'transparent',
    backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    marginBottom: 'clamp(12px, 2vw, 16px)',
  },
  footerTagline: {
    fontSize: 'clamp(14px, 1.8vw, 16px)',
    color: '#cbd5e1',
    maxWidth: '500px',
    lineHeight: 1.6,
  },
  footerLinks: {
    display: 'flex',
    gap: 'clamp(20px, 3vw, 28px)',
    marginBottom: 'clamp(30px, 4vw, 40px)',
    flexWrap: 'wrap',
  },
  footerLink: {
    color: '#94a3b8',
    fontSize: 'clamp(14px, 1.8vw, 15px)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  footerBottom: {
    paddingTop: 'clamp(30px, 4vw, 40px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'clamp(12px, 2vw, 16px)',
    color: '#94a3b8',
    fontSize: 'clamp(13px, 1.5vw, 14px)',
  },
  footerNote: {
    color: '#64748b',
    fontStyle: 'italic',
  },
};

// Add media queries for larger screens
Object.assign(styles, {
  '@media (min-width: 768px)': {
    hero: { gridTemplateColumns: '1fr 1fr' } as React.CSSProperties,
    servicesGrid: { gridTemplateColumns: 'repeat(2, 1fr)' } as React.CSSProperties,
    aboutGrid: { gridTemplateColumns: '1fr 1fr' } as React.CSSProperties,
    contactGrid: { gridTemplateColumns: '1fr 1fr' } as React.CSSProperties,
    footerBottom: { 
      flexDirection: 'row' as const, 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    } as React.CSSProperties,
  } as React.CSSProperties,
  '@media (min-width: 640px)': {
    processSteps: { gridTemplateColumns: 'repeat(2, 1fr)' } as React.CSSProperties,
  } as React.CSSProperties,
  '@media (min-width: 1024px)': {
    processSteps: { gridTemplateColumns: 'repeat(4, 1fr)' } as React.CSSProperties,
  } as React.CSSProperties,
});