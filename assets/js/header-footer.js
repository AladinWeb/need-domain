document.addEventListener('DOMContentLoaded', () => {
    // Subheader Component
    const subheader = document.createElement('div');
    subheader.className = 'subheader';
    subheader.innerHTML = `
        <div class="subheader-content">
            <div class="contact-info">
                <p><i class="fas fa-phone"></i> <a href="tel:+63 999 869 3626" id="phoneLink">+63 999 869...</a></p>
                <p><i class="fas fa-envelope"></i> <a href="mailto:connected@allworldseodigitalmarketingsolutions.com" id="emailLink">connected@al...</a></p>
            </div>
            <div class="social-icons">
                <a href="https://www.facebook.com/allworldseodigitalmarketingsolutions/" target="_blank" class="social-icon facebook-icon"><i class="fab fa-facebook-f" alt="Facebook Icon"></i></a>
                <a href="https://x.com/AllWorldSEOPH" target="_blank" class="social-icon x-icon"><i class="fab fa-x-twitter" alt="Twitter Icon"></i></a>
                <a href="https://www.youtube.com/@allworldtv8990" target="_blank" class="social-icon youtube-icon"><i class="fab fa-youtube" alt="YouTube Icon"></i></a>
                <a href="#" class="social-icon telegram-icon"><i class="fab fa-telegram-plane" alt="Telegram Icon"></i></a>
                <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFXGjokbPo0NQAAAZfZ7cXAGEbeYJeHjQ-M0YXfIyCSIxIjlBjgVpp5IeWkcL2H30BaR5pXfDsBLjhII-nyC3ptyyipSQXSbSBIf077mCG_Ccrsf3vqrRqksCrmqbdvlN4bOHs=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fallworld-seo-digital-marketing-solutions%2F" target="_blank" class="social-icon linkedin-icon"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    `;
    document.body.insertBefore(subheader, document.getElementById('header'));

    // Header Component
    const header = document.getElementById('header');
    header.innerHTML = `
        <header>
            <a href="/" class="logo-container" aria-label="Go to homepage">
                <picture>
                    <source srcset="/assets/images/logo.webp" type="image/webp">
                    <img src="/assets/images/logo.png" alt="Luckshots Logo" class="logo">
                </picture>
                <span>Luckshots</span>
            </a>
            <button class="hamburger">☰</button>
            <nav>
                <a href="/blogs">Blogs</a>
                <a href="/analysis">Analysis</a>
                <a href="/solutions">Solutions</a>
            </nav>
        </header>
    `;

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.textContent = nav.classList.contains('active') ? '✕' : '☰';
    });

    // Footer Component
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <footer>
            <div class="carousel">
                <div class="carousel-track">
                    <div class="client-logo"><img src="/assets/images/client-amerifreight.webp" alt="AmeriFreight Logo"></div>
                    <div class="client-logo"><img src="/assets/images/client-gobeyondbuilders.webp" alt="Go Beyond Builders Logo"></div>
                    <div class="client-logo"><img src="/assets/images/client-myndworkspsychiatry.webp" alt="MyndWorks Psychiatry Logo"></div>
                    <div class="client-logo"><img src="/assets/images/client-stars777org.webp" alt="Stars777org Logo"></div>
                    <div class="client-logo"><img src="/assets/images/client-stars777win.webp" alt="Stars777win Logo"></div>
                </div>
            </div>
            <div class="footer-columns">
                <div class="footer-column">
                    <div class="logo-container2">
                        <picture>
                            <source srcset="/assets/images/logo.webp" type="image/webp">
                            <img src="/assets/images/logo.png" alt="Luckshots Logo" class="logo">
                        </picture>
                        <h3>Luckshots</h3>
                    </div>
                    <div class="social-icons2">
                        <a href="https://www.facebook.com/allworldseodigitalmarketingsolutions/" target="_blank" class="social-icon facebook-icon"><i class="fab fa-facebook-f" alt="Facebook Icon"></i></a>
                        <a href="https://x.com/AllWorldSEOPH" target="_blank" class="social-icon x-icon"><i class="fab fa-x-twitter" alt="Twitter Icon"></i></a>
                        <a href="https://www.youtube.com/@allworldtv8990" target="_blank" class="social-icon youtube-icon"><i class="fab fa-youtube" alt="YouTube Icon"></i></a>
                        <a href="#" class="social-icon telegram-icon"><i class="fab fa-telegram-plane" alt="Telegram Icon"></i></a>
                        <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFXGjokbPo0NQAAAZfZ7cXAGEbeYJeHjQ-M0YXfIyCSIxIjlBjgVpp5IeWkcL2H30BaR5pXfDsBLjhII-nyC3ptyyipSQXSbSBIf077mCG_Ccrsf3vqrRqksCrmqbdvlN4bOHs=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fallworld-seo-digital-marketing-solutions%2F" target="_blank" class="social-icon linkedin-icon"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <p>Luckshots delivers cutting-edge insights and innovative solutions to empower businesses worldwide in the digital era. Managed by AllWorld SEO, our Bulacan-based team supports clients locally and internationally.</p>
                </div>
                <div class="footer-column">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/blogs">Blog</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Additional Links</h3>
                    <ul>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service">Terms of Service</a></li>
                        <li><a href="/faq">FAQs</a></li>
                        <li><a href="/contact-us">Support</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Contact Us</h3>
                    <form id="contactForm" class="contact-form">
                        <input type="text" placeholder="Name" required>
                        <input type="email" placeholder="Email" required>
                        <textarea placeholder="Message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div class="copyright">
                <p>© 2025 Luckshots. All rights reserved. Managed by <a href="https://allworldseodigitalmarketingsolutions.com/" target="_blank"><strong>AllWorld SEO</strong></a>.</p>
            </div>
        </footer>
    `;

    // Infinite Carousel Functionality
    const track = document.querySelector('.carousel-track');
    const originalLogos = Array.from(track.children);
    const logoCount = originalLogos.length;

    // Clone logos for infinite effect
    originalLogos.forEach(logo => {
        const cloneStart = logo.cloneNode(true);
        const cloneEnd = logo.cloneNode(true);
        track.appendChild(cloneStart);
        track.insertBefore(cloneEnd, originalLogos[0]);
    });

    const allLogos = Array.from(track.children);
    let currentIndex = logoCount; // Start at the first original logo

    function updateCarousel() {
        const logoWidth = originalLogos[0].offsetWidth + 32; // Width (200px or 150px on mobile) + 16px margin on each side
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = `translateX(-${currentIndex * logoWidth}px)`;
    }

    function nextSlide() {
        currentIndex++;
        updateCarousel();

        // When reaching the last cloned logo, reset to the first original logo
        if (currentIndex >= logoCount * 2) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = logoCount;
                updateCarousel();
            }, 1000); // Match transition duration
        }
    }

    setInterval(nextSlide, 3000); // Auto-slide every 3 seconds

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        filterContent(document.getElementById('blogGrid'), searchTerm);
        filterContent(document.getElementById('analysisGrid'), searchTerm);
        filterContent(document.getElementById('solutionsGrid'), searchTerm);
    });

    function filterContent(grid, term) {
        const cards = grid.getElementsByClassName('card');
        Array.from(cards).forEach(card => {
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const paragraphs = Array.from(card.getElementsByTagName('p')).map(p => p.textContent.toLowerCase()).join(' ');
            if (title.includes(term) || paragraphs.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Contact Form Functionality (Real)
    const script = document.createElement('script');
    script.src = 'https://cdn.emailjs.com/dist/email.min.js';
    script.onload = () => {
        emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS User ID
    };
    document.head.appendChild(script);

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = contactForm.querySelector('input[placeholder="Name"]').value;
        const email = contactForm.querySelector('input[placeholder="Email"]').value;
        const message = contactForm.querySelector('textarea[placeholder="Message"]').value;

        if (name && email && message) {
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                name: name,
                email: email,
                message: message,
                reply_to: email
            })
            .then(function(response) {
                alert('Thank you, ' + name + '! Your message has been sent successfully to connected@allworldseodigitalmarketingsolutions.com. We’ll get back to you soon.');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send the message. Please try again or email us at connected@allworldseodigitalmarketingsolutions.com.');
                console.error('EmailJS error:', error);
            });
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });

    // Truncate contact info for mobile
    function truncateForMobile() {
        const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
        const phoneLink = document.getElementById('phoneLink');
        const emailLink = document.getElementById('emailLink');

        if (isMobile) {
            phoneLink.textContent = '+63 999 869...' + phoneLink.href.slice(-4); // Show first 11 chars + last 4
            emailLink.textContent = 'connected@al...' + emailLink.href.split('@')[1].slice(0, 5); // Show first 11 chars + part of domain
        } else {
            phoneLink.textContent = phoneLink.href.replace('tel:', '');
            emailLink.textContent = emailLink.href.replace('mailto:', '');
        }
    }

    // Run on load and resize
    truncateForMobile();
    window.addEventListener('resize', truncateForMobile);
});