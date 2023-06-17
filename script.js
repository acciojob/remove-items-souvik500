function removeSelectedOption() {
  // Get the dropdown list element
  const colorSelect = document.getElementById('colorSelect');

  // Remove the selected option from the dropdown list
  colorSelect.remove(colorSelect.selectedIndex);
}