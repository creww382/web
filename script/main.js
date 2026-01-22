// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Animate stats numbers
function animateValue(id, start, end, duration) {
    if (start === end) return;
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const obj = document.getElementById(id);
    
    const timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Initialize animations when in view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateValue('student-count', 0, 845, 2000);
            animateValue('teacher-count', 0, 48, 2000);
            animateValue('achievement-count', 0, 32, 2000);
            animateValue('year-count', 0, 18, 2000);
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#' || !document.querySelector(targetId)) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Gallery lightbox functionality
let lightboxActive = false;

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('gallery-zoom') || 
        (e.target.parentElement && e.target.parentElement.classList.contains('gallery-zoom'))) {
        e.preventDefault();
        
        const link = e.target.classList.contains('gallery-zoom') ? 
            e.target : e.target.parentElement;
        const imgSrc = link.getAttribute('href');
        
        // Create lightbox overlay
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${imgSrc}" alt="Gambar Galeri">
            </div>
        `;
        
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
        lightboxActive = true;
        
        // Close lightbox
        overlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeLightbox();
            }
        });
    }
});

function closeLightbox() {
    const overlay = document.querySelector('.lightbox-overlay');
    if (overlay) {
        overlay.remove();
        document.body.style.overflow = 'auto';
        lightboxActive = false;
    }
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightboxActive) {
        closeLightbox();
    }
});

// Add lightbox styles dynamically
const lightboxStyles = document.createElement('style');
lightboxStyles.textContent = `
    .lightbox-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    }

    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }

    .lightbox-content img {
        max-width: 100%;
        max-height: 80vh;
        display: block;
        border-radius: 8px;
    }

    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 36px;
        cursor: pointer;
        z-index: 10000;
    }

    .lightbox-close:hover {
        color: #ccc;
    }
`;
document.head.appendChild(lightboxStyles);

// Carousel functionality
class Carousel {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.carousel-track');
        this.slides = Array.from(this.track.children);
        this.nextButton = container.querySelector('.carousel-next');
        this.prevButton = container.querySelector('.carousel-prev');
        this.indicators = container.querySelector('.carousel-indicators');
        this.indicatorDots = [];

        this.currentIndex = 0;
        this.autoSlideInterval = null;
        this.autoSlideDelay = 5000; // 5 seconds

        this.init();
    }

    init() {
        // Set up slides
        this.slides.forEach((slide, index) => {
            slide.style.minWidth = '100%';
        });

        // Create indicators
        this.createIndicators();

        // Set up event listeners
        this.setupEventListeners();

        // Start auto slide
        this.startAutoSlide();

        // Set initial active indicator
        this.updateIndicators();
    }

    createIndicators() {
        if (!this.indicators) return;

        this.slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('indicator');
            dot.setAttribute('data-slide', index);
            if (index === 0) dot.classList.add('active');
            this.indicators.appendChild(dot);
            this.indicatorDots.push(dot);
        });
    }

    setupEventListeners() {
        // Button navigation
        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => {
                this.nextSlide();
            });
        }

        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => {
                this.prevSlide();
            });
        }

        // Indicator navigation
        this.indicatorDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });

        // Touch/swipe support
        this.setupTouchSupport();

        // Keyboard navigation
        this.setupKeyboardSupport();

        // Pause auto-slide on hover
        this.container.addEventListener('mouseenter', () => {
            this.stopAutoSlide();
        });

        this.container.addEventListener('mouseleave', () => {
            this.startAutoSlide();
        });
    }

    setupTouchSupport() {
        let startX = 0;
        let endX = 0;

        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            this.stopAutoSlide();
        });

        this.container.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        });

        this.container.addEventListener('touchend', () => {
            const diffX = startX - endX;
            const threshold = 50; // Minimum swipe distance

            if (Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }

            this.startAutoSlide();
        });
    }

    setupKeyboardSupport() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlide();
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlide();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlide();
    }

    updateSlide() {
        const translateX = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${translateX}%)`;
        this.updateIndicators();
    }

    updateIndicators() {
        this.indicatorDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    startAutoSlide() {
        this.stopAutoSlide(); // Clear any existing interval
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoSlideDelay);
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        new Carousel(carouselContainer);
    }
});
