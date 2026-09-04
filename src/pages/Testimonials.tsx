import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { testimonials } from "../content/siteContent";

export default function Testimonials() {
  usePageMeta(
    "Testimonials | Coach Gideon Basketball",
    "Hear from the athletes, parents, and programs that have experienced the Coach Gideon standard."
  );

  return (
    <div>
      <section className="page-header text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Success Stories</h1>
          <p className="lead max-w-2xl mx-auto mb-0">
            Hear from the athletes, parents, and programs that have experienced the Coach Gideon standard.
          </p>
        </div>
      </section>

      <section className="py-5 section-bg-light">
        <div className="container py-5">
          <div className="row gy-4">
            {testimonials.map((testimonial) => (
              <div className="col-lg-4 col-md-6" key={testimonial.id}>
                <div className="card card-service p-4 position-relative">
                  <i
                    className="bi bi-quote position-absolute fs-1"
                    style={{ top: "1rem", right: "1rem", color: "var(--orange-bg)" }}
                  />
                  <div className="card-body p-0 position-relative d-flex flex-column">
                    <span className="badge align-self-start mb-3 section-bg-dark">{testimonial.category}</span>
                    <p className="text-muted fst-italic mb-4 flex-grow-1" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="d-flex align-items-center gap-3 mt-auto">
                      <div className="rounded-circle bg-secondary" style={{ width: "48px", height: "48px" }} />
                      <div>
                        <h6 className="fw-bold mb-0 text-dark">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-5 text-center border-top">
            <h3 className="fw-bold mb-3 text-dark">Ready to write your own success story?</h3>
            <Link to="/contact" className="btn btn-orange btn-lg px-5 mt-2 fw-bold">
              Start Training Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
