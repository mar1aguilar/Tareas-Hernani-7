


function setup() {
let cnv = createCanvas(600, 400);
cnv.parent('area');


// colores sólidos
bgColor = color(235, 240, 250);
color1 = color(200, 80, 120); // rosado fuerte
color2 = color(80, 150, 220); // azul claro


noLoop();
drawScene();
}


function drawScene(){
background(bgColor);


// --- rectángulo con contorno ---
stroke(30);
strokeWeight(3);
fill(color1);
rect(30, 30, 200, 120, 8);


// --- elipse sin contorno ---
noStroke();
fill(color2);
ellipse(360, 90, 180, 120);


// --- línea y puntos ---
stroke(120, 180, 60);
strokeWeight(4);
line(40, 200, 560, 200);


strokeWeight(8);
point(80, 200);
point(160, 200);
point(240, 200);
point(320, 200);
point(400, 200);
point(480, 200);


// --- rectángulo sin contorno ---
noStroke();
fill(250, 200, 50, 180);
rect(60, 240, 140, 90);


// --- rectángulo con contorno distinto ---
fill(100, 200, 180);
stroke(255, 80, 80);
strokeWeight(5);
rect(260, 240, 160, 90);


// --- contorno punteado ---
noFill();
stroke(80, 80, 200);
strokeWeight(3);
drawingContext.setLineDash([6, 6]);
ellipse(500, 300, 140, 90);
drawingContext.setLineDash([]);
}


// draw queda vacío
function draw(){}