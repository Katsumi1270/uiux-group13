    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuToggle.innerHTML = mobileMenu.classList.contains('hidden') 
        ? '<i class="fas fa-bars"></i>' 
        : '<i class="fas fa-times"></i>';
    });
        
    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.remove('hidden');
      } else {
        scrollTopBtn.classList.add('hidden');
      }
    });
    
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Activity Modal
    function openActivityModal(title, content) {
      const modal = document.getElementById('activityModal');
      const modalTitle = document.getElementById('modalTitle');
      const modalContent = document.getElementById('modalContent');
      
      modalTitle.textContent = title;
      modalContent.textContent = content;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
    
    function closeActivityModal() {
      const modal = document.getElementById('activityModal');
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
    
    document.getElementById('modalCloseBtn').addEventListener('click', closeActivityModal);
    document.getElementById('closeModal').addEventListener('click', closeActivityModal);
    
    // Lightbox
    function openLightbox(src, caption) {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightboxImg');
      const lightboxCaption = document.getElementById('lightboxCaption');
      
      lightboxImg.src = src;
      lightboxCaption.textContent = caption || '';
      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden';

      document.getElementById('lightboxImg').addEventListener('click', closeLightbox);
    }
    
    function closeLightbox() {
      const lightbox = document.getElementById('lightbox');
      lightbox.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    
    // Gallery items click event
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const caption = this.querySelector('.caption h3')?.textContent || '';
        openLightbox(imgSrc, caption);
      });
    });
    
    // Testimonial Slider
    const slider = document.querySelector('.testimonial-slider .flex');
    const dots = document.querySelectorAll('.testimonial-slider button');
    let currentIndex = 0;
    
    function goToSlide(index) {
      currentIndex = index;
      slider.scrollTo({
        left: slider.children[index].offsetLeft,
        behavior: 'smooth'
      });
      
      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle('bg-primary', i === index);
        dot.classList.toggle('bg-gray-300', i !== index);
      });
    }
    
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => goToSlide(i));
    });
    
    // Auto slide
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slider.children.length;
      goToSlide(currentIndex);
    }, 5000);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Close mobile menu if open
          if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
          }
          
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('#name').value;
        const email = this.querySelector('#email').value;
        const subject = this.querySelector('#subject').value;
        const message = this.querySelector('#message').value;
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        this.reset();
      });
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        console.log('Subscribed email:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        
        // Reset form
        this.reset();
      });
    }
    
    // Initialize animations when elements come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.section-title, .gallery-item, .activity-card, .testimonial');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
    
    // Run once on page load
    window.addEventListener('load', animateOnScroll);
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);

          document.addEventListener('DOMContentLoaded', function() {
          const translateBtn = document.getElementById('translateBtn');
          const languageText = document.getElementById('languageText');
          let currentLanguage = 'en'; // Default language is English
          
          translateBtn.addEventListener('click', function() {
              // Toggle between English and Malay
              currentLanguage = currentLanguage === 'en' ? 'my' : 'en';
              
              // Update all elements with data attributes
              const translatableElements = document.querySelectorAll('[data-en], [data-my]');
              
              translatableElements.forEach(element => {
                  if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                      // Handle input placeholder translation
                      const placeholderEn = element.getAttribute('data-en');
                      const placeholderMy = element.getAttribute('data-my');
                      if (placeholderEn && placeholderMy) {
                          element.placeholder = currentLanguage === 'en' ? placeholderEn : placeholderMy;
                      }
                  } else {
                      // Handle regular element content translation
                      const textEn = element.getAttribute('data-en');
                      const textMy = element.getAttribute('data-my');
                      
                      if (textEn && textMy) {
                          element.textContent = currentLanguage === 'en' ? textEn : textMy;
                      }
                  }
              });
              // Update button text
              languageText.textContent = currentLanguage === 'en' ? 'BM' : 'EN';
              
              // Add animation class to content
              const content = document.querySelector('.content');
                if (content) {
                  content.classList.remove('active'); // remove current visible state
                  content.classList.add('fade-transition'); // apply fade out

                  setTimeout(() => {
                    content.classList.add('active'); // fade back in after translation
                  }, 10); // small delay to trigger transition
                }
                
              // Update html lang attribute
              document.documentElement.lang = currentLanguage;
          });
      });