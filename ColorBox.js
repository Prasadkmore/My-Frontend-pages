let button=document.querySelector('button');

button.style.width="200px";
button.style.height="180px";
button.innerText="Grey";


button.onclick=()=>{

    if(button.style.backgroundColor==="white"){

    button.style.backgroundColor="green";
    button.innerText="Green";
    

    }else if(button.style.backgroundColor==="green"){

        button.style.backgroundColor="brown";
        button.innerText="Brown";
    }
    else if(button.style.backgroundColor==="brown"){

        button.style.backgroundColor="red"; 
        button.innerText="Red";  
    }
    else if(button.style.backgroundColor==="red"){

        button.style.backgroundColor="pink";
        button.innerText="Pink";
        
    }
    else if(button.style.backgroundColor==="pink"){

        button.style.backgroundColor="yellow";
        button.innerText="Yellow";
        
    }
    else if(button.style.backgroundColor==="yellow"){

        button.style.backgroundColor="black";
        button.innerText="Black";
        
    }
    else if(button.style.backgroundColor==="black"){

        button.style.backgroundColor="orange";
        button.innerText="Orange";
        
    }
    else if(button.style.backgroundColor==="orange"){

        button.style.backgroundColor="aqua";
        button.innerText="Aqua";
        
    }
    else if(button.style.backgroundColor==="aqua"){

        button.style.backgroundColor="blue";
        button.innerText="Blue";
        
    }

    else{

        button.style.backgroundColor="white";
        button.innerText="White";
    }
  
}