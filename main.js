const e = document.getElementById('email');
const p = document.getElementById('password');
const inputs = document.querySelectorAll('form input');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

e.addEventListener('input', function(event) {
  if (e.value.match(emailRegex) == null) {
    e.dataset.valid = 'false';
  } else {
    e.dataset.valid = 'true';
  }
})

p.addEventListener('input', function(event) {
  if (p.value.length < 8) {
    p.dataset.valid = 'false';
  } else {
    p.dataset.valid = 'true';
  }
})

for (var i = 0; i < inputs.length; i++) {
  const el = inputs[i];
  el.addEventListener('input', function(event) {
    if (el.value == ''){
    el.dataset.valid = 'false';
  } else {
    el.dataset.valid = 'true';
  }
  })}