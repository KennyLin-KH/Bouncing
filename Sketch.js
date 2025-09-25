let ball;
let ranx, rany;
function setup() {
  createCanvas(950, 1000);
  ball = {};
  ball.x = 500;
  ball.y = 500;
  ball.d = 100;
  ranx = random(-3,3);
  rany = random(-3,3);
}
function draw() {
  background(220);
  drawBall(ball.x,ball.y, ball.d);
  updateBall();
  bounceEdge();
}
function drawBall(x,y,d) {
  circle (x,y,d);
}
function mouseClicked() {
  resetBalls();
}
function updateBall() {
  ball.x = ball.x + ranx;
  ball.y = ball.y + rany;
}
function bounceEdge() {
  if (ball.x+ball.d/2 > width) {
    ranx = ranx*-1;
  }
  if (ball.x-ball.d/2 < 0){
    ranx = ranx*-1;
  }
  if (ball.y + ball.d/2 > height) {
    rany = rany*-1;
  }
  if(ball.y-ball.d/2 < 0) {
    rany = rany*-1;
  }
}
