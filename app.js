function toggleSubMenu(menu, menuIndex) {
    const subMenu = document.querySelectorAll('.sub-menu');

    subMenu.forEach((item, index) => {
        if(index !== menuIndex) {
            item.classList.remove('show');
        } else {
            item.classList.add('show');
        }
    });
}

function addPrimaryMenuHoverEvent() {
    const menuContainer = document.getElementById('menu-container');
    const primaryMenu = document.getElementById('primary-menu');
    const links = primaryMenu.querySelectorAll('a');

    links.forEach((link, index) => {
        link.addEventListener('mouseover', () => {
            toggleSubMenu(link.id, index);
        });
    });
}

window.addEventListener('load', () => {
    addPrimaryMenuHoverEvent();
});