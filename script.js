
  // Form Validation + Success Message
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  });


  // Light/Dark Theme Toggle
  const toggleBtn = document.getElementById('themeToggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
