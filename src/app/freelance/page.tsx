import Link from "next/link";
import Github from "../../components/github";
import Linkedin from "../../components/linkedin";

export default function Contact() {
  return (
    <>
      <h1>Freelance</h1>
      <p>I build modern, fast, and reliable web experiences for businesses, creators, and organizations. Whether you need a full website, a custom feature, or technical guidance, I help turn ideas into functional, scalable products.</p>

      <h2><strong>About My Work</strong></h2>
      <p>I approach every project with a focus on clarity, performance, and long-term maintainability. My goal isn’t just to deliver something that works today, but to build solutions that continue to function reliably as your needs evolve. I pay attention to structure, scalability, and user experience from the start so that your website or application can grow without needing to be rebuilt later.</p>

      <p>I work with individuals, startups, and organizations who want thoughtful development rather than quick, disposable builds. Whether you already have a clear plan or are still shaping your idea, I can help translate your goals into a technical solution that makes sense.</p>

      <h2><strong>Development Philosophy</strong></h2>
      <p>Good software should feel simple to use and easy to maintain, even if what’s happening behind the scenes is complex. I prioritize clean architecture, readable code, and efficient systems so that your project remains understandable and adaptable long after launch. This also makes future updates, feature additions, or team handoffs much smoother.</p>

      <p>I also believe communication is part of development. You’ll always know what stage your project is in, what decisions are being made, and why they matter. Clear expectations lead to better results for both sides.</p>

      <h2><strong>Flexible Project Approach</strong></h2>
      <p>Not every project starts with a fully defined scope, and that’s completely normal. Some clients come in with detailed specifications, while others have an idea and need help shaping it into something tangible. I’m comfortable working in both situations and can adapt the process to match your level of clarity and technical familiarity.</p>

      <p>For clearly defined builds, we can map out deliverables and timelines from the start. For exploratory or evolving projects, we can begin with discovery, research, or consulting and refine the direction as we go. The goal is always to match the development approach to what actually serves your project best.</p>

      <p style={{ marginBottom: 3, textDecoration: "underline" }}>Some common project types I have worked on before include:</p>
      <ul style={{ marginLeft: 20 }}>
        <li>Informational or business websites</li>
        <li>Portfolio or professional sites</li>
        <li>Custom platforms and dashboards</li>
        <li>SaaS-style applications</li>
        <li>Experimental or emerging-tech projects</li>
        <li>Don't see your project here? No problem! Reach out and we can discuss your needs.</li>
      </ul>

      <hr />
      <h2><strong>Services Offered</strong></h2>
      <li>Custom website development (static or dynamic)</li>
      <li>Web app and dashboard builds</li>
      <li>UI/UX implementation from mockups or wireframes</li>
      <li>Performance optimization and accessibility improvements</li>
      <li>Database design and backend architecture</li>
      <li>API development and integrations</li>
      <li>Authentication systems and secure user flows</li>
      <li>Analytics and event tracking setup</li>
      <li>Debugging, audits, and code cleanup</li>
      <li>Deployment and cloud configuration</li>
      <li>Ongoing maintenance and technical support</li>
      <li>MVP and prototype builds</li>
      <li>Interactive or real-time features</li>

      <hr />
      <h2><strong>How Engagements Work</strong></h2>
      <p>Projects can be structured based on what best fits your needs:</p>
      <li>Short-term consulting or technical problem solving</li>
      <li>Clearly defined builds with scoped deliverables</li>
      <li>Ongoing development or support</li>
      <p>Every project begins with understanding your goals, requirements, and timeline so we can choose the right approach.</p>

      <hr />

      <h2><strong>Lets Work Together <span style={{ position: "relative", letterSpacing: -5 }}>:)</span></strong></h2>
      <p>If you’re interested in working together or want to discuss your project idea, please reach out through the <Link href="/contact">contact</Link> page. I’ll review your message and get back to you to talk through details, scope, and next steps.</p>
    </>
  );
}
