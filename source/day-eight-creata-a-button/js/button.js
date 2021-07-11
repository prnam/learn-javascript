var clickMeButton = document.createElement('button');
clickMeButton.id = 'btn';
let counter = 0
clickMeButton.innerHTML = counter;
clickMeButton.style.background = '#4FFF8F';
document.body.appendChild(clickMeButton);

btn.addEventListener("click", function () {
    counter = counter + 1
    btn.innerHTML = counter;

});