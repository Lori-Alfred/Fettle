const hireclick = document.querySelector(".hire");
hireclick.classList.toggle;

const countdown = document.querySelector(".countdown");

// Set Launch Date (ms)
const launchDate = new Date("Jan 1, 2022 13:00:00").getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now and the launch date (ms)
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
  <div>${days}<span>Days</span></div> 
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = "#17a2b8";
    countdown.innerHTML = "Launched!";
  }
}, 1000);

// PART 2 HAMBURGER

const toggle1 = document.querySelector(".logoName .toggle ");
const navItems1 = document.querySelector(".navItems ");
const lists = document.querySelector(".navItems li ");
const toggleA = document.querySelectorAll(" .plus_e");

toggle1.addEventListener("click", function () {
  navItems1.classList.toggle("open");
});

// PART 3 QUESTIONS AND ANSWERS
