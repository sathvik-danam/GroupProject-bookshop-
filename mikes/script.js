
// script.js
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var query = document.getElementById('searchInput').value;
  // Perform search operation with the query, e.g., send request to server
  console.log('Search query:', query);
});