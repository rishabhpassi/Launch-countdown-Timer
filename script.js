
const today = new Date();

// Calculate the end date as 8 days after today's date
const endDate = new Date();
endDate.setDate(today.getDate() + 8);


function updateTimer() {
  const now = new Date(); // get the current date and time
  const remainingTime = endDate.getTime() - now.getTime(); // calculate the remaining time in milliseconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)); // calculate the number of days
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // calculate the number of hours
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)); // calculate the number of minutes
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000); // calculate the number of seconds

  // update the HTML with the remaining time
  document.querySelector('.day').textContent = days.toString().padStart(2, '0');
  document.querySelector('.hour').textContent = hours.toString().padStart(2, '0');
  document.querySelector('.min').textContent = minutes.toString().padStart(2, '0');
  document.querySelector('.sec').textContent = seconds.toString().padStart(2, '0');
}

// update the timer every second
setInterval(updateTimer, 1000);



