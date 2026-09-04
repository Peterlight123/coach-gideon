import { useState } from "react";
import { usePageMeta } from "../hooks/usePageMeta";
import { blogPosts, siteInfo } from "../content/siteContent";

export default function Blog() {
  usePageMeta(
    "Blog | Coach Gideon Basketball",
    "Insights, breakdowns, and tips from Coach Gideon on player development."
  );

  const [visibleCount, setVisibleCount] = useState(3);
  const visiblePosts = blogPosts.slice(0, visibleCount);
  const hasMore = visibleCount < blogPosts.length;

  return (
    <div>
      <section className="page-header text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Court Notes</h1>
          <p className="lead max-w-2xl mx-auto mb-0">
            Insights, breakdowns, and tips from Coach Gideon on player development.
          </p>
        </div>
      </section>

      <section className="py-5 section-bg-light">
        <div className="container py-5">
          <div className="row gy-5">
            {visiblePosts.map((post) => (
              <div className="col-lg-4 col-md-6" key={post.id}>
                <div className="card card-service h-100 overflow-hidden d-flex flex-column">
                  <div className="section-bg-dark position-relative" style={{ height: "220px" }}>
                    <div className="position-absolute top-0 start-0 m-3">
                      <span className="badge bg-orange px-3 py-2 fw-semibold">{post.category}</span>
                    </div>
                  </div>
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex align-items-center gap-3 text-muted small mb-3">
                      <span className="d-flex align-items-center gap-1">
                        <i className="bi bi-calendar3" /> {post.date}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <i className="bi bi-person" /> {siteInfo.brandName}
                      </span>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ lineHeight: "1.4" }}>
                      {post.title}
                    </h4>
                    <p className="text-muted mb-4">{post.excerpt}</p>
                    {/* TODO: link to the full article once real blog posts are written */}
                    <div className="mt-auto pt-3 border-top">
                      <a href="#" className="text-decoration-none fw-bold d-flex align-items-center gap-2 text-orange">
                        Read Full Article <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="mt-5 text-center">
              <button
                className="btn btn-outline-dark fw-bold px-4 py-2"
                onClick={() => setVisibleCount((count) => count + 3)}
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
