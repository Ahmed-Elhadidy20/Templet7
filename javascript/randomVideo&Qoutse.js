// Video Random

let indexV = 0;

randomVideo.addEventListener("click", (eo) => {
  let videoRondom = [
    `<iframe id="iframe" width="560" height="315" src="https://www.youtube.com/embed/4FvI5GOFmeA?si=2xBDwQ-Q33Wf5hpX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    `  <iframe id="iframe" width="560" height="315" src="https://www.youtube.com/embed/kqMIy--d35w?si=8JpQcrjvn8LEhUe8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    `    <iframe id="iframe" width="560" height="315" src="https://www.youtube.com/embed/agFMbV32JIc?si=OGVF-KZK4-qRrl6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    `<iframe id="iframe" width="560" height="315" src="https://www.youtube.com/embed/rMttrOd9zWg?si=OXSLya-hrvC2R30t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> `,
    ` <iframe id="iframe" src="https://www.youtube.com/embed/nLFx5D4A6Lw?si=yH2ljw8fs0Ub2W1L"title="YouTube video player" frameborder="0" allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;  web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  ];
  //   containeriframe.innerHTML = videoRondom[Math.floor(Math.random() * videoRondom.length)];

  containeriframe.innerHTML = videoRondom[indexV];

  indexV++;

  if (indexV > videoRondom.length - 1) {
    indexV = 0;
  }

  hearts()

});

//  ======      =======

// Qutes Random

let indexQ = 0;

randomquote.addEventListener("click", (eo) => {
  const quoteRandom = [
    ` <blockquote   dir="rtl" class="sidekick">لا تُبرر أخطائك بل إجلطهم بالمزيد 👿 😂<br><cite>شخص عادى</cite></blockquote>`,

    ` <blockquote   dir="rtl" class="sidekick"> اللى ملوش قلب ملوش رزق 🧡 💪<br><cite> شخص شجاع</cite></blockquote>`,

    ` <blockquote   dir="rtl" class="sidekick"> الثقة بالنفس تصنع المُعجزات 😉<br><cite> شخص عارف قيمة نفسة</cite></blockquote>`,

    ` <blockquote   dir="rtl" class="sidekick">لا تتعلق بأحد فالناس ليست أشجاراً وانت لست قرداً 😂<br><cite>  انسان مجروح</cite></blockquote>`,

    ` <blockquote   dir="rtl" class="sidekick">الحياة ليست سباق ف إهدى كده و relax يا صاحبى 😎<br><cite> شخص رايق </cite></blockquote>`,

    ` <blockquote   dir="rtl" class="sidekick">الحياة إما مغامرة جريئة أو لا شي 🧡 💪<br><cite> شخص مغامر</cite></blockquote>`,

    `<blockquote  dir="rtl" class="sidekick">لا تيأس من الحياة يا صديقى اجعلها تيأس منك <br><cite> أحمد الحديدي</cite></blockquote>`,
  ];

  // parentquotes .innerHTML = quoteRandom[Math.floor(Math.random() * quoteRandom.length )];

  parentquotes.innerHTML = quoteRandom[indexQ];

  indexQ++;

  if (indexQ > quoteRandom.length - 1) {
    indexQ = 0;
  }

  hearts()

});

