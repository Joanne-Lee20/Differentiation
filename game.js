const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 574;

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = './images/mappp.png';

const playerImage = new Image();
playerImage.src = './images/000.png';

image.onload = () => {
  c.drawImage(image, -200, -900);
  c.drawImage(playerImage, 0, 0);
}