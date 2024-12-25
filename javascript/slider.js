
// auto writing title

let i = 1;

const autowriting = () => {
  const title = "Ahmed_Elhadidy";

  tslider.innerText = title.slice(0, i);

  i++;
};

const stopFun = setInterval(autowriting, 400);
// 

const Next = document.getElementById("next");
const prev = document.getElementById("prev");


const imgB = [
  `<img src="imge/popular-02.jpg" alt="">`,
  `<img src="imge/popular-03.jpg" alt="">`,
  `<img src="imge/popular-04.jpg" alt="">`,
  `<img src="imge/popular-05.jpg" alt="">`,
  `<img src="imge/popular-01.jpg" alt="">`
];

let indexImg = 0 ;

slidMain.innerHTML += imgB[indexImg];

slidMain.innerHTML +=`<p class="slideNum">Slide#${indexImg + 1} OF ${imgB.length}</p>`     ;

prev.setAttribute("disabled", "");



Next.addEventListener("click", (eo) => {

 
prev.removeAttribute("disabled");

 

 indexImg++;
 
 slidMain.innerHTML += imgB[indexImg];

 slidMain.innerHTML += `<p class="slideNum">Slide#${indexImg + 1} OF ${imgB.length}</p>`     ;

 if(indexImg+1 == imgB.length ){

  Next.setAttribute("disabled", "" )

 }
parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num");

parentNumbers.getElementsByTagName("button")[indexImg].classList.add("active-num")
    
});


prev.addEventListener("click", (eo) => { 

 Next.removeAttribute("disabled"   );

 indexImg--;

 slidMain.innerHTML += imgB[indexImg];
 
 slidMain.innerHTML += `<p class="slideNum">Slide#${indexImg + 1} OF ${imgB.length}</p>` ;

 if(indexImg == 0){
  
  prev.setAttribute("disabled", "" )

 }
 parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num");

 parentNumbers.getElementsByTagName("button")[indexImg].classList.add("active-num")
 })

 const allButtons = document.querySelectorAll(".myNumber")
 
 const parentNumbers = document.getElementsByClassName("numbres")[0]
 
 
 
 allButtons.forEach(  (item, index) => {
     
     item.addEventListener("click", (eo) => {
 
         // remove the current "active-num" => add "active-num" to target element
        parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num")
        
        
        item.classList.add("active-num")
 
        slidMain.innerHTML += imgB[indexImg];
         slidMain.innerHTML += `<p class="slideNum">Slide#${index+ 1} OF ${imgB.length}</p>` ;
 
         indexImg = index
 
 
     // last index

     if (index == imgB.length-1) {
        Next.setAttribute("disabled",  "disabled"  )
        prev.removeAttribute("disabled"   )
    
         // first index
    } else if (index == 0){
        Next.removeAttribute("disabled"   )
        prev.setAttribute("disabled",  "disabled"  )
    } else {
        Next.removeAttribute("disabled"   )
        prev.removeAttribute("disabled"   )
    }
 
     });

    
 });
 
 