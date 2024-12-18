document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(".animate-fade-in");
    
    elementsToAnimate.forEach((element) => {
      element.style.opacity = "0"; 
  
      setTimeout(() => {
        element.style.transition = "opacity 1.5s ease-in-out";
        element.style.opacity = "1"; 
      }, 100); 
    });
  });

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const heroImage = document.getElementById("hero-image");
    const overlay = heroImage.previousElementSibling; 
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ketika gambar terlihat di layar
            heroImage.classList.add("animate-fade-in-up"); 
            heroImage.classList.remove("opacity-0"); 
  
            // Animasi untuk overlay hitam
            overlay.classList.add("opacity-0"); 
            overlay.classList.remove("opacity-50"); 
  
            observer.unobserve(heroImage);
          }
        });
      },
      { threshold: 0.1 } 
    );
  
    observer.observe(heroImage); 
  });
