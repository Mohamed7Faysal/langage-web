let arabic = document.getElementById ('arabic');
let english = document.getElementById ('english');
let title = document.getElementById ('title');
let welcome = document.getElementById ('welcome-text');
let about = document.getElementById ('about');
let aboutText = document.getElementById ('about-text');
let contact = document.getElementById ('contact');
arabic.onclick = () => {
  setLanguage ('arabic');
  localStorage.setItem ('lang', 'arabic');
};
english.onclick = () => {
  setLanguage ('english');
  localStorage.setItem ('lang', 'english');
};
onload = () => {
  setLanguage (localStorage.getItem ('lang'));
};

function setLanguage (getLanguage) {
  if (getLanguage === 'arabic') {
    title.innerHTML = 'مبرمج شيار';
    welcome.innerHTML = 'مرحبا بكم في صفحة مبرمج شيار';
    about.innerHTML = 'حولنا';
    aboutText.innerHTML = 'انا استاذ برمجيات ومهندس برمجيات';
    contact.innerHTML = 'اتصل بنا';
  } else if (getLanguage === 'english') {
    title.innerHTML = 'Coder Shiyar';
    welcome.innerHTML = 'Welcome to website of coder shiyar';
    about.innerHTML = 'About us';
    aboutText.innerHTML = 'I am a teacher and a software developer';
    contact.innerHTML = 'contact us';
  }
}
