for (let i = 0; i < 300; i++) {
    let star = document.createElement("div");

    let size = 3+3*Math.random();
    star.style.width = size + "px";
    star.style.height = size + "px";

    let red=50+200*Math.random();
    let green=50+200*Math.random();
    let blue=200+55*Math.random();
    // star.style.backgroundColor = "red";
    // star.style.backgroundColor = "rgb(100,50,200)";
    // star.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    star.style.backgroundColor = `rgb(${red},${green},${blue})`;
    star.style.borderRadius = "50%"

    star.style.position = "absolute"
    let x = 99 * Math.random();
    let y = 99 * Math.random();
    star.style.left = x + "vw";
    star.style.top = y + "vh";

    // let duration=1*Math.random();//0~1
    // let duration=0.5+0.5*Math.random();//0.5~1
    // star.style.animation = `twinkling ${duration}s linear infinite alternate`;

    sky.appendChild(star)
}


document.onkeydown=function(event){
    if(event.key=="a"){
        spaceship.style.left=spaceship.offsetLeft-50+"px"
    }

    if(event.key=="d"){
        spaceship.style.left=spaceship.offsetLeft+50+"px"
    }

    if(event.key=="w"){
        spaceship.style.top=spaceship.offsetTop-50+"px"
    }

    if(event.key=="s"){
        spaceship.style.top=spaceship.offsetTop+50+"px"
    }

    if(event.key=="k"){
        explosion.style.display="block";
        new Audio("explosion.mp3").play();
        spaceship.style.display="none";
    }


}


