const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if(window.innerWidth <= 900){
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
});

document.querySelectorAll('.dropdown > a').forEach(dropdownToggle => {
  dropdownToggle.addEventListener('click', function(e) {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle('open');
      document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== parent) d.classList.remove('open');
      });
    }
  });
});
