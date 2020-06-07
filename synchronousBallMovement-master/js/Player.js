class Player{
    constroctor(){

    }
    getCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount=data.val();
        })
    }
    updateCount(count){
        detabase.ref("/").update({
            playerCount:count
        })
    }
    update(name){
        var playerIndex="player"+playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }
}                              