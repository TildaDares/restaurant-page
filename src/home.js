function createMainImageDiv() {
    let contentDiv = document.querySelector('#content');
    let parOne = document.createElement('p');
    let parTwo = document.createElement('p');
    let mainImageDiv = document.createElement('div');
    mainImageDiv.className = "main-image d-flex justify-content-center align-items-center flex-column";
    parOne.className = "text-white restaurant-name text-center mb-0";
    parOne.textContent = "Shadows";
    parTwo.className = "text-white text-center purpo