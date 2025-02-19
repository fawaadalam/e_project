// Import Lucide icons
import * as lucide from 'lucide';

// Initialize Lucide icons
lucide.createIcons();

// Add hover effect listeners
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.querySelector('.overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.querySelector('.overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    });
});

// Add button click handlers
document.querySelectorAll('.browse-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Prevent the default anchor tag behavior
        e.stopPropagation();
        
        // Get the parent card's href
        const href = this.closest('a').getAttribute('href');
        
        // Navigate to the appropriate page
        window.location.href = href;
    });
});