document.querySelector('.list-btn').addEventListener('click', () => {
    document.querySelector('#gadget-modal').style.display = 'flex';
  });
  
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('#gadget-modal').style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === document.querySelector('#gadget-modal')) {
      document.querySelector('#gadget-modal').style.display = 'none';
    }
  });
  
  // Open Sign-Up modal
document.querySelector('.signup-btn').addEventListener('click', () => {
  document.querySelector('#signup-modal').style.display = 'flex';
});

// Close Sign-Up modal
document.querySelector('.close-btn-signup').addEventListener('click', () => {
  document.querySelector('#signup-modal').style.display = 'none';
});

// Submit Sign-Up form
document.querySelector('#signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Registration successful! Welcome to QuickRent.');
  document.querySelector('#signup-modal').style.display = 'none';
});
