// {  //  Chan{  //  Change color Bg Section
//     const sectionbg = document.getElementById ("sectionbg");

//     const mainSection = document.querySelectorAll("section");

//     let index = 0;

//     const arrColor = ["#F29F58","#AB4459","#1F4529","#47663B","#4C4B16"]

//     sectionbg.addEventListener ("click", (eo)=> {

//   mainSection.forEach( item => {

//   item.style.backgroundColor = arrColor[index]
//   });

// {//   if(index < arrColor.length ) {

// //    index++

// // }

// //   else{

// //     index = 0;

// //   }

// // if condtion

//   index < arrColor.length -1 ? index++ : index = 0

// }
//   })}

//    { const sectionbg = document.getElementById ("sectionbg");

//     const mainSection = document.querySelectorAll("section");

//     let index = 0;

//     const arrColor = ["#F29F58","#AB4459","#1F4529","#47663B","#4C4B16"]

//     sectionbg.addEventListener ("click", (eo)=> {

//         const items = Math.round(Math.random() * (arrColor.length -1))

//   mainSection.forEach( item => {

//   item.style.backgroundColor = arrColor[items]

//   });

// {//   if(index < arrColor.length ) {

// //    index++

// // }

// //   else{

// //     index = 0;

// //   }

// // if condtion

// }
//   })}

// const sectionbg = document.getElementById ("sectionbg");

//       const mainSection = document.querySelectorAll("section");

//       sectionbg.addEventListener ("click", (eo)=> {

//           const rgb1 = Math.round(Math.random() * 255)
//           const rgb2 = Math.round(Math.random() * 255)
//           const rgb3 = Math.round(Math.random() * 255)

//     mainSection.forEach( item => {

//     item.style.backgroundColor =`rgb(${rgb1}, ${rgb2} ,${rgb3})`

//       })});

// {const rgb = () => {
//  return  Math.round(Math.random() * 255)

// }
// const sectionbg = document.getElementById ("sectionbg");

//       const mainSection = document.querySelectorAll("section");

//       sectionbg.addEventListener ("click", (eo)=> {

//         const rgb1 = rgb ();
//         const rgb2 = rgb ();
//         const rgb3 = rgb ();

//     mainSection.forEach( item => {

//     item.style.backgroundColor =`rgb(${rgb1}, ${rgb2} ,${rgb3})`

//       })});
// }

// const hex = () => {

//   return `#${Math.random().toString(16).slice(2,8)}`
//  }

// const sectionbg = document.getElementById ("sectionbg");

const mainSection = document.querySelectorAll("section");

//       sectionbg.addEventListener ("click", (eo)=> {

const hex = `#${Math.random().toString(16).slice(2, 8)}`;

//      const hex2 = hex()

//     mainSection.forEach( item => {

//     item.style.backgroundColor = hex2;

//       })});

sectionbg.addEventListener("click", (eo) => {
  
  const hex = `#${Math.random().toString(16).slice(2, 8)}`;

  //   for (let i = 0; i < mainSection.length; i++) {

  //     let item = mainSection[i];

  //     item.style.backgroundColor = hex;
  //   }

  //   for(const i in mainSection){

  //       let item = mainSection [i];

  //   item.style.backgroundColor = hex
  //   }

  //   for(const i of mainSection){

  //       let item = i

  //   item.style.backgroundColor = hex
  //   }

  // let i = 0;

  // while (i < mainSection.length) {

  //    const item = mainSection[i]

  //       item.style.backgroundColor = hex;

  //       i++

  // }

  // let i = 0;
  // do{
  //       const item = mainSection[i]

  //       item.style.backgroundColor = hex;
  //       i++

  // }  while(i < mainSection.length);

  let i = 0;

  for (;;) {
    if (i < mainSection.length) {
      const item = mainSection[i];
      item.style.backgroundColor = hex;
      i++;
    }
    else{

      break   
 }
  }
});



