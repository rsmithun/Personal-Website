
  function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const toggleButton = document.getElementById('toggleButton');
    if (document.body.classList.contains('dark-mode')) {
      toggleButton.textContent = 'Light Mode';
    } else {
      toggleButton.textContent = 'Dark Mode';
    }
  }
