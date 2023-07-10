import { useEffect } from "react";

/**
 * useDocumentTitle - hook
 *
 * @param {string} titleText - text to show on title
 *                             of the page
 */
const useDocumentTitle = (titleText) => {
  useEffect(() => {
    document.title = `${titleText} | Open Voices`;
  }, [titleText]);
};

export { useDocumentTitle };
