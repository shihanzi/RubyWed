// Set the wedding date
const weddingDate = new Date('June 16, 2024 18:00:00').getTime();

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
    <div class="countdown-item"><span>${days}</span> Days</div>
    <div class="countdown-item"><span>${hours}</span> Hours</div>
    <div class="countdown-item"><span>${minutes}</span> Minutes</div>
    <div class="countdown-item"><span>${seconds}</span> Seconds</div>
    `;

    document.querySelectorAll('.countdown-item').forEach(item => {
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.marginRight = '10px'; // Adjust margin as needed
    });

    // If the wedding date has passed, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'The wedding has already happened!';
    }
}, 1000);
