class Form{
    constructor(){}

    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);

        var input=createInput("name");
        input.position(130,160);

        var button=createButton("play");
        button.position(200,200);

        var greeting=createElement("h2");
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name=input.value();
            playerCount++;
player.update(name);
player.updateCount(playerCount);
            greeting.html("Welcome "+name);
            greeting.position(180,200);
        });
    }
} 