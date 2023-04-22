function search() {
  var input = document.querySelector("input[type='text']");
  var searchQuery = input.value;
  
  // Clear any previous search results
  var searchResults = document.getElementById("search-results");
  searchResults.innerHTML = "";
  
  // If search query is not empty
  if (searchQuery !== "") {
    // Create an image element with the source based on search query
    var image = document.createElement("img");
    image.src = "https://source.unsplash.com/300x300/?" + searchQuery;
    
    // Add image to search results div
    searchResults.appendChild(image);
  }
}
