/**
 * Sorts an array of bookmarks in reverse chronological order (newest first)
 * @param {Array<Object>} bookmarks - Array of bookmark objects with createdAt property
 * @returns {Array<Object>} - Sorted array of bookmarks (does not mutate original)
 */
export function sortBookmarksByTimestamp(bookmarks) {
  return [...bookmarks].sort((a, b) => b.createdAt - a.createdAt);
}
