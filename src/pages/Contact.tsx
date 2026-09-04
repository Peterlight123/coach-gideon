import { useState, type FormEvent } from "react";
import { usePageMeta } from "../hooks/usePageMeta";
import { siteInfo, socialLinks, formspreeEndpoint } from "../content/siteContent";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  usePageMeta("Contact | Coach Gideon Basketball", "Get in touch to book a session or ask a question.");

  const [status, setStatus] = useState<SubmitState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <section className="page-header text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Get In Touch</h1>
          <p className="lead max-w-2xl mx-auto mb-0">
            Questions about training, pricing, or availability? Send a message below.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-5">
          <div className="row gy-5">
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm p-4 p-md-5">
                <h3 className="fw-bold mb-4">Send a Message</h3>

                {status === "success" ? (
                  <div className="alert alert-custom d-flex align-items-center gap-3 p-4" role="status">
                    <i className="bi bi-check-circle-fill fs-3" />
                    <div>
                      <h5 className="fw-bold mb-1">Message sent!</h5>
                      <p className="mb-0">Thanks for reaching out — Coach Gideon will get back to you shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/*
                      TODO: create a form at https://formspree.io, then replace
                      formspreeEndpoint in /src/content/siteContent.ts with your
                      real form's endpoint URL (looks like
                      https://formspree.io/f/xxxxabcd).
                    */}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label fw-semibold">
                          Full Name
                        </label>
                        <input type="text" className="form-control" id="name" name="name" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-semibold">
                          Email Address
                        </label>
                        <input type="email" className="form-control" id="email" name="email" required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="phone" className="form-label fw-semibold">
                          Phone Number
                        </label>
                        <input type="tel" className="form-control" id="phone" name="phone" />
                      </div>
                      <div className="col-12">
                        <label htmlFor="subject" className="form-label fw-semibold">
                          Subject
                        </label>
                        <select className="form-select" id="subject" name="subject" defaultValue="General Inquiry">
                          <option>General Inquiry</option>
                          <option>Book a Session</option>
                          <option>Pricing Question</option>
                          <option>Team / Group Clinic</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label fw-semibold">
                          Message
                        </label>
                        <textarea className="form-control" id="message" name="message" rows={5} required />
                      </div>
                    </div>

                    {status === "error" && (
                      <div className="alert alert-danger mt-4 mb-0" role="alert">
                        Something went wrong sending your message. Please try again, or email{" "}
                        <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a> directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-orange btn-lg w-100 fw-bold mt-4"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Sending…" : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="col-lg-5">
              <div className="d-flex flex-column gap-4">
                <div className="card border-0 shadow-sm p-4 d-flex flex-row align-items-start gap-3">
                  <div className="icon-circle">
                    <i className="bi bi-envelope" />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Email</h6>
                    <a href={`mailto:${siteInfo.email}`} className="text-muted text-decoration-none">
                      {siteInfo.email}
                    </a>
                  </div>
                </div>

                <div className="card border-0 shadow-sm p-4 d-flex flex-row align-items-start gap-3">
                  <div className="icon-circle">
                    <i className="bi bi-telephone" />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Phone / WhatsApp</h6>
                    <a href={`tel:${siteInfo.phone.replace(/\s+/g, "")}`} className="text-muted text-decoration-none">
                      {siteInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="card border-0 shadow-sm p-4 d-flex flex-row align-items-start gap-3">
                  <div className="icon-circle">
                    <i className="bi bi-geo-alt" />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Training Location</h6>
                    <span className="text-muted">{siteInfo.venue}</span>
                  </div>
                </div>

                <div className="card border-0 shadow-sm p-4">
                  <h6 className="fw-bold mb-3">Follow Along</h6>
                  <div className="d-flex gap-3">
                    <a href={socialLinks.instagram} className="social-btn-light" aria-label="Instagram">
                      <i className="bi bi-instagram fs-5" />
                    </a>
                    <a href={socialLinks.twitter} className="social-btn-light" aria-label="Twitter / X">
                      <i className="bi bi-twitter-x fs-5" />
                    </a>
                    <a href={socialLinks.facebook} className="social-btn-light" aria-label="Facebook">
                      <i className="bi bi-facebook fs-5" />
                    </a>
                    <a href={socialLinks.linkedin} className="social-btn-light" aria-label="LinkedIn">
                      <i className="bi bi-linkedin fs-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
