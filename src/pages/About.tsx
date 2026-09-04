import { usePageMeta } from "../hooks/usePageMeta";
import { getImage } from "../content/images";
import { bio, philosophyPillars, certifications, achievements, siteInfo } from "../content/siteContent";

export default function About() {
  usePageMeta(
    "About | Coach Gideon Basketball",
    `Learn about ${siteInfo.fullName}, private basketball skills coach in ${siteInfo.city}.`
  );

  return (
    <div>
      <section className="page-header text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">About Coach Gideon</h1>
          <p className="lead max-w-2xl mx-auto mb-0">
            Dedicated to developing complete basketball players through elite fundamental training.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-5">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-5">
              <div className="portrait-frame shadow-sm">
                <img src={getImage("coach-portrait.jpg")} alt={siteInfo.fullName} />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <h2 className="fw-bold mb-4">{siteInfo.fullName}</h2>
              <h4 className="text-uppercase mb-4 fw-bold text-orange" style={{ fontSize: "1.1rem", letterSpacing: "1px" }}>
                {siteInfo.role}
              </h4>
              <div className="d-flex flex-column gap-3 text-muted" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                {bio.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 section-bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Coaching Philosophy</h2>
            <p className="text-muted lead max-w-2xl mx-auto">The core pillars that drive every training session.</p>
          </div>
          <div className="row gy-4">
            {philosophyPillars.map((pillar) => (
              <div className="col-md-6 col-lg-3" key={pillar.title}>
                <div className="card card-service text-center p-4">
                  <div className="icon-circle icon-circle-lg mx-auto mb-4">
                    <i className="bi bi-bullseye" />
                  </div>
                  <h5 className="fw-bold mb-3">{pillar.title}</h5>
                  <p className="text-muted mb-0">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-5">
          <div className="row gy-5">
            <div className="col-md-6">
              <h3 className="fw-bold mb-4 d-flex align-items-center gap-3">
                <i className="bi bi-award-fill text-orange" />
                Certifications
              </h3>
              <ul className="list-group list-group-flush rounded-3 shadow-sm border-0">
                {certifications.map((cert) => (
                  <li className="list-group-item p-4 text-muted" key={cert.title}>
                    <span className="fw-bold text-dark d-block mb-1">{cert.title}</span>
                    {cert.detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-6">
              <h3 className="fw-bold mb-4 d-flex align-items-center gap-3">
                <i className="bi bi-trophy-fill text-orange" />
                Achievements &amp; Medals
              </h3>
              <ul className="list-group list-group-flush rounded-3 shadow-sm border-0 mb-4">
                {achievements.map((item) => (
                  <li className="list-group-item p-4 text-muted" key={item.title}>
                    <span className="fw-bold text-dark d-block mb-1">{item.title}</span>
                    {item.detail}
                  </li>
                ))}
              </ul>
              <div className="rounded-3 overflow-hidden shadow-sm">
                <img
                  src={getImage("medals.jpg")}
                  alt="Medals won by Coach Gideon's athletes"
                  className="w-100"
                  style={{ maxHeight: "420px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
