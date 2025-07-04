const gameArea = document.getElementById('gameArea');
const target = document.getElementById('target');
const scoreEl = document.getElementById('score');
const startBtn = document.getElementById('startBtn');
let score = 0;
let gameInterval;

function moveTarget() {
    const maxX = gameArea.clientWidth - target.offsetWidth;
    const maxY = gameArea.clientHeight - target.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    target.style.left = x + 'px';
    target.style.top = y + 'px';
}

function updateScore() {
    score++;
    scoreEl.textContent = `Score: ${score}`;
}

target.addEventListener('click', updateScore);

function startGame() {
    score = 0;
    scoreEl.textContent = 'Score: 0';
    moveTarget();
    gameInterval = setInterval(moveTarget, 800);
    setTimeout(() => {
        clearInterval(gameInterval);
        alert('Game over! Your score: ' + score);
    }, 30000);
}

startBtn.addEventListener('click', startGame);
