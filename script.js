let finish= document.querySelector(".finish");
let quizImage= document.querySelector(".quizImage");


// if("black" ==="black" && 41 > 40)
//     {quizImage.src="cleo1.png";}






finish.addEventListener("click", function() {
    console.log("hello");
    let pinkBlack= document.querySelector(".pinkBlack").value;
    let favNumber= document.querySelector(".favNumber").value;
    favNumber= Number(favNumber);
    console.log(pinkBlack);
    console.log(favNumber);


    
    if (pinkBlack==="Pink" && favNumber<19){
        quizImage.src="Draculaura.png";
        console.log("Drac")
    
    }
    else if(pinkBlack==="Pink"&&favNumber>86){quizImage.src="CA Cupid.png";}
    else if(pinkBlack==="Black"&&favNumber>40){quizImage.src="Cleo.png";}
     else if(pinkBlack==="Black"&&favNumber>19){quizImage.src="Clawdeen.png"; 
     console.log("Clawdeen")}
     else{quizImage.src="Val.png"}
  
   

    
});