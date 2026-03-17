import { social } from "../data/social";
import PixelPanel from "./ui/PixelPanel";
import { useInView } from "../hooks/useInView";

export default function Contact() {
  const { ref, isInView } = useInView();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Mockup: no submission to server
  }

  return (
    <section id="contact">
      <div
        ref={ref}
        className={`fade-in-up${isInView ? " is-visible" : ""}`}
      >
        <h2>Contact</h2>
        <div className="contact-content">
        <div className="contact-links">
          <a
            href={social.github}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={social.linkedin}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href={social.email} className="contact-link">
            Email
          </a>
          {social.phone && (
            <a href={`tel:${social.phone}`} className="contact-link">
              Phone
            </a>
          )}
        </div>
        <PixelPanel className="contact-form-wrapper">
          <h3>Send me a message</h3>
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              className="contact-input"
              autoComplete="name"
            />
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              className="contact-input"
              autoComplete="email"
            />
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              className="contact-input contact-textarea"
              rows={4}
            />
            <button type="submit" className="pixel-btn pixel-btn--primary">
              Send
            </button>
          </form>
        </PixelPanel>
      </div>
      </div>
    </section>
  );
}
