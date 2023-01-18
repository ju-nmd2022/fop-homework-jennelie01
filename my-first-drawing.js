// in this file I'm trying out code from lectures

background(255, 255, 255);

ellipse(120, 180, 30, 70);

noStroke();
fill(255, 0, 0);
rect(60, 80, 106, 42);

strokeWeight(10);
stroke(255, 0, 0);
fill(100, 100, 200);
ellipse(200, 100, 100);

fill(0, 0, 0);
beginShape();
noStroke();
vertex(105, 140);
bezierVertex(105, 100, 135, 100, 135, 140);
bezierVertex(135, 120, 105, 120, 105, 140);
endShape();
