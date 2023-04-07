const container = document.createElement('div');
const mainBox = document.querySelector('.mother-box');
let n = 64;
container.classList.add('container');
console.log(mainBox.offsetHeight);
for(i = 0; i < n*n; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');

    pixel.style.height = mainBox.offsetHeight/n + 'px';
    pixel.style.width = mainBox.offsetWidth/n + 'px';

    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = 'black';
    });
    
    container.appendChild(pixel);
}

document.querySelector('.mother-box').appendChild(container);