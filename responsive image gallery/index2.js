
let currentIndex = 0;
  const images = document.querySelectorAll('.image img');
  const totalImages = images.length;

  function openLightbox(event) {
      if (event.target.tagName === 'IMG') {
          const clickedIndex = Array.from(images).indexOf(event.target);
          currentIndex = clickedIndex;
          updateLightboxImage();
          document.querySelector('.lightbox').style.display = 'flex';
      }
  }

  document
  .querySelector(".lightbox span")
  .addEventListener("click", () => {
    document.querySelector(".lightbox").style.display = "none";
  });


  function changeImage(direction) {
      currentIndex += direction;
      if (currentIndex >= totalImages) {
          currentIndex = 0;
      } else if (currentIndex < 0) {
          currentIndex = totalImages - 1;
      }
      updateLightboxImage();
  }

  function updateLightboxImage() {
      const lightboxImg = document.getElementById('lightbox-img');
      lightboxImg.src = images[currentIndex].src;
  }


  function updateMainImage(index) {
      currentIndex = index;
      updateLightboxImage();
  }

   updateLightboxImage();