function Bear() {
  this.dBear = 100;
  this.htmlElement = document.getElementById("bear");
  this.id = this.htmlElement.id;
  this.x = this.htmlElement.offsetLeft;
  this.y = this.htmlElement.offsetTop;

  this.move = function (xDir, yDir) {
    this.fitBounds(); //add this instruction to keep bear within the board
    this.x += this.dBear * xDir;
    this.y += this.dBear * yDir;
    this.display();
    console.log(this.dBear);
  };

  this.display = function () {
    this.htmlElement.style.left = this.x + "px";
    this.htmlElement.style.top = this.y + "px";
    this.htmlElement.style.display = "block";
    this.htmlElement.style.position = "absolute"; //or "fixed" to fix to the window
  };

  this.fitBounds = function () {
    let parent = this.htmlElement.parentElement;
    let iw = this.htmlElement.offsetWidth;
    let ih = this.htmlElement.offsetHeight;
    let l = parent.offsetLeft;
    let t = parent.offsetTop;
    let w = parent.offsetWidth;
    let h = parent.offsetHeight;
    if (this.x < 0) this.x = 0;
    if (this.x > w - iw) this.x = w - iw;
    if (this.y < 0) this.y = 0;
    if (this.y > h - ih) this.y = h - ih;
  };

  setSpeed = function () {
    this.dBear = document.getElementById("speedBear").value;
    console.log(this.dBear);
  };
}

function start() {
  //create bear
  bear = new Bear();
  //add an event listener to the keypress event
  document.addEventListener("keydown", moveBear, false);
  document.addEventListener("change", setSpeed, false);
}

//Handle keyboard events
//to move the bear
function moveBear(e) {
  //codes of the four keys
  const KEYUP = 38;
  const KEYDOWN = 40;
  const KEYLEFT = 37;
  const KEYRIGHT = 39;

  if (e.keyCode == KEYRIGHT) {
    bear.move(1, 0);
  } //right key
  if (e.keyCode == KEYLEFT) {
    bear.move(-1, 0);
  } //left key
  if (e.keyCode == KEYUP) {
    bear.move(0, -1);
  } //up key
  if (e.keyCode == KEYDOWN) {
    bear.move(0, 1);
  } //down key
}
