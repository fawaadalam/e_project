document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');

    // Toggle mobile menu
    wrapper.addEventListener('click', () => {
        wrapper.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on click
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            wrapper.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Search functionality
    searchBtn.addEventListener('click', () => {
        if (searchInput.value.trim() !== '') {
            alert('Searching for: ' + searchInput.value);
            searchInput.value = '';
        }
    });

    // Enter key for search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
});