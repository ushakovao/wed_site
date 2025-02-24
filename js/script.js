// Countdown Timer Functionality
(function() {
  const daysSpan = document.getElementById('days');
  const hoursSpan = document.getElementById('hours');
  const minutesSpan = document.getElementById('minutes');
  const secondsSpan = document.getElementById('seconds');

  const weddingDate = new Date('2025-09-06T14:00:00');

  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;
    if(diff <= 0) {
      document.getElementById('countdown').innerHTML = "It's time!";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysSpan.textContent = days;
    hoursSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-In on Scroll Using Intersection Observer
const faders = document.querySelectorAll('.content');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.animation = "fadeIn 1s ease-out forwards";
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Hover Sound Effects
const hoverSound = new Audio('hover-sound.mp3');
document.querySelectorAll('a, button, .half').forEach(el => {
  el.addEventListener('mouseover', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});
