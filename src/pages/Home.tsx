import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { getImage } from "../content/images";
import { heroStats, whyTrainFeatures, featuredPrograms, siteInfo } from "../content/siteContent";

export default function Home() {
  usePageMeta(
    "Home | Coach Gideon Basketball",
    `Private basketball skills coaching by ${siteInfo.fullName} in ${siteInfo.city}.`
  );

  return (
    <div>
      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <h2 className="hero-label mb-2">{siteInfo.fullName}</h2>
              <h1 className="display-3 fw-bold mb-4">
                Private Basketball <br />
                <span className="text-orange">Skills Coach</span>
              </h1>
              <p className="lead mb-5 text-light opacity-75 pe-lg-4" style={{ fontSize: "1.25rem" }}>
                Helping athletes improve shooting, ball handling, defense, conditioning, and basketball IQ. Elevate
                your game to the next level.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/schedule" className="btn btn-orange btn-lg px-4 fw-bold">
                  Book a Session
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-4 fw-bold">
                  Contact Coach
                </Link>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="hero-photo-card shadow-lg">
                <img src={getImage("action-1v1.jpg")} alt={`${siteInfo.fullName} working on ball handling drills`} />
                <div className="hero-badge">
                  <i className="bi bi-award-fill" />
                  <span className="fw-semibold small">Private Skills Coaching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container">
          <div className="row text-center gy-4">
            {heroStats.map((stat) => (
              <div className="col-6 col-md-3" key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why train with me */}
      <section className="py-5 py-lg-5">
        <div className="container py-5">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-6 fw-bold mb-3">Why Train With Me</h2>
              <p className="lead text-muted">
                A disciplined, results-driven approach to basketball development designed for players who want to
                compete at the highest level.
              </p>
            </div>
          </div>
          <div className="row gy-4">
            {whyTrainFeatures.map((feature) => (
              <div className="col-md-6 col-lg-3" key={feature.title}>
                <div className="card card-service">
                  <div className="card-body p-4">
                    <div className="icon-circle mb-3">
                      <i className="bi bi-check-circle-fill" />
                    </div>
                    <h5 className="fw-bold mb-3">{feature.title}</h5>
                    <p className="text-muted mb-0">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured programs */}
      <section className="py-5 section-bg-light">
        <div className="container py-5">
          <div className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-3">
            <div>
              <h2 className="display-6 fw-bold mb-2">Training Programs</h2>
              <p className="text-muted mb-0">Specialized training for every stage of development.</p>
            </div>
            <Link to="/services" className="btn btn-outline-dark d-none d-md-flex align-items-center gap-2 fw-semibold">
              View All Programs <i className="bi bi-arrow-right" />
            </Link>
          </div>

          <div className="row gy-4">
            {featuredPrograms.map((program) => (
              <div className="col-md-4" key={program.title}>
                <div className="card card-service overflow-hidden">
                  <img src={getImage(program.image)} alt={program.title} className="card-photo" />
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-3">{program.title}</h4>
                    <p className="text-muted mb-4">{program.desc}</p>
                    <Link to="/services" className="text-decoration-none fw-bold text-orange">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center d-md-none">
            <Link to="/services" className="btn btn-outline-dark fw-semibold w-100">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center text-white bg-orange">
        <div className="container py-5">
          <h2 className="display-5 fw-bold mb-4">Ready to elevate your game?</h2>
          <p className="lead mb-5 opacity-75 max-w-2xl mx-auto">
            Join the ranks of athletes who have transformed their skills, confidence, and performance under Coach
            Gideon.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/schedule" className="btn btn-light btn-lg px-5 fw-bold text-dark">
              View Schedule
            </Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg px-5 fw-bold">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
