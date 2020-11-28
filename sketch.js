var umbrella,bruce,bruceimg,th1,th2,th3,th4,th;

function preload(){
    bruceimg.loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    th1.loadImage("1.png")
    th2.loadImage("2.png")
    th3.loadImage("3.png")
    th4.loadImage("4.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    umbrella= new Umbrella(600,200,10)
    var bruce = createsprite(600,250,20,50)
    bruce.addimg(bruceimg)
    th=[th1,th2,th3,th3,th4]
    

    
}

function draw(){

    if(maxdrops>height){
    th:random(1,4)
    }
    drawsprites();
}   

