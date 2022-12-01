
class GameImgRepository{

    //same function/method
    //fill with objects of game, where user click, where user guess which humour is behind
    sendToBox(divId, obj){
        document.getElementById(divId).innerHTML = "<img style='width:150px; height:150px;' src='image/ChuckNorrisGameIMG/"+ obj.imgUrl+"'/>";
    }
    // constructor = method that is called automatily with the new statment
    // c# is use prop and JS this way
    constructor(imgUrl,Humour){
        this.imgUrl = imgUrl;
        this.Humour = Humour; 
    }

   
}

//sendtobox gets info from new
let object01 = new GameImgRepository("sad.png","sad");
object01.sendToBox('one', object01);

let object02 = new GameImgRepository("happy.jpeg","happy");
object02.sendToBox('two', object02);

let object03 = new GameImgRepository("suspicous.jpg","suspicous");
object03.sendToBox('three', object03);

let object04 = new GameImgRepository("sly.jpeg","sly");
object04.sendToBox('four', object04);

let object05 = new GameImgRepository("angry.jpeg","angry");
object05.sendToBox('five', object05);

let object06 = new GameImgRepository("depressed.jpeg","depressed");
object06.sendToBox('six', object06);

let object07 = new GameImgRepository("scared.jpg","scared");
object07.sendToBox('seven', object07);

let object08 = new GameImgRepository("serious.png","serious");
object08.sendToBox('eight', object08);



console.log(object01.imgUrl);
console.log(object02.Humour);

