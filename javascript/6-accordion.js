const mains = document.createElement("div");

// plus.addEventListener("click",  (eo) => {

//     contentAc.style.display = "block"

//

//      plus.style.display ="none"

//  })
// mains.addEventListener("click",  (eo) => {

//     contentAc.style.display = "none"

//         mains.remove()

//      plus.style.display ="block"

//  })

const allPlus = document.querySelectorAll(".plus");

allPlus.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const contentAc =
      eo.target.parentElement.parentElement.getElementsByClassName(
        "content"
      )[0];

    contentAc.classList.toggle("active");

    contentAc.classList.toggle("hide-plus");

    if (contentAc.classList.contains("active")) {
      contentAc.style.height = `${contentAc.scrollHeight}px`;
    } else {
      contentAc.style.height = "0";
    }

    if (contentAc.classList.contains("hide-plus")) {
      item.innerText = "_";

      item.style.transform = "translateY(-10px)";
    } else {
      item.innerText = "+";
      item.style.transform = "translateY(0)";
    }
  });
});
// ===============================
/*=================
 * The DegtaleClock
==================
*/
 
const digetalClock = () => {
  let now = new Date();

  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let date = now.toDateString();
  let pmam = "AM";

  if(hour > 12){

    hour = hour-12

    pmam = "PM"
  }

  if(hour < 10){

    hour =`0${hour}` 
  
}
  if(hour == 0){

    hour =`12` 
  
}

  if(sec < 10){

    sec =`0${sec}` 

   
  }

  if(min < 10){

    min =`0${min}` 

   
  }





  const clock = `
  <div class="dete">
${date} 
 </div>
  <div class="time">
    ${hour} : ${min} : ${sec} ${pmam}
  </div>`;
   
    colokContainer.innerHTML = clock;
}

digetalClock();

setInterval(digetalClock,1000)
