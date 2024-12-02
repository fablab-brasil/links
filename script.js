// script.js
const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.05)';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});
