import { GithubIconPixelated, LinkedinIconPixelated } from "@/icons";
import Github from "../../components/github";
import Linkedin from "../../components/linkedin";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <div className="contact">
        <h4>
          Interested in freelance web design or development services?
          Reach out — I’d love to hear about your project.
        </h4>
        <div className="socials">
          <a href="https://www.linkedin.com/in/erin-ballinger/" target="_blank">
            <Linkedin
              style={{
                color: "var(--primary-color)",
              }}
            />{" "}
            <p>LinkedIn</p>
          </a>
          <span>|</span>
          <a href="https://github.com/ApolloCadet" target="_blank">
            <Github
              style={{
                color: "var(--primary-color)",
              }}
            />{" "}
            <p>Github</p>
          </a>
        </div>
        <form
          target="_blank"
          action="https://formsubmit.co/3ce6dbeb9134a143121be25cc9e08bf1"
          method="POST">
          <input type="hidden" name="_url" value="https://erinballinger.com" />
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Full Name"
            required
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email Address"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            rows={10}
            required></textarea>
          <button type="submit" className="btn">
            Submit Form
          </button>
        </form>
      </div>
    </>
  );
}
