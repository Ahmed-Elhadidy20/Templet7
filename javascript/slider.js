// الكتابة التلقائية للعنوان (موجودة بالفعل)
let i = 1;
const autowriting = () => {
  const title = "Ahmed_Elhadidy";
  tslider.innerText = title.slice(0, i);
  i++;
};
const stopFun = setInterval(autowriting, 400);

// ---------------------------------
// سلايدر الصور (تم إصلاحه)
const Next = document.getElementById("next");
const prev = document.getElementById("prev");
const slidMain = document.getElementById("slidMain");
const parentNumbers = document.getElementsByClassName("numbres")[0];

const imgB = [
  `<img src="imge/popular-01.jpg" alt="Image 1">`,
  `<img src="imge/popular-02.jpg" alt="Image 2">`,
  `<img src="imge/popular-03.jpg" alt="Image 3">`,
  `<img src="imge/popular-04.jpg" alt="Image 4">`,
  `<img src="imge/popular-05.jpg" alt="Image 5">`
];

let indexImg = 0;

// دالة لعرض الشريحة الحالية
function updateSlider() {
  slidMain.innerHTML = imgB[indexImg];
  slidMain.innerHTML += `<p class="slideNum">Slide #${indexImg + 1} of ${imgB.length}</p>`;
}

// عرض الشريحة الأولى
updateSlider();
prev.setAttribute("disabled", "");

// حدث زر التالي
Next.addEventListener("click", () => {
  if (indexImg + 1 < imgB.length) {
    indexImg++;
    updateSlider();
    prev.removeAttribute("disabled");
  }
  if (indexImg + 1 === imgB.length) {
    Next.setAttribute("disabled", "");
  }
  // تحديث الصنف active-num على الأزرار
  document.querySelectorAll(".myNumber").forEach((btn, idx) => {
    btn.classList.toggle("active-num", idx === indexImg);
  });
});

// حدث زر السابق
prev.addEventListener("click", () => {
  if (indexImg > 0) {
    indexImg--;
    updateSlider();
    Next.removeAttribute("disabled");
  }
  if (indexImg === 0) {
    prev.setAttribute("disabled", "");
  }
  document.querySelectorAll(".myNumber").forEach((btn, idx) => {
    btn.classList.toggle("active-num", idx === indexImg);
  });
});

// أزرار الأرقام (1,2,3,4,5)
const allButtons = document.querySelectorAll(".myNumber");
allButtons.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    indexImg = idx;
    updateSlider();
    // إدارة حالة تعطيل الأزرار
    if (indexImg === 0) {
      prev.setAttribute("disabled", "");
      Next.removeAttribute("disabled");
    } else if (indexImg === imgB.length - 1) {
      Next.setAttribute("disabled", "");
      prev.removeAttribute("disabled");
    } else {
      prev.removeAttribute("disabled");
      Next.removeAttribute("disabled");
    }
    // تحديث الصنف active-num
    allButtons.forEach(b => b.classList.remove("active-num"));
    btn.classList.add("active-num");
  });
});
