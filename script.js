function initialiseContainer(size) {
const container = document.createElement('div');
container.classList.add('container');

for(i = 0; i < (size*size); i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');

    pixel.style.height = mainBox.offsetHeight / size + 'px';
    pixel.style.width = mainBox.offsetWidth / size + 'px';

    pixel.addEventListener('mouseover', () => {
        if(color === 'rainbow')
            pixel.style.backgroundColor = randomRGB();
        else
            pixel.style.backgroundColor = color;
    });
    
    container.appendChild(pixel);
}
document.querySelector('.mother-box').appendChild(container);
}

function initialiseButton() {
    document.querySelector('.draw-button').addEventListener('click', () => color = 'black');
    document.querySelector('.erase-button').addEventListener('click', () => color = 'white');
    document.querySelector('.rainbow-button').addEventListener('click', () => color = 'rainbow');
    document.querySelector('.grid-size').addEventListener('click', () => {
        for(;;) {
            const size = Number(prompt('Enter grid size(less than 100):','16'));
            console.log(size);
            if(size < 100 && size > 0) {
                mainBox.removeChild(document.querySelector('.container'));
                initialiseContainer(size);
                break;
            }
            else {
                alert('Invalid Size!');
            }
        }
    });
}

function randomRGB() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`; 
    return rgb;
}

const mainBox = document.querySelector('.mother-box');
let color = 'white';

initialiseContainer(16);
initialiseButton();

