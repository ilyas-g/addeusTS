let ball: HTMLElement | null = document.getElementById('ball');
let velocityY: number = 0;
let gravity: number = 1;

function bounceBall() {
    velocityY += gravity;
    ball.style.top = ball.offsetTop + velocityY + 'px';

    if (ball.offsetTop + ball.offsetHeight >= window.innerHeight) {
        velocityY *= -gravity;
        ball.style.top = window.innerHeight - ball.offsetHeight + 'px';
    }

    requestAnimationFrame(bounceBall);
}
bounceBall();
