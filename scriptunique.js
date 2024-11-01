function displayUniqueItems() {
  const items = document.querySelectorAll('ol li a');
  const uniqueSet = new Set();

  items.forEach(item => {
    const text = item.textContent;
    const splitText = text.split('◈ ms')[0].trim();
    uniqueSet.add(splitText);
  });

  // Convert the Set to an array, sort it alphabetically
  const sortedUniqueItems = Array.from(uniqueSet).sort();

  const uniqueItemsList = document.getElementById('uniqueItemsList');
  uniqueItemsList.innerHTML = ''; // Clear previous list

  sortedUniqueItems.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    uniqueItemsList.appendChild(li);
  });
}

// Run the function to display unique items on page load
window.onload = displayUniqueItems;
