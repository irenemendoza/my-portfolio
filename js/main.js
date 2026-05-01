const cursor=document.getElementById("cursor");

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('big'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
})



const menu = document.getElementById('menu');
const toggle = document.getElementById('menu-toggle');

if (menu && toggle) {
    let isOpen = false;
    const isMobile = () => window.innerWidth < 768;

    if (isMobile()) {
        menu.style.display = 'none';
    }

    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        isOpen = !isOpen;
        menu.style.display = isOpen ? 'flex' : 'none';
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
            isOpen = false;
            menu.style.display = 'none';
        }
    });
}

// Lightbox
const lightbox = document.getElementById('lightbox');
if (lightbox) {
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    document.querySelectorAll('a.lightbox').forEach(link => {
        link.querySelector('img').style.cursor = 'zoom-in';
        link.addEventListener('click', (e) => {
            e.preventDefault();
            lightboxImg.src = link.href;
            lightboxImg.alt = link.querySelector('img').alt;
            lightbox.classList.add('open');
        });
    });

    const closeLightbox = () => lightbox.classList.remove('open');

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
}