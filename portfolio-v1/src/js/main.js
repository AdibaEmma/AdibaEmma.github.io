// Modern JavaScript replacement for jQuery-based functionality

class Portfolio {
  constructor() {
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupScrollEffects();
    this.setupImageOptimization();
    this.setupTypingAnimation();
    this.setupScrollReveal();
    this.updateCopyrightYear();
  }

  setupNavigation() {
    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = document.querySelector('.menu-btn i');

    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuIcon.classList.toggle('active');
      });
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Close mobile menu after clicking
          navMenu.classList.remove('active');
          menuIcon.classList.remove('active');
        }
      });
    });
  }

  setupScrollEffects() {
    const navbar = document.querySelector('.navbar');
    const scrollUpBtn = document.querySelector('.scroll-up-btn');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      // Sticky navbar
      if (scrollY > 20) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }

      // Show/hide scroll up button
      if (scrollY > 500) {
        scrollUpBtn.classList.add('show');
      } else {
        scrollUpBtn.classList.remove('show');
      }
    });

    // Scroll to top functionality
    if (scrollUpBtn) {
      scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  setupImageOptimization() {
    // Enhanced image loading with intersection observer for better performance
    const images = document.querySelectorAll('img[loading="lazy"]')
    
    // Fallback for browsers that don't support native lazy loading
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading supported, just add fade-in effect
      images.forEach(img => {
        img.addEventListener('load', () => {
          img.style.transition = 'opacity 0.3s ease-in-out'
          img.style.opacity = '1'
        })
      })
    } else {
      // Implement lazy loading with Intersection Observer
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target
            const src = img.dataset.src || img.src
            
            if (src) {
              img.src = src
              img.style.transition = 'opacity 0.3s ease-in-out'
              img.addEventListener('load', () => {
                img.style.opacity = '1'
              })
              observer.unobserve(img)
            }
          }
        })
      }, {
        rootMargin: '50px 0px'
      })

      images.forEach(img => {
        img.style.opacity = '0'
        imageObserver.observe(img)
      })
    }

    // Add error handling for broken images
    images.forEach(img => {
      img.addEventListener('error', () => {
        img.style.opacity = '0.5'
        img.alt = 'Image failed to load'
      })
    })
  }

  setupTypingAnimation() {
    // Initialize typing animations if Typed.js is available
    if (typeof Typed !== 'undefined') {
      new Typed(".typing", {
        strings: ["Developer", "Engineer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });

      new Typed(".typing-2", {
        strings: ["Developer", "Engineer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
    }
  }

  setupScrollReveal() {
    // Initialize ScrollReveal if available
    if (typeof ScrollReveal !== 'undefined') {
      const sr = ScrollReveal({
        origin: 'bottom',
        distance: '80px',
        duration: 2000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        opacity: 0,
        reset: true
      });

      // Home section animations
      sr.reveal('.home-content .text-2', {
        origin: 'top',
        distance: '150%',
        duration: 2000,
      });

      sr.reveal('.home .social-icons', {
        origin: 'left',
        distance: '150%',
        duration: 2000,
        delay: 300
      });

      // About section animations
      sr.reveal('.about .title', {});
      sr.reveal('.about img', { delay: 200 });
      sr.reveal('.about-content .column p', {
        distance: '30px',
        delay: 200
      });

      // Services section animations
      sr.reveal('.services .title', {});
      sr.reveal('.services-content .card', { interval: 200 });

      // Skills section animations
      sr.reveal('.skills .title', {});
      sr.reveal('.skills-content .column', { interval: 200 });

      // Contact section animations
      sr.reveal('.contact .title', {});
      sr.reveal('.contact .contact-content .row', { interval: 200 });
    }
  }

  updateCopyrightYear() {
    const dateElement = document.querySelector('.date');
    if (dateElement) {
      const currentYear = new Date().getFullYear();
      dateElement.textContent = currentYear;
    }
  }
}

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Portfolio();
});