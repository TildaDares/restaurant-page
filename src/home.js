function createMainImageDiv() {
    let contentDiv = document.querySelector('#content');
    let parOne = document.createElement('p');
    let parTwo = document.createElement('p');
    let mainImageDiv = document.createElement('div');
    let brandDiv = document.createElement('div');
    brandDiv.className = "brand";
    mainImageDiv.className = "main-image d-flex justify-content-center align-items-center flex-column";
    parOne.className = "text-white restaurant-name text-center mb-0";
    parOne.textContent = "Shadows";
    parTwo.className = "text-white text-center purpose mt-0";
    parTwo.textContent = "Bar & Restaurant";
    contentDiv.appendChild(mainImageDiv);
    brandDiv.appendChild(parOne);
    brandDiv.appendChild(parTwo);
    mainImageDiv.appendChild(brandDiv);
    return contentDiv;
}

function createHomeSlideshow() {
    let contentDiv = createMainImageDiv();
    let section = document.createElement('section');
    section.className = "home";
    contentDiv.appendChild(section);
    let slideshowHeader = ['Our Menu', 'Our Wine Collection', 'Catering Services', 'About Shadows'];
    for (let i = 1; i < 5; i++) {
        let slideshow = document.createElement('div');
        let background = document.createElement('div');
        let header = document.createElement('h3');
        let par = document.createElement('p');
        slideshow.className = `slideshow-${i} slideshow d-flex justify-content-end align-items-end`;
        background.className = "background text-white p-3 pb-4";
        header.className = "text-center slideshow-title";
        par.className = "text-center mb-0 pr-sm-5 pl-sm-5";
        header.textContent = slideshowHeader[i - 1];
        par.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur facere adipisci ducimus tempore 
                        voluptatibus vitae ut quod blanditiis alias veritatis expedita, placeat maxime suscipit tenetur ullam 
                        odio eum, soluta rem?`;
        section.appendChild(slideshow);
        slideshow.appendChild(background);
        background.appendChild(header);
        background.appendChild(par)
    }
}

function createContainer() {
    createHomeSlideshow();
    let section = document.querySelector('.home');
    let slideshow = document.createElement('div');
    let background = document.createElement('div');
    slideshow.className = "slideshow-5 slideshow";
    background.className = "background text-white p-3 pb-4 h-100 d-flex justify-content-between align-items-center flex-column";
    section.appendChild(slideshow);
    slideshow.appendChild(background);
}

function firstDivFunc() {
    let firstDiv = document.createElement('div');
    return firstDiv;
}

function secondDivFunc() {
    let secondDiv = document.createElement('div');
    let header = document.createElement('h3');
    let resBtn = document.createElement('button');
    let icon = document.createElement('i');
    secondDiv.className = "d-flex flex-column justify-content-center align-items-center";
    header.className = "text-center slideshow-title";
    icon.className = "fa fa-long-arrow-alt-down fa-2x mt-3";
    resBtn.className = "btn btn-light mt-3";
    header.textContent = "Make a Reservation";
    resBtn.textContent = "Reservations";
    secondDiv.appendChild(header);
    secondDiv.appendChild(icon);
    secondDiv.appendChild(resBtn);
    return secondDiv;
}

function thirdDivFunc() {
    let address = ["Monday - Sunday", "9AM - 10PM", "231 Allen Avenue, Brooklyn NY"];
    let icons = ["fab fa-twitter mr-2", "fab fa-facebook-f mr-2", "fab fa-instagram mr-2", "fab fa-linkedin-in"]
    let thirdDiv = document.createElement('div');
    let socialLinks = document.createElement('div');
    socialLinks.className = "text-center mb-2";
    thirdDiv.className = "d-flex justify-content-center align-items-center flex-column p-3";
    for (let i = 0; i < address.length; i++) {
        let par = document.createElement('p');
        par.textContent = address[i];
        thirdDiv.appendChild(par);
    }
    thirdDiv.appendChild(socialLinks);
    for (let i = 0; i < icons.length; i++) {
        let link = document.createElement('a');
        let iconElem = document.createElement('i');
        link.href = "#";
        link.className = "text-white";
        iconElem.className = icons[i];
        link.appendChild(iconElem);
        socialLinks.appendChild(link);
    }
    thirdDiv.appendChild(photoCredit());
    return thirdDiv;
}

function init() {
    createContainer();
    let background = document.querySelector('.slideshow-5').querySelector('.background');
    background.appendChild(firstDivFunc());
    background.appendChild(secondDivFunc());
    background.appendChild(thirdDivFunc());
}

function removeActiveFromOtherBtns(element) {
    let navBtns = document.querySelectorAll('.nav-btn')
    for (let i = 0; i < navBtns.length; i++) {
        if (navBtns[i] !== element) {
            navBtns[i].id = "";
        };
    };
}

function photoCredit() {
    let par = document.createElement('p');
    let unsplashLink = document.createElement('a');
    let freepikLink = document.createElement('a');
    unsplashLink.href = "https://unsplash.com/";
    unsplashLink.textContent = "Unsplash & ";
    unsplashLink.className = "text-white";
    freepikLink.href = "https://www.freepik.com/";
    freepikLink.textContent = "Freepik";
    freepikLink.className = "text-white";
    par.textContent = "Photo credits: ";
    par.appendChild(unsplashLink);
    par.appendChild(freepikLink);
    return par;
}

function homeFunc(e) {
    document.querySelector('.home-btn').id = "active";
    removeActiveFromOtherBtns(e.target);
    init();
}
export { homeFunc, removeActiveFromOtherBtns, photoCredit }