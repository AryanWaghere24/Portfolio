import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* CURRENT */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Student</h4>
                <h5>BSc Cyber Security</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Focused on building a strong foundation in cyber security with
              hands-on practice in networking, system security, and ethical
              hacking. Actively learning Linux, web security, and penetration
              testing concepts.
            </p>
          </div>

          {/* PROJECTS */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Personal Projects</h4>
                <h5>Hands-on Development</h5>
              </div>
              <h3>2025–Present</h3>
            </div>
            <p>
              Developed security-focused tools like a Network Port Scanner
              (CyberEye) and a Password Strength Analyzer & Generator
              (EntropyForge). These projects helped in understanding real-world
              vulnerabilities and secure coding practices.
            </p>
          </div>

          {/* LEARNING */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Training</h4>
                <h5>Self Learning & Platforms</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Practicing on platforms like TryHackMe and Hack The Box to gain
              practical exposure in penetration testing, reconnaissance, and
              exploitation techniques. Exploring tools like Nmap, Burp Suite,
              and Metasploit.
            </p>
          </div>

          {/* GOAL */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Career Goal</h4>
                <h5>Red Teaming</h5>
              </div>
              <h3>Future</h3>
            </div>
            <p>
              Aspiring to become a Red Team specialist by mastering offensive
              security techniques, real-world attack simulations, and advanced
              exploitation methodologies.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;