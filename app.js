// CONSTANTS
const interval = 1000; // SETS THE DURATION OF THE COUNTER 

// SELECTORS
const counterUp = document.querySelector('.counter-up');
const counters = document.querySelectorAll('.counter');

// TRIGGERS THIS ONCE THE OBSERVER IS IN VIEWPORT  
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      counters.forEach((counter) => {
        let startValue = 0;  // INITIAL VALUE 
        let endValue = counter.getAttribute('data-target'); // FINAL VALUE 
        let duration = Math.floor(interval / endValue); // DURATION THE COUNTER TO CONTINUE 
        let count = setInterval(() => {
          startValue += 1;
          counter.textContent = startValue;
          if (startValue >= endValue) clearInterval(count); // CLEAR INTERVAL ONCE NUMBER REACHED THE FINAL VALUE 
        }, duration);
      });
    }
  });
});

observer.observe(counterUp)