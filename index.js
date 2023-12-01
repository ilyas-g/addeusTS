"use strict";
let ball = document.getElementById('ball');
let velocityY = 0;
let gravity = 1;
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
