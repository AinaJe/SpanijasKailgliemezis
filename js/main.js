document.querySelectorAll('.slider-container').forEach(slider => {
  const slides = slider.querySelectorAll('.slide');
  const prevBtn = slider.querySelector('.prev-slide');
  const nextBtn = slider.querySelector('.next-slide');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Pieslēdz pogu klikšķus
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
    });

    nextBtn.addEventListener('click', () => {
      nextSlide();
    });
  }

  // Automātiskā pārslēgšanās
  showSlide(currentIndex);
  setInterval(nextSlide, 4000);
});