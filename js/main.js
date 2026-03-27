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
let isOpen = false;
const isMobile = () => window.innerWidth < 768;

if (isMobile()) {
    menu.style.display = 'none';
}

toggle.addEventListener('click', () => {
        isOpen = !isOpen;
        menu.style.display = isOpen ? 'flex' : 'none';
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        isOpen = false;
        menu.style.display = 'none';
    }
});