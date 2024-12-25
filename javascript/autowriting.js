// let i = "Ahmed_Elhadidy2"

// const tetFun = () => {

//     website.innerText = i;

// }

// // setTimeout( autoWright, 1000)

// // website.addEventListener("click", (eo) => {

// //     setTimeout( autoWright, 1000)
// //  })

// // setInterval( autoWright, 1000)

// // website.addEventListener("click",(eo) => {

// //     setInterval( autoWright, 1000)

// //  })

// const stopFun = setInterval( tetFun, 1000);

//  website.addEventListener("click",(eo) => {

//     clearInterval (stopFun)
//   })

let i = 1;

let indexT = 1;

const autowriting = () => {
  const title = "Ahmed_Elhadidy";

  website.innerText = title.slice(0, i);

  i++;

  web.innerText = title.slice(0, indexT);

  indexT++;

  if (title.length < indexT) {
    // clearInterval(stopFun)

    indexT = 1;
  }
};

const stopFun = setInterval(autowriting, 400);

// let i = 1
//  const awtowriting =  setInterval(() => {

//     const title ="Ahmed_Elhadidy"

//     website.innerText = title .slice(0,i);

//     i++

//     if (title.length < i ){

//         i = 1;
//     }

//  }, 300)
