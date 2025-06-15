const form = document.getElementById('feedbackForm');
const confirmation = document.getElementById('feedbackConfirmation');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const feedback = {};
  data.forEach((value, key) => {
    if (feedback[key]) {
      feedback[key] = [].concat(feedback[key], value);
    } else {
      feedback[key] = value;
    }
  });
  localStorage.setItem('feedback', JSON.stringify(feedback));
  confirmation.textContent = 'Thank you for your feedback!';
  form.reset();
});
