background(255, 255, 255);

push();
translate(100, 70);

// yellow body
strokeWeight(2);
fill(255, 255, 0);
ellipse(150, 150, 200);

// eyebrows
noStroke();
fill(0, 0, 0);
ellipse(100, 90, 20);
ellipse(200, 90, 20);
fill(255, 255, 0);
ellipse(98, 85, 24);
ellipse(202, 85, 24);

// eyes and mouth
fill(0, 0, 0);
ellipse(115, 130, 50);
ellipse(185, 130, 50);
ellipse(150, 190, 35);

// white reflection in eyes
fill(255, 255, 255);
ellipse(110, 122, 27);
ellipse(124, 140, 10);
ellipse(180, 122, 27);
ellipse(194, 140, 10);

pop();
