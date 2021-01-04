function createNav() {
    let contentDiv = document.querySelector('#content');
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    let homeList = document.createElement('li');
    let menuList = document.createElement('li');
    let contactList = document.createElement('li');
    let homeBtn = document.createElement('button');
    let menuBtn = document.createElement('button');
    let contactBtn = document.createElement('button');
    nav.className = "navbar navbar-expand-lg";
    ul.className = "d-flex justify-content-between justify-content-lg-around w-100 p-0 mb-0 text-white";
    homeBtn.className = "btn";
    homeBtn.id = "active";
    menuBtn.className = "btn";
    contactBtn.className = "btn";
    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact';
    contentDiv.appendChild(nav);
    nav.appendChild(ul);
    ul.appendChild(homeList);
    ul.appendChild(menuList);
    ul.appendChild(contactList);
    homeList.appendChild(homeBtn);
    menuList.appendChild(menuBtn);
    contactList.appendChild(contactBtn);
    homeBtn.addEventListener('click', homeFunc);
    menuBtn.addEventListener('click', menuFunc);
    contactBtn.addEventListener('click', contactFunc);
}
export { createNav }