
//This is a going to be done by you, the architecture or owner
class JokesRepository{




    showCustomizedJoke(response){
    document.getElementById("CategoryJoke").innerHTML = "<h3>"+response.value+"</h3>";
    // let answer = prompt("do you want more jokes?");

    // if(answer=="yes"){
    //     alert("thanks but you didn't pay for my jokes");
    // }

    // else{
    //     alert("okay boss, no more jokes for you jerk!");
    // }
    }



    callJokeRandomly01(){
    fetch('https://api.chucknorris.io/jokes/random')
        //this line filter just the jokes info NOT the http response
        //convert to json
        .then((response) => response.json())
        .then((response) => 
        ///here you communcate to your html
        //ready to put in log
        document.getElementById("random01").innerHTML = response.value
        ); 
    }

    callJokeRandomly02(){
    fetch('https://api.chucknorris.io/jokes/random')
        //this line filter just the jokes info NOT the http response
        //convert to json
        .then((response) => response.json())
        .then((response) => 
        ///here you communcate to your html
        //ready to put in log
        document.getElementById("random02").innerHTML = response.value
        ); 
    }

    callJokeByCategory(){
    fetch('https://api.chucknorris.io/jokes/random?category'
    + $("#choiceCategory :selected").text() )
        
        .then((response) => response.json())
        .then((response) => 
        
        this.showCustomizedJoke(response)
        ); 
    }


    //whereToPutid the ID of the Html element that will receive the joke
    //26/10/22
    //Joke Placed inside whereToPutid 
    callJokeByCategories(categoryName, whereToPutid){
    fetch('https://api.chucknorris.io/jokes/random?category'
    + categoryName)
        
        .then((response) => response.json())
        .then((response) => 
        
        document.getElementById(whereToPutid).innerHTML = response.value
        ); 
    }

    //+ document.getElementById("choiceCategory").value

}