
const arrimg = [

    ` <img src="imge/popular-01.jpg"class="img-slider">`,
    `<img src="imge/popular-02.jpg"class="img-slider">`,
   ` <img src="imge/popular-03.jpg"class="img-slider">`,
    `<img src="imge/popular-04.jpg"class="img-slider">`,
   ` <img src="imge/popular-05.jpg"class="img-slider">`
 
]

let indexImg = 0;
slidercontainer.innerHTML += arrimg[indexImg]
pre.setAttribute("disabled",  "disabled"  )
slidercontainer.innerHTML += `  <p>slide #${indexImg + 1} of ${arrimg.length}</p>  `




next.addEventListener("click", (eo) => {
  

    pre.removeAttribute("disabled"   )

    indexImg++
    slidercontainer.innerHTML += arrimg[indexImg]
    slidercontainer.innerHTML += `  <p>slide #${i+1} of ${arrimg.length}</p>  `
    

if (indexImg+1   == arrimg.length) {
    next.setAttribute("disabled",  "disabled"  )
}

parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num")
parentNumbers.getElementsByTagName("button")[indexImg].classList.add("active-num")

})



pre.addEventListener("click", (eo) => {
    next.removeAttribute("disabled"   )
    indexImg--

    slidercontainer.innerHTML += arrimg[indexImg]
    slidercontainer.innerHTML += `  <p>slide #${i+1} of ${arrimg.length}</p>  `

if (indexImg == 0) {
    pre.setAttribute("disabled",  "disabled"  )
}  


parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num")
parentNumbers.getElementsByTagName("button")[indexImg].classList.add("active-num")

})



const allButtons = document.querySelectorAll(".mynumber")
const parentNumbers = document.getElementsByClassName("numbers")[0]



allButtons.forEach(  (item, index) => {
    
    item.addEventListener("click", (eo) => {

        // remove the current "active-num" => add "active-num" to target element
       parentNumbers.getElementsByClassName("active-num")[0].classList.remove("active-num")
        item.classList.add("active-num")




        slidercontainer.innerHTML += arrimg[index]
        slidercontainer.innerHTML += `  <p>slide #${index+1} of ${arrimg.length}</p>  `

        indexImg = index


    // last index
if (index == arrimg.length-1) {
    next.setAttribute("disabled",  "disabled"  )
    pre.removeAttribute("disabled"   )

     // first index
} else if (index == 0){
    next.removeAttribute("disabled"   )
    pre.setAttribute("disabled",  "disabled"  )
} else {
    next.removeAttribute("disabled"   )
    pre.removeAttribute("disabled"   )
}

    })
});

