const navItems = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

// opens nav drop down //

const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

// closes nav drop down //

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}


openNavBtn.addEventListener('click', openNav);

closeNavBtn.addEventListener('click', closeNav);

const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show__sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide__sidebar-btn');

// SHOWS SIDE BAR ON SMALL DEVICES //

const showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}

const hideSidebar = () => {
    sidebar.style.left = '-100%';
    showSidebarBtn.style = 'inline-block';
    hideSidebarBtn.style.display = 'none';
}

showSidebarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);