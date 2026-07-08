const navItems = document.querySelectorAll('.nav p');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

const sayHelloBtn = document.querySelector('.sayhello-btn');
sayHelloBtn.addEventListener('click', () => {
  window.location.href = 'mailto:isholahabeeb1@outlook.com';
});