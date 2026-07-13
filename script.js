// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Basic contact form handling (front-end only placeholder)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Please fill in all fields.';
    return;
  }

  // This is a placeholder. To actually receive messages, connect this form
  // to a service like Formspree, Getform, or Netlify Forms (free tiers available).
  status.textContent = `Thanks, ${name}! Your message has been noted (connect a form service to actually receive it).`;
  form.reset();
});
