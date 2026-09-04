import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page Not Found | Coach Gideon Basketball");

  return (
    <div className="min-vh-50 d-flex align-items-center justify-content-center py-5">
      <div className="text-center">
        <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
          <i className="bi bi-exclamation-circle text-danger fs-2" />
          <h1 className="fw-bold mb-0">404</h1>
        </div>
        <p className="text-muted mb-4">This page doesn't exist, or has moved.</p>
        <Link to="/" className="btn btn-orange fw-bold px-4">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
