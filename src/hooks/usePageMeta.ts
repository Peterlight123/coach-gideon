import { useEffect } from "react";

/**
 * Sets the document title and <meta name="description"> for the current
 * page. Keeps per-page SEO copy next to the page component instead of
 * duplicated across static HTML files (a bug in the original site, where
 * every .html file carried its own copy of the same meta tags).
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let metaTag: HTMLMetaElement | null = null;
    let previousDescription: string | null = null;

    if (description) {
      metaTag = document.querySelector('meta[name="description"]');
      if (metaTag) {
        previousDescription = metaTag.getAttribute("content");
        metaTag.setAttribute("content", description);
      }
    }

    return () => {
      document.title = previousTitle;
      if (metaTag && previousDescription !== null) {
        metaTag.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
