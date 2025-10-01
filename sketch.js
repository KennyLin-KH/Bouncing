let balls = [];
let ball1, ball2, ball3;
let ranx, rany;
let first;
function setup() {
  createCanvas(800, 600);
  resetBalls();
}
function draw() {
  background(220);
  for (let x = 0; x < balls.length; x++) {
    drawBalls(balls[x]);
    for (let y = 0; y < balls.length; y++) {
      if (x != y) 
      {
        bounceBall(balls[x], balls[y]);
      }
    }
    updateBall(balls[x]);
    bounceEdge(balls[x]);
  }
  if (mouseIsPressed) {
    clickCount++;
    drawBall(mouseX, mouseY, 100);
  }
}
function drawBalls(ball) {
  circle (ball.x,ball.y,ball.d);
}
function updateBall(ball) {
  ball.x = ball.x + ball.rx;
  ball.y = ball.y + ball.ry;
}
function bounceEdge(ball) {
  if (ball.x+ball.d/2 > width) {
    ball.rx = ball.rx*-1;
  }
  if (ball.x-ball.d/2 < 0){
    ball.rx = ball.rx*-1;
  }
  if (ball.y + ball.d/2 > height) {
    ball.ry = ball.ry*-1;
  }
  if(ball.y-ball.d/2 < 0) {
    ball.ry = ball.ry*-1;
  }
}
function bounceBall(ball1, ball2) {
  if (ball1.x-ball2.x < ball1.d+ball2.d && ball2.x - ball1.x < ball1.d+ball2.d) {
    if (ball1.y - ball2.y < ball1.d + ball2.d && ball2.y - ball1.y < ball1.d + ball2.d) {
      ball1.rx *= -1;
      ball2.rx *= -1;
      ball1.ry *= -1;
      ball2.ry *= -1;
    }
  }
}
function createBalls() {
  ball1 = {};
  ball1.x = 500;
  ball1.y = 500;
  ball1.d = 100;
  ball1.rx = random(-3,3);
  ball1.ry = random(-3,3);
  balls.push(ball1)
  ball2 = {};
  ball2.x = 700;
  ball2.y = 500;
  ball2.d = 100;
  ball2.rx = random(-3,3);
  ball2.ry = random(-3,3);
  balls.push(ball2);
  ball3 = {};
  ball3.x = 300;
  ball3.y = 500;
  ball3.d = 100;
  balls.push(ball3);
  ball3.rx = random(-3,3);
  ball3.ry = random(-3,3);
}
function resetBalls() {
  balls = [];
  createBalls()
}
