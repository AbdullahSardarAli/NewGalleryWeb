
// Hamburger toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navbarRight = document.getElementById('navbarRight');

hamburgerBtn.addEventListener('click', () => {
  navbarRight.classList.toggle('open');
  hamburgerBtn.classList.toggle('open');
});

const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
const totalSlides = slides.length;

function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
});

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
});






// city section
const cityMainImage = document.getElementById('mainCityImage');
const cityThumbs = document.querySelectorAll('.city-thumb');

cityThumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const largeSrc = thumb.getAttribute('data-large');
    cityMainImage.style.opacity = 0;
    setTimeout(() => {
      cityMainImage.src = largeSrc;
      cityMainImage.style.opacity = 1;
    }, 250);

    cityThumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});


// nature

const natureMainImage = document.getElementById('mainNatureImage');
const natureThumbs = document.querySelectorAll('.nature-thumb');

natureThumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const largeSrc = thumb.getAttribute('data-large');
    natureMainImage.style.opacity = 0;
    setTimeout(() => {
      natureMainImage.src = largeSrc;
      natureMainImage.style.opacity = 1;
    }, 250);

    natureThumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('mainAnimalImage');
  const thumbs = document.querySelectorAll('.animal-thumb');
  const sidebar = document.getElementById('animalSidebar');
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');

  // Change main image on thumbnail click
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const largeSrc = thumb.dataset.large;
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.src = largeSrc;
        mainImage.style.opacity = 1;
      }, 250);

      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // Scroll sidebar left/right on arrow hover
  let scrollInterval;

  function startScrollLeft() {
    scrollInterval = setInterval(() => {
      sidebar.scrollBy({ left: -10, behavior: 'smooth' });
    }, 40);
  }

  function startScrollRight() {
    scrollInterval = setInterval(() => {
      sidebar.scrollBy({ left: 10, behavior: 'smooth' });
    }, 40);
  }

  function stopScroll() {
    clearInterval(scrollInterval);
  }

  leftBtn.addEventListener('mouseenter', startScrollLeft);
  leftBtn.addEventListener('mouseleave', stopScroll);
  rightBtn.addEventListener('mouseenter', startScrollRight);
  rightBtn.addEventListener('mouseleave', stopScroll);
});


// 3D image slidng


const swiper = new Swiper('.swiper-container', {
  effect: 'cube',
  grabCursor: true,
  speed: 1000,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
});


document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.kenburns-slide');
  let current = 0;
  const total = slides.length;
  const intervalTime = 15000; // matches animation duration

  function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % total;
    slides[current].classList.add('active');
  }

  setInterval(nextSlide, intervalTime);
});
