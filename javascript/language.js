// ملف language.js – التحكم في الترجمة (عربي/إنجليزي)
const translations = {
  ar: {
    whoami: "أنا مين ؟",
    about: "About",
    aboutText: "Have enough energy to make the world a better place before i die🔥",
    lostYears: "I am the one who lost years of my life",
    whatMakesMeSpecial: "الذى يُميز Ahmed_Elhadidy 😍",
    randomVideoBtn: "فيديو عشوائي",
    quotesTitle: "اقتباسات عشوائية",
    randomQuoteBtn: "اقتباس عشوائي",
    heartTitle: "قلوب عشوائية",
    randomHeartBtn: "قلب عشوائي",
    jsAccordionTitle: "أكورديون جافا سكريبت",
    htmlAccordionTitle: "أكورديون HTML",
    timeTitle: "الوقت",
    followText: "يُمكنك متابعة اخر أخبار الموقع و القناة علي",
    projectsLink: "جميع المشاريع",
    sliderLink: "شريط الصور"
  },
  en: {
    whoami: "Who am I?",
    about: "About",
    aboutText: "Have enough energy to make the world a better place before I die 🔥",
    lostYears: "I am the one who lost years of my life",
    whatMakesMeSpecial: "What distinguishes Ahmed_Elhadidy 😍",
    randomVideoBtn: "Random Video",
    quotesTitle: "Random Quotes",
    randomQuoteBtn: "Random Quote",
    heartTitle: "Random Hearts",
    randomHeartBtn: "Random Heart",
    jsAccordionTitle: "JavaScript Accordion",
    htmlAccordionTitle: "HTML Accordion",
    timeTitle: "The Time",
    followText: "You can follow the latest news of the site and channel on",
    projectsLink: "All Projects",
    sliderLink: "Slider Show"
  }
};

let currentLang = localStorage.getItem('lang') || 'ar';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerText = translations[lang][key];
      }
    }
  });
  // تغيير اتجاه الصفحة للغة العربية
  if (lang === 'ar') {
    document.body.style.direction = 'rtl';
    document.querySelector('html').setAttribute('lang', 'ar');
  } else {
    document.body.style.direction = 'ltr';
    document.querySelector('html').setAttribute('lang', 'en');
  }
  // تحديث نص أزرار الترجمة
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.innerText = lang === 'ar' ? '🇬🇧 English' : '🇸🇦 العربية';
  }
}

// تبديل اللغة عند الضغط على الزر
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const newLang = currentLang === 'ar' ? 'en' : 'ar';
      setLanguage(newLang);
    });
  }
});