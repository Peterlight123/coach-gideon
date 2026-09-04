import { useState } from "react";
import { usePageMeta } from "../hooks/usePageMeta";
import { getImage } from "../content/images";
import { galleryImages, galleryCategories } from "../content/siteContent";

export default function Gallery() {
  usePageMeta("Gallery | Coach Gideon Basketball", "Photos from training sessions, matches, and success stories.");

  const [activeCategory, setActiveCategory] = useState<(typeof galleryCategories)[number]>("All");

  const visibleImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      <section className="page-header text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Media Gallery</h1>
          <p className="lead max-w-2xl mx-auto mb-0">A look into the process, the grind, and the results.</p>
        </div>
      </section>

      <section className="py-5 section-bg-light">
        <div className="container py-4">
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 gallery-filter">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`btn rounded-pill px-4 fw-semibold ${
                  activeCategory === category ? "active" : "btn-outline-dark"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="row gy-4">
            {visibleImages.map((item) => (
              <div className="col-sm-6 col-lg-4" key={item.id}>
                <div className="card border-0 shadow-sm h-100 overflow-hidden">
                  <img src={getImage(item.image)} alt={item.title} className="gallery-img" />
                  <div className="card-body p-3">
                    <span className="badge mb-2" style={{ backgroundColor: "var(--orange-bg)", color: "var(--orange)" }}>
                      {item.category}
                    </span>
                    <p className="text-muted small mb-0 fw-medium">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleImages.length === 0 && (
            <p className="text-center text-muted mt-5 mb-0">No images in this category yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
