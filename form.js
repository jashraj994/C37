class Form{
constructor(){

this.input = createInput("Name");
this.button = createButton("Play");
this. greeting = createElement("h3")
}

hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();

}
display(){
var title= createElement("h2");
title.html("Car Racing Game");
title.position(130,0);



this.input.position(300,160);
this.button.position(350,300);

this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();
player.name = this.input.value();
playerCount = playerCount+1;
player.index = playerCount;
player.update();

player.updateCount(playerCount);

this.greeting.html("Hello" +player.name );
this.greeting.position(350,400);

});

}
}