//your parameter variables go here!
var cloudColor = 255;
var cloudOp = 60 + random(-50, 50)

var CloudX = 20;
var CloudY = 40;

var faceX = 10;
var faceY = 30;

var SnowX = 25;
var SnowY = 100;

var RainX = 50;
var RainY = 100;

var rainX = map(i, 0, numRain - 1, 20, 70);
//var rainY = map(i,0,numRain-1,80,180);
var rainY = random(80,190);

var snowZ = map(i, 0, numSnow - 1, 20, 70);
//var snowM = map(i,0,numSnow-1,80,180);
var snowM = random(80,190);

var numRain = round(random(3,5));
var numSnow = round(random(5,10));


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 100;
  pWallpaper.grid_settings.cell_height =200
  pWallpaper.grid_settings.row_offset = 0;
}

function wallpaper_background() {
  background(0, 0, 102);
}




function my_symbol(x, y) {
  cloud(20, 30 + random(-7, 7));

  face(10 + random(-7, 7), 20);

}

function cloud(CloudX, CloudY) {

  //var cloudColor = 100 + random(-50, 140);
  var cloudOp = 60 + random(-50, 50);
  //if (cloudColor < 145) {
    if (cloudOp < 55) {
    var numRain = round(random(3,5));
  for (var i = 0; i < numRain; i += 1) {
      var rainX = map(i, 0, numRain - 1, 20, 70);
    var rainY = map(i,0,numRain-1,80,180);
  //var rainY = random(80,190);
      rain(rainX, rainY);

  }

  } else {

    var numSnow = round(random(3,5));

    for (var i = 0; i < numSnow; i += 1) {
      var snowZ = map(i, 0, numSnow - 1, 20, 70);
      var snowM = map(i,0,numSnow-1,80,180);
      //var snowM = random(80,190);
      snow(snowZ, snowM)
    }
  }


  stroke(125);
  fill(cloudColor, cloudOp);

  beginShape();
  vertex(CloudX, CloudY);
  quadraticVertex(CloudX + 10, CloudY - 20, CloudX + 30, CloudY - 10);

  vertex(CloudX + 30, CloudY - 10);
  quadraticVertex(CloudX + 37.5, CloudY - 15, CloudX + 42, CloudY - 7);

  vertex(CloudX + 42, CloudY - 7);
  quadraticVertex(CloudX + 72, CloudY - 15, CloudX + 68, CloudY + 12);

  vertex(CloudX + 68, CloudY + 12);
  quadraticVertex(CloudX + 80, CloudY + 30, CloudX + 60, CloudY + 38);

  vertex(CloudX + 60, CloudY + 38);
  quadraticVertex(CloudX + 56, CloudY + 50, CloudX + 45, CloudY + 43);

  vertex(CloudX + 45, CloudY + 43);
  quadraticVertex(CloudX + 25, CloudY + 55, CloudX + 10, CloudY + 45);

  vertex(CloudX + 10, CloudY + 45);
  quadraticVertex(CloudX + 3, CloudY + 45, CloudX + 3, CloudY + 40);

  vertex(CloudX + 3, CloudY + 40);
  quadraticVertex(CloudX - 9, CloudY + 35, CloudX - 5, CloudY + 25);

  vertex(CloudX - 5, CloudY + 25);
  quadraticVertex(CloudX - 18, CloudY + 8, CloudX, CloudY);

  endShape();
}


function face(faceX, faceY) {

  scale(1)
  stroke(0);
  fill(0);
  ellipse(faceX + 25, faceY + 25, 5, 5); //left eye
  ellipse(faceX + 55, faceY + 25, 5, 5); //right eye

  stroke(0);
  fill(255, 70);
  arc(faceX + 40, faceY + 32, 25, 25, 0, PI + PI * 57); // mouth
}

function snow(SnowX, SnowY) {


  noStroke();
  fill(200, 70 + random(-70, 30));
  ellipse(SnowX, SnowY, 15, 15);

  ellipse(SnowX, SnowY, 10, 10);


  strokeWeight(0.5);
  stroke(255);
  line(SnowX, SnowY - 10, SnowX, SnowY + 10);
  line(SnowX - 10, SnowY, SnowX + 10, SnowY);
  line(SnowX - 7.5, SnowY - 7.5, SnowX + 7.5, SnowY + 7.5);
  line(SnowX + 7.5, SnowY - 7.5, SnowX - 7.5, SnowY + 7.5);

  beginShape();
  vertex(SnowX, SnowY - 2.5);
  vertex(SnowX - 4, SnowY - 4);
  vertex(SnowX - 2.5, SnowY);
  vertex(SnowX - 4, SnowY + 4);
  vertex(SnowX, SnowY + 2.5);
  vertex(SnowX + 4, SnowY + 4);
  vertex(SnowX + 2.5, SnowY);
  vertex(SnowX + 4, SnowY - 4);
  vertex(SnowX, SnowY - 2.5);
  endShape();

  strokeWeight(0.3);
  noFill();
  beginShape();
  vertex(SnowX - 8, SnowY - 4);
  vertex(SnowX - 4, SnowY - 4);
  vertex(SnowX - 4, SnowY - 8);
  endShape();

  beginShape();
  vertex(SnowX - 4, SnowY - 8);
  vertex(SnowX, SnowY - 5);
  vertex(SnowX + 4, SnowY - 8);
  endShape();

  beginShape();
  vertex(SnowX + 4, SnowY - 8);
  vertex(SnowX + 4, SnowY - 4);
  vertex(SnowX + 8, SnowY - 4);
  endShape();

  beginShape();
  vertex(SnowX + 8, SnowY - 4);
  vertex(SnowX + 5, SnowY);
  vertex(SnowX + 8, SnowY + 4);
  endShape();

  beginShape();
  vertex(SnowX + 8, SnowY + 4);
  vertex(SnowX + 4, SnowY + 4);
  vertex(SnowX + 4, SnowY + 8);
  endShape();

  beginShape();
  vertex(SnowX + 4, SnowY + 8);
  vertex(SnowX, SnowY + 5);
  vertex(SnowX - 4, SnowY + 8);
  endShape();

  beginShape();
  vertex(SnowX - 4, SnowY + 8);
  vertex(SnowX - 4, SnowY + 4);
  vertex(SnowX - 8, SnowY + 4);
  endShape();

  beginShape();
  vertex(SnowX - 8, SnowY + 4);
  vertex(SnowX - 5, SnowY);
  vertex(SnowX - 8, SnowY - 4);
  endShape();
}

function rain(RainX, RainY) {

  strokeWeight(0.8);
  stroke(150, 99);
  fill(200 + random(-50, 50));
  beginShape();
  vertex(RainX, RainY);
  quadraticVertex(RainX + 8, RainY + 7.5, RainX + 2.5, RainY + 10);
  vertex(RainX + 2.5, RainY + 10);
  quadraticVertex(RainX - 4, RainY + 10.5, RainX, RainY);
  endShape();

  fill(200 + random(-50, 20));
  beginShape();
  vertex(RainX - 8, RainY - 5);
  quadraticVertex(RainX, RainY +2.5, RainX - 5.5, RainY + 5);
  vertex(RainX - 5.5, RainY + 5);
  quadraticVertex(RainX - 12, RainY + 4.5, RainX - 8, RainY - 5);
  endShape();

  fill(200 + random(-100, 55), 100 + random(-3, 1));
  beginShape();
  vertex(RainX + 5, RainY - 8);
  quadraticVertex(RainX + 13, RainY - 0.5, RainX + 7.5, RainY + 2);
  vertex(RainX + 7.5, RainY + 2);
  quadraticVertex(RainX - 1, RainY + 2.5, RainX + 5, RainY - 8);
  endShape();
}
