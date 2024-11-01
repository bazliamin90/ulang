function searchItems() {
    // Get the search input value
    const searchValue = document.getElementById("searchBox").value.toLowerCase();

    // Get all items with class 'item'
    const items = document.querySelectorAll(".item");

    // Loop through each item to check if it matches the search
    items.forEach(item => {
      const text = item.querySelector("a").textContent.toLowerCase();
      
      // Check if the text includes the search term
      if (text.includes(searchValue)) {
        item.closest("li").style.display = ""; // Show the item
      } else {
        item.closest("li").style.display = "none"; // Hide the item
      }
    });
  }