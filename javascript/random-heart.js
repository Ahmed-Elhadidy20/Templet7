const randomhearts = document.getElementById("randomheart") 

const hearts = () => { 

  const paerntheart = document.createElement("div");

  containerheart.append(paerntheart);

  const createRandomHeart = setInterval(() => {
    const heart = document.createElement("div");

    paerntheart.append(heart);

    heart.classList.add("heart");

    heart.innerHTML = ` &#129505; &#128156;`;

    heart.style.left = `${Math.random() * 100}%`;

    heart.style.animationDuration = `${(Math.random() + 0.5) * 2}s`;
  }, 100);



  setTimeout(() => {
    clearInterval(createRandomHeart);
  }, 2000);

  setTimeout(() => {
    paerntheart.remove();
  }, 4000); 
  

 
 }


 randomhearts.addEventListener("click", (eo) => {
  
  hearts()

});
