document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const links = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.backgroundColor = '#b2dfdb'; 
            link.style.color = '#004d40';
        });

        link.addEventListener('mouseleave', () => {
            if (!link.classList.contains('active')) {
                link.style.backgroundColor = 'transparent';
                link.style.color = '#e0f7fa'; 
            }
        });

        link.addEventListener('click', () => {
            links.forEach(item => {
                item.classList.remove('active');
                item.style.backgroundColor = 'transparent';
                item.style.color = '#e0f7fa'; 
            });
            link.classList.add('active');
            link.style.backgroundColor = '#b2dfdb'; 
            link.style.color = '#004d40'; 
        });
    });
});
