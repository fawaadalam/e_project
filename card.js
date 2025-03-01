// card section
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const button = card.querySelector('.card-button');
        const flipButton = card.querySelector('.flip-button');
        const progress = card.querySelector('.progress');
        const cardLink = card.dataset.link;

        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card link from activating
            card.classList.add('flipped');
        });

        flipButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card link from activating
            card.classList.remove('flipped');
        });

        card.addEventListener('mouseover', () => {
            progress.style.width = '100%';
        });

        card.addEventListener('mouseout', () => {
            progress.style.width = '0';
        });

        // Color change effect
        card.addEventListener('mouseenter', () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            card.style.backgroundColor = "#" + randomColor;
        });

        card.addEventListener('mouseleave', () => {
            card.style.backgroundColor = '';
        });

        // Card link functionality
        card.addEventListener('click', () => {
            if (cardLink) {
                window.location.href = cardLink;
            }
        });

        // Prevent default link behavior for details link
        const detailsLink = card.querySelector('.details-link');
        if (detailsLink) {
            detailsLink.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent card link from activating
            });
        }
    });
});
