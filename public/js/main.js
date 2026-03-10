/**
 * main.js
 * Kurd Cut Premium Interactions
 */

document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. Custom Cursor Functionality
       ========================================= */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (!isMobile) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows exactly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with slight delay using CSS auto-translate + JS pos
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        });

        // Add hovering state for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .lang-selector');
        
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('hovering');
                cursorDot.style.backgroundColor = 'transparent';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('hovering');
                cursorDot.style.backgroundColor = 'var(--color-text-primary)';
            });
        });
    } else {
        // Hide custom cursors on mobile
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
        document.body.style.cursor = 'auto'; // restore default
    }

    /* =========================================
       2. Scroll-Triggered Animations (Intersection Observer)
       ========================================= */
    const animatedElements = document.querySelectorAll('.fade-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before it comes fully into view
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });

    /* =========================================
       3. Navbar Scroll State
       ========================================= */
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* =========================================
       4. Language Toggle (UI logic)
       ========================================= */
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            langBtns.forEach(b => b.classList.remove('active'));
            
            // Add to clicked
            e.target.classList.add('active');
            
            const locale = e.target.getAttribute('data-locale');
            console.log(`Language switched to: ${locale}`);
            
            // In a real app, this would trigger content replacement or a reload.
            // For now, it just updates UI.
            if(locale === 'ar' || locale === 'ku') {
                 // For RTL languages
                 // document.body.setAttribute('dir', 'rtl');
            } else {
                 // document.body.setAttribute('dir', 'ltr');
            }
        });
    });

    /* =========================================
       5. Initial Hero Load Animations (Cleanup)
       ========================================= */
    // Ensure navbar is visible
    setTimeout(() => {
        navbar.classList.remove('hidden-onload');
    }, 100);

});
