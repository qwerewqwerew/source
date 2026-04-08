document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('header, section');

    // Smooth scrolling
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 99, // Offset for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active menu highlighting on scroll
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === current) {
                item.classList.add('active');
            }
        });
    });
});
