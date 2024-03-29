document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo');

    photos.forEach(photo => {
        photo.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const largeImageURL = photo.getAttribute('data-large');
            openLightbox(largeImageURL);
        });
    });
});

function openLightbox(imageURL) {
    const lightboxImage = document.getElementById('lightbox-img');
    const lightbox = document.getElementById('lightbox');
    
    lightboxImage.src = imageURL;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    lightboxImage.src = ''; // Clear the source
}