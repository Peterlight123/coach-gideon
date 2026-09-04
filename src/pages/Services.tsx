import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { getImage } from "../content/images";
import { services } from "../content/siteContent";

export default function Services() {
  usePageMeta(
    "Services & Pricing | Coach Gideon Basketball",
    "Comprehensive basketball skill development programs — one-on-one coaching, group training, shooting, conditioning and more."
  );

  return (
    <div>
      <section className="page-header text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Training Services</h1>
          <p className="lead max-w-2xl mx-auto mb-0">
            Comprehensive skill development programs tailored to elevate every aspect of your game.
          </p>
        </div>
      </section>

      <section className="py-5 section-bg-light">
        <div className="container py-5">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Select Your Program</h2>
              <p className="text-muted lead">
                From targeted one-on-one sessions to competitive group environments, find the right fit for your
                goals.
              </p>
            </div>
          </div>

          <div className="row gy-4">
            {services.map((service) => (
              <div className="col-lg-4 col-md-6" key={service.id}>
                <div className="card card-service h-100 overflow-hidden">
                  <img src={getImage(service.image)} alt={service.title} className="card-photo" />
                  <div className="card-body p-4 pb-2">
                    <h4 className="fw-bold mb-2">{service.title}</h4>
                    <h3 className="fw-bold mb-0 text-orange">{service.price}</h3>
                    <span className="text-muted small">per session</span>
                  </div>
                  <div className="card-body p-4 pt-2">
                    <p className="text-muted mb-4">{service.desc}</p>
                    <h6 className="fw-bold text-dark mb-3">Focus Areas:</h6>
                    <ul className="list-unstyled mb-4 d-flex flex-column gap-2">
                      {service.features.map((feature) => (
                        <li className="d-flex align-items-start gap-2 text-muted" key={feature}>
                          <i className="bi bi-check-circle-fill text-orange mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-footer bg-white border-0 px-4 pb-4 pt-0">
                    <Link to="/contact" className="btn btn-outline-dark w-100 fw-bold">
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <div className="card border-0 shadow-sm text-white text-center p-5 section-bg-dark">
                <h3 className="fw-bold mb-3">Need a Custom Program?</h3>
                <p className="lead opacity-75 mb-4 max-w-2xl mx-auto">
                  Looking for team clinics, academy consultations, or intensive pre-season bootcamps? We build custom
                  curricula for larger groups.
                </p>
                <div>
                  <Link to="/contact" className="btn btn-orange btn-lg px-5 fw-bold">
                    Contact For Custom Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
