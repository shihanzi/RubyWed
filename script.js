// Set the wedding date
const weddingDate = new Date('June 16, 2024 11:19:00').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining until the wedding date
    const distance = weddingDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('countdown').innerHTML = `
    <div>${days} Days:</div>
    <div>${hours} Hours:</div>
    <div>${minutes} Minutes:</div>
    <div>${seconds} Seconds</div>
    `;


    // If the wedding date has passed, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'The wedding has already happened!';
    }
}, 1000);

document.getElementById('saveDateButton').addEventListener('click', function() {
    // Create a temporary link element
    var link = document.createElement('a');
    link.href = 'https://karunanrubaniwedding.netlify.app/assets/date.ics'; // Path to your .ics file
    link.target = '_blank'; // Open in a new tab (optional)
    link.click(); // Simulate click on the link
});



let slideIndex = 0;
showSlides(slideIndex);

let slideshowInterval = setInterval(function() {
  moveSlide(1); // Move to the next slide
}, 5000);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-image");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

document.querySelector('.prev').addEventListener('click', function() {
  clearInterval(slideshowInterval);
});
document.querySelector('.next').addEventListener('click', function() {
  clearInterval(slideshowInterval);
});