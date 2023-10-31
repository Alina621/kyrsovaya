// Активация слайдера
const sliders = document.querySelectorAll('.slider');
sliders.forEach(slider => {
  const prevButton = slider.closest('.album').querySelector('.prev-button');
  const nextButton = slider.closest('.album').querySelector('.next-button');

  prevButton.addEventListener('click', () => {
    slider.scrollBy({
      left: -100,
      behavior: 'smooth'
    });
  });

  nextButton.addEventListener('click', () => {
    slider.scrollBy({
      left: 100,
      behavior: 'smooth'
    });
  });
});

