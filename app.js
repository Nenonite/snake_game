const canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let para = document.querySelector(".score")

document.onkeydown = keyPress;
setInterval(game, 100);

let px = py = 10;
let gs = tc = 20;
let ax = ay = 5;
let xv = yv = 0;
let trail = []; //{x,y} {x,y} {x,y}
let tail = 5;

function keyPress(event){
    //console.log(event.keyCode);
    if(event.keyCode == 37){
        xv = -1; //left
        yv = 0;
    }
    if(event.keyCode == 38){
        xv = 0;  //up
        yv = -1;
    }
    if(event.keyCode == 39){
        xv = 1;  //right
        yv = 0;
    }
    if(event.keyCode == 40){
        xv = 0;  //dawn
        yv = 1;
    }
   

}

function game(){
    px += xv;
    py += yv;
    if(px<0) px = tc-1;
    if(px > tc-1) px = 0;
    if(py<0) py = tc-1;
    if(py > tc-1) py = 0;

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,400,400);
    //Рисуем змейку
    
    ctx.fillStyle ='lime';
    for(let i = 0; i < trail.length; i++){
        ctx.fillRect(trail[i].x*20, trail[i].y*20, 18,18);
        if(trail[i].x == px && trail[i].y == py)
        tail = 5;
    }
    trail.push({x:px,y:py});
    while(trail.length > tail) {
        trail.shift();
    }

    if(ax == px && ay == py){
        tail++;
        ax = Math.floor(Math.random()*20);
        ay = Math.floor(Math.random()*20);
    }
    ctx.fillStyle = 'red';
    ctx.fillRect(ax*20, ay*20, 18, 18);
    para.innerText = tail;
}


