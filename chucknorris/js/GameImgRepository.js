
class GameImgRepository{

    constructor(){
        this.clickedImage = "";
        //randomize here images game
        this.list = [];//array
            //push information to list
            //properties are THIS
            this.list.push("image/ChuckNorrisGameIMG/sad.png");
            this.list.push("image/ChuckNorrisGameIMG/happy.jpeg");
            this.list.push("image/ChuckNorrisGameIMG/suspicous.jpg");
            this.list.push("image/ChuckNorrisGameIMG/suspicous.jpg");
            this.list.push("image/ChuckNorrisGameIMG/angry.jpeg");
            this.list.push("image/ChuckNorrisGameIMG/sly.jpeg");
            this.list.push("image/ChuckNorrisGameIMG/depressed.jpeg");
            this.list.push("image/ChuckNorrisGameIMG/serious.png");
            this.list.push("image/ChuckNorrisGameIMG/scared.jpg");




            // list.shift();//remove the item at the end
            //randomize
            this.list.sort();

    }

    showImage(divId){
        
        // console.log("the id sent is " + divId)Use as testing

        //we fillout out the div he clicked
        if(divId=="one"){
                // console.log("we got here!",this.list[0]);use as testing
            document.getElementById(divId).style.backgroundImage = "url("+this.list[0]+")";
        }

        if(divId=="two"){
            document.getElementById(divId).style.backgroundImage = "url("+this.list[1]+")";
        }

        if(divId=="three"){
            document.getElementById(divId).style.backgroundImage = "url("+this.list[2]+")";
        }

        if(divId=="four"){
            document.getElementById(divId).style.backgroundImage = "url("+this.list[3]+")";
        }

        if(divId=="five"){
            document.getElementById(divId).style.backgroundImage = "url("+this.list[4]+")";
        }

        if(divId=="six"){
            document.getElementById(divId).style.backgroundImage = "url("+this.list[5]+")";
        }

        if(divId=="seven"){
            document.getElementById(divId).style.backgroundImage = "url("+this.list[6]+")";
        }

        if(divId=="eight"){
            document.getElementById(divId).style.backgroundImage = "url("+this.list[7]+")";
        }

        return;


        if(this.clickedImage==""){
            //then first time clicked
            //in this moment images already placed logically speaking.
            this.clickedImage = document.getElementById(divId).style.background;
            //return = go out of this method (showimage)
            return;
        }

        //variable to get the url of img that he is now
        const currentImgUrl = document.getElementById(divId).style.background;

            //if this imaget he same of the one he clicked?
                if(currentImgUrl == this.clickedImage){
                    //show the image and tell him his write

                    
                    
                }

                else{
                    //show image if wrong
                }
            
           
    }
        
    
    

    //same function/method
    //fill with objects of game, where user click, where user guess which humour is behind
    // sendToBox(divId, obj){
    //     document.getElementById(divId).innerHTML =
    //      "<img style='width:150px; height:150px;' src='image/ChuckNorrisGameIMG/"+ 
    //      obj.imgUrl+"'/>";
    // }
    // constructor = method that is called automatily with the new statment
    // c# is use prop and JS this way
    // constructor(imgUrl,Humour){
    //     this.imgUrl = imgUrl;
    //     this.Humour = Humour; 
    // }

    

}

//create a copy of class on the browser memory
let objIndex = new GameImgRepository();

// //sendtobox gets info from new
// let object01 = new GameImgRepository("sad.png","sad");
// object01.sendToBox('one', object01);

// let object02 = new GameImgRepository("happy.jpeg","happy");
// object02.sendToBox('two', object02);

// let object03 = new GameImgRepository("suspicous.jpg","suspicous");
// object03.sendToBox('three', object03);

// let object04 = new GameImgRepository("sly.jpeg","sly");
// object04.sendToBox('four', object04);

// let object05 = new GameImgRepository("angry.jpeg","angry");
// object05.sendToBox('five', object05);

// let object06 = new GameImgRepository("depressed.jpeg","depressed");
// object06.sendToBox('six', object06);

// let object07 = new GameImgRepository("scared.jpg","scared");
// object07.sendToBox('seven', object07);

// let object08 = new GameImgRepository("serious.png","serious");
// object08.sendToBox('eight', object08);



// console.log(object01.imgUrl);
// console.log(object02.Humour);

