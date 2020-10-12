//Create variables here
var dog;
var happyDog;
var database;
var foods;
var foodStock;


function preload()
{
  //load images here
  
  dogImg=loadImage("images/Dog.png");
  dogImg1=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  var canvas = createCanvas(500,500);
  foodStock=database.ref("food")
  foodStock.on("value",readStock);

  dog=createSprite(200,250,10,10);
  dog.addImage(dogImg);
  dog.scale=0.5
  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogImg1);

  }
  
  
  drawSprites();

  stroke("black");
  text("Food Remaining"+foods,170,200)
  //add styles here

}



function readStock(data){

  foods=data.val();

}

function writeStock(x){

  if(x<=0){
    x=0;
}else{

  x=x-1;
}
database.ref('/').update({

  food:x


})


}


