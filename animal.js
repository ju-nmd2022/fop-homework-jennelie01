background(255, 255, 255);

// face
strokeWeight(2);
fill(0, 255, 0);
ellipse(150, 150, 200);

// eyes
push();
translate(0, 20);

ellipse(220, 70, 60, 99);
ellipse(80, 70, 60, 99);

fill(255, 255, 255);
ellipse(220, 70, 40, 90);
ellipse(80, 70, 40, 90);

fill(0, 0, 0);
ellipse(80, 70, 30);
ellipse(220, 70, 30);

pop();

//nose
fill(0, 0, 0);
ellipse(130, 150, 7);
ellipse(175, 150, 7);
