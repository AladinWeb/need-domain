document.addEventListener('DOMContentLoaded', () => {
    // Subheader Component
    const subheader = document.createElement('div');
    subheader.className = 'subheader';
    subheader.innerHTML = `
        <div class="subheader-content">
            <div class="contact-info">
                <p><i class="fas fa-phone"></i> <a href="tel:+15551234567">(555) 123-4567</a></p>
                <p><i class="fas fa-envelope"></i> <a href="mailto:support@featurehub.com">support@featurehub.com</a></p>
            </div>
            <div class="social-icons">
                <a href="#" class="social-icon facebook-icon"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-icon x-icon"><i class="fab fa-x-twitter"></i></a>
                <a href="#" class="social-icon youtube-icon"><i class="fab fa-youtube"></i></a>
                <a href="#" class="social-icon telegram-icon"><i class="fab fa-telegram-plane"></i></a>
                <a href="#" class="social-icon linkedin-icon"><i class="fab fa-linkedin-in"></i></a>
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
                <a href="/blogs.html">Blogs</a>
                <a href="/analysis.html">Analysis</a>
                <a href="/solutions.html">Solutions</a>
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
                        <a href="#" class="social-icon facebook-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-icon x-icon"><i class="fab fa-x-twitter"></i></a>
                        <a href="#" class="social-icon youtube-icon"><i class="fab fa-youtube"></i></a>
                        <a href="#" class="social-icon telegram-icon"><i class="fab fa-telegram-plane"></i></a>
                        <a href="#" class="social-icon linkedin-icon"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <p>Luckshots delivers cutting-edge insights and innovative solutions to empower businesses worldwide in the digital era. Managed by AllWorld SEO, our Bulacan-based team supports clients locally and internationally.</p>
                </div>
                <div class="footer-column">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about.html">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="/blogs.html">Blog</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Additional Links</h3>
                    <ul>
                        <li><a href="/privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="/terms-of-service.html">Terms of Service</a></li>
                        <li><a href="/faq.html">FAQs</a></li>
                        <li><a href="/contact-us.html">Support</a></li>
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

    // Contact Form Functionality (Simulated)
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        alert('Message sent successfully! (Simulation only, no email sent)'); // Simulated feedback
        contactForm.reset(); // Clear the form fields
    });
});