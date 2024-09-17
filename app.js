const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const redPillBtn = document.getElementById('red-pill-btn');
const bluePillBtn = document.getElementById('blue-pill-btn');
const matrixCode = document.querySelector('.matrix-code');

left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left');
});
left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right');
});
right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right');
});

redPillBtn.addEventListener('click', (event) => {
  event.preventDefault();
  startMatrixEffect();
});

bluePillBtn.addEventListener('click', (event) => {
  event.preventDefault();
  startMatrixEffect();
});

function startMatrixEffect() {
  matrixCode.style.display = 'block'; 

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.querySelector('.matrix-code').appendChild(canvas);

  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function drawMatrix() {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#00ff00'; 
    context.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = String.fromCharCode(0x30A0 + Math.random() * 96);
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      context.fillText(text, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 50);
}
