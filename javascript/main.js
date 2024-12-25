
{//  toggle the light & dark mode  
    const dark = document.getElementById("dark");
    const body = document.getElementById("body");

    dark.addEventListener("click", (eo) => {
      
      body.classList.toggle("dark");

    });
  }


  {// when hover bon change color
  const hiddenUl = document.getElementById("hiddenul");

  const changeColor = document.getElementById("changecolor");

  changeColor.addEventListener("mousemove", (eo) =>{

    hiddenUl.style.display = "block"
  })
  changeColor.addEventListener("mouseout", (eo) =>{

    hiddenUl.style.display = "none"
  })}

  
 { // change color header Bg 
    
   const headerbg = document.getElementById("headerbg");

  const header = document.getElementById("header");

  const webTitle = document.querySelector("#header > h1");

  const dark = document.getElementById("dark");


  const reast = document.getElementById ("reast");

  headerbg.addEventListener("click", (eo) =>{

    const random = Math.round (Math.random () * 360)

    header.style.background = `hsl(${random}, 100%, 50%)`


    webTitle.style.background = `hsl(${random}, 100%, 50%)`

    dark.style.background = `hsl(${Math.round (Math.random () * 360)}, 100%, 50%)`

    reast.style.display = "block"

  })

  // reast color

  reast.addEventListener ("click" , (eo) => {
   
    header.style.background = "#3d4a59"

    webTitle.style.background = "#3d4a59"

    dark.style.background = "#3d4a59"

    reast.style.display ="none"

  })}

  
{ // change Color h1
  const Titlebg = document.getElementById("titlebg");

  const titlecolor = document.getElementById("titlecolor");

  const headTitle = document.querySelectorAll("h1:not(#header > h1)");

  
  Titlebg.addEventListener("click", (eo)=>{

  const random = Math.round (Math.random() * 360 )
  
    for (let i = 0; i < headTitle.length; i++) {
      
      headTitle[i].style.backgroundColor = `hsl(${random}, 50%, 47%)`;
    }

})


titlecolor.addEventListener("click", (eo)=>{

  const random = TColor ()

    for (let i = 0; i < headTitle.length; i++) {
      
      headTitle[i].style.color = `hsl(${random}, 50%, 47%)`;
    }

})}

const TColor = () => { 
  return Math.round (Math.random () * 360)
 }



  