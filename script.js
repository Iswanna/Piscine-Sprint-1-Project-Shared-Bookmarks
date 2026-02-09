import { getData } from "./storage.js";

function renderBookmarks(userId) {
    const containerForBookmarks = document.getElementById('bookmarks-container');
    const bookmarksForOneUser = getData(userId);

    if (bookmarksForOneUser === null || bookmarksForOneUser.length === 0) {
        containerForBookmarks.textContent = "No bookmarks found";
    }
}

