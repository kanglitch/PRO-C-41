class Drop{
constructor(x,y,r){
    var options = {
        friction: 0.1,
        restitution:0
    };



    this.bodies=circle.bodies(x,y,r)
    this.x=x;
    this.y=y;
    this.r=10;




}





display(){
fill("blue")

}
update(){
if(this.rain.position.y>height){
Matter.body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
}    
}
push(){
var maxdrops=100;
for(var i=0; i<maxdrops; i++){
    drops.push(new createDrop(random(0,400, random(0,400))));
}





}

}

