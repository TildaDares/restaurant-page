import createNav from './pageload.js'
import { homeFunc } from './home.js'
import menuFunc from './menu.js'
import contactFunc from './contact.js'

function tabEvents() {
    document.querySelector('.home-btn').addEventListener('click', homeFunc);
    document.querySelector('.menu-btn').addEventListener('click', menuFunc)
    document.querySelector('.contact-btn').addEventListener('click', contactFunc)
}

function init() {
    document.querySelector('#content').appendChild(createNav());
    tabEvents();
    document.querySelector('.home-btn').click();
}
init();