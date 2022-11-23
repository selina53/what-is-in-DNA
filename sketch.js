let CircleNum=100;
let Diametr=2;
let amps,freqs;
function setup() {
	ww = windowWidth
	wh = windowHeight
	createCanvas(ww, wh);
	background(0);
    amps=createSlider(0,100,100,1)
    amps.position(0,0);
    amps.value(100);
  
    freqs=createSlider(-1,1,0.23,0.01)
    freqs.position(0,20);
    freqs.value(0.23)
}

function draw() {
	background(0)
	let s;
      for ( let s = 0;  s< CircleNum; s++) {
    let x3 = s*(width)/(CircleNum);
    let x4 = s*(width)/(CircleNum);
    strokeWeight(0.3);
    stroke(255);
    line(x3,height/2+30*sin(50*s+frameCount/100),
      x4,height/2+30*cos(PI*(3/4)+50*s+frameCount/100))
      
		let x5 = s*(width)/(CircleNum);
		fill(255);
		noStroke();
		              ellipse(x5,height/2+30*tan(50*s+frameCount/100),Diametr,Diametr);
  	
  }
	for (let i = 0; i < wh; i+=15){
		let deg = i * freqs.value() + frameCount / 40
		let amp =amps.value() * sin(deg)
		let x1 = ww / 2 + amp
		let x2 = ww / 2 - amp
		
		fill(i / 4, i / 2, (i / 1,5) + 50)
		circle(x1, i, 5 * sin(i / 50 + frameCount / 30) + 5)
		
		fill((i / 1,5) + 50, i / 4, i / 2)
		circle(x2, i, 10)
	}

}