//in this file I'm trying out the positioning of emoji with variables
// did not scale all variables

let x = 150;
let y = 150;
let emojiScale = 0.8;

background(255, 255, 255);

push();
translate(100, 70);

// yellow body
strokeWeight(2);
fill(255, 255, 0);
ellipse(x, y, 200 * emojiScale);

// eyebrows
noStroke();
fill(0, 0, 0);
ellipse(100, 90, 20 * emojiScale);
ellipse(200, 90, 20 * emojiScale);
fill(255, 255, 0);
ellipse(98, 85, 20 * emojiScale);
ellipse(202, 85, 24 * emojiScale);

// eyes and mouth
fill(0, 0, 0);
ellipse(x - 35, y - 20, 50 * emojiScale);
ellipse(185, 130, 50 * emojiScale);
ellipse(150, 190, 35 * emojiScale);

// white reflection in eyes
fill(255, 255, 255);
ellipse(110, 122, 27 * emojiScale);
ellipse(124, 140, 10 * emojiScale);
ellipse(180, 122, 27 * emojiScale);
ellipse(194, 140, 10 * emojiScale);

pop();
