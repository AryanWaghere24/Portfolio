import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Cybersecurity student with a strong interest in security research and problem solving. I enjoy analyzing systems, understanding how things work, and identifying potential vulnerabilities through logical thinking and curiosity.
          <br /><br />
          I have hands-on experience with platforms like Hack The Box and TryHackMe, and actively participate in CTF challenges. I also work with tools like Nmap, Burp Suite, and Metasploit to explore real-world security concepts.
          <br /><br />
          I have built projects such as CyberEye (a Network Port Scanner) and EntropyForge (a Password Strength Validator and Generator), which reflect my practical approach to learning and applying cybersecurity concepts.
          <br /><br />
          My strengths lie in analytical thinking, research, and a deep curiosity to continuously learn and improve. I aim to build my career in red teaming and offensive security.
        </p>
      </div>
    </div>
  );
};

export default About;