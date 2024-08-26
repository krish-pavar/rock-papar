
let  stone=document.querySelector("#stone");
let paper=document.querySelector("#paper");
let sisor=document.querySelector("#sisor");
let boxs=document.querySelectorAll(".box");
let resalts=document.querySelector(".return");
 const you0pera=document.querySelector("#youscore");
 const comp0pera=document.querySelector("#compscore");

let youscore=0;
let compscore=0;
let winner=(userchoice, computerchoicer)=>{
    
     if(userwiner=="true"){
   
    youscore ++;
 you0pera.innerText = youscore;
  
         console.log("you win the game");
         resalts.innerText=(`you wins,${userchoice} defeets ${computerchoicer} `);
     
resalts.style.backgroundColor="green";

         }
         else{
            compscore ++;
            comp0pera.innerText = compscore;
            console.log("computer win the game");

            resalts.innerText=(` you loss, ${computerchoicer} defeets ${userchoice}`);  
           
               
resalts.style.backgroundColor="red";


      
          
       

         }
         
      }




 drow=()=>{console.log("the game has drown")

    resalts.innerText=(` game has drowen both choices same`)
   
resalts.style.backgroundColor="white";

  }
let output=(userchoice)=>{
    console.log("userchoice=",userchoice);
    const computerchoicer=computerchoice();
   console.log("computerchoice=",computerchoicer);
   

   if(userchoice === computerchoicer){drow();}
   else{
    userwin="true";
    
        if(userchoice=="stone"){
     userwiner=computerchoicer=="sisor"?"true":"false";
     }
     else if(userchoice=="paper"){
     userwiner=computerchoicer=="stone"?"true":"false";
     }
     else if(userchoice=="sisor"){
     userwiner=computerchoicer=="paper"?"true":"false";
     }
     winner(userchoice, computerchoicer);
     }
   

  
   




  

}

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
       
 let userchoice=box.getAttribute("id");
 output(userchoice);
  })
 
})

let computerchoice=()=>{
    let arr=["stone","paper","sisor"];
    let randomindx=Math.floor(Math.random()*3);
    return arr[randomindx];
    
}


