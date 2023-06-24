let bouton = document.getElementById('button');
let message = document.getElementById('message');
let form = document.getElementById('form');
let link = document.getElementById('link');


const nombreSecret = Math.floor(Math.random() * 100);
let tentative = 3;



bouton.onclick = function(){
    
    const input = document.getElementById('input');

    if(input.value == "")
    {

        message.innerHTML = "Le champ est vide";
        message.style.color = "red";

    }else{

        if( input.value < nombreSecret )
        {

            message.innerHTML = "Le nombre est plus grand que " + input.value + " ";
            message.style.color = "#999";

        }else if( input.value > nombreSecret ){

            message.innerHTML = "Le nombre est plus petit que " + input.value + " ";
            message.style.color = "#999";

        }

        if(tentative == 0){
             
            message.innerHTML = "Ouff vous avez perdu, il fallait trouvé " + nombreSecret + "!";
            message.style.color = "red";
            form.style.display = "none";
            link.style.display = "flex";

        }

        tentative -- ;

        if(input.value == nombreSecret){
             
            message.innerHTML = "Bravo, vous avez trouvé le nombre qui est " + nombreSecret + "!";
            message.style.color = "green";
            form.style.display = "none";
            link.style.display = "flex";

        }


    }

}