const slides = document.querySelectorAll('.slide');

setInterval(() => {
  const activeSlide = document.querySelector('.slide.active');
  activeSlide.classList.remove('active');

  let nextSlide = activeSlide.nextElementSibling;
  if (!nextSlide) {
    nextSlide = slides[0];
  }
  
  nextSlide.classList.add('active');
}, 3000);
