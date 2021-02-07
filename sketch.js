var dog,dogImg,happyDogImg,database,foods,foodstock;

function preload(){

  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/happydogImg1.png");
}

function setup(){

  createCanvas(500,800);

  database = firebase.database();
  foodstock = database.ref("Food")
  foodstock.on("value",readStock);
  foodstock.set(20);

  dog = createSprite(250,400,30,30);
  dog.addImage(dogImg);
  dog.scale = 0.2;
}

function draw(){

  background("blue");

  if(foods !==undefined){

    textSize(30);
    fill("red");
    text("If you want to feed your pet pree UP_Arrow key",200,40);
    text("Food Remaining :"+foods,150,150);
  }

  if(keyWentDown(UP_ARROW)){

    writeStock(20);
    dog.addImage(happyDogImg);

  }

  if(keyWentDown(UP_ARROW)){

    dog.addImage(dogImg);
  }

  if(foods === 0){
    foods = 20;
    }

    drawSprites()

}

function writeStock(x){
  if(x<=0){

    x=0;

  }
  else{

    x=x-1;

  }

  database.ref('/').update({
    Food:x
  });
}

function readStock(){
  foods = data.val();
}