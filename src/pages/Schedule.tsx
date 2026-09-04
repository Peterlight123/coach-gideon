import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { scheduleRows, siteInfo } from "../content/siteContent";

export default function Schedule() {
  usePageMeta("Schedule | Coach Gideon Basketball", "View available training windows and book your session.");

  const whatsappHref = `https://wa.me/${siteInfo.whatsappNumber}`;

  return (
    <div>
      <section className="page-header text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Training Schedule</h1>
          <p className="lead max-w-2xl mx-auto mb-0">View available training windows and secure your session.</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-5">
          <div className="row gy-5">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-3 mb-4">
                <i className="bi bi-calendar3 fs-2 text-orange" />
                <h2 className="fw-bold mb-0">Weekly Availability</h2>
              </div>

              <div className="card border-0 shadow-sm overflow-hidden mb-5">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="table-dark section-bg-dark">
                      <tr>
                        <th className="py-3 px-4">Day</th>
                        <th className="py-3 px-4">Available Times</th>
                        <th className="py-3 px-4">Session Types</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scheduleRows.map((row) => (
                        <tr key={row.day}>
                          <td className={`py-4 px-4 fw-bold ${row.available ? "text-dark" : "text-muted"}`}>
                            {row.day}
                          </td>
                          {row.available ? (
                            <>
                              <td className="py-4 px-4 text-muted">{row.times}</td>
                              <td className="py-4 px-4 text-muted">{row.sessionTypes}</td>
                            </>
                          ) : (
                            <td className="py-4 px-4 text-muted" colSpan={2}>
                              <span className={`badge ${row.note === "special" ? "bg-light text-dark border" : "bg-secondary"}`}>
                                {row.times}
                              </span>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="alert alert-custom d-flex gap-3 align-items-start rounded-3 p-4">
                <i className="bi bi-exclamation-circle fs-4 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="fw-bold mb-1">Important Note on Sessions</h5>
                  <p className="mb-0">
                    All standard sessions have a strict <strong>2-hour maximum duration</strong> to ensure quality of
                    reps and prevent overtraining. Timeslots fill up quickly, so advance booking is highly
                    recommended.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm p-4 sticky-top" style={{ top: "2rem" }}>
                <h4 className="fw-bold mb-4">Book Your Slot</h4>
                <div className="mb-4">
                  <div className="d-flex align-items-center gap-2 mb-2 text-muted">
                    <i className="bi bi-clock" />
                    <span className="fw-semibold">Duration:</span> Up to 2 hours
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted">
                    <i className="bi bi-geo-alt" />
                    <span className="fw-semibold">Location:</span> {siteInfo.city}
                  </div>
                </div>
                <hr className="my-4 text-muted" />
                <p className="text-muted mb-4 small">
                  To book a session, please reach out directly via WhatsApp or our contact form to confirm time slot
                  availability.
                </p>
                <div className="d-grid gap-3">
                  <Link to="/contact" className="btn btn-orange py-3 fw-bold">
                    Request Booking via Form
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark py-3 fw-bold"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
