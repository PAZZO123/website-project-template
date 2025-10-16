
const loadComponents = (id, url, callback) =>  {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback(); 
    });
};

window.onload = () => {
  loadComponents('header', '/sections/header.html', () => {
    import('/src/sections/scripts/header.js');
  });
  loadComponents('hero', '/sections/hero.html');
  loadComponents('reference','/sections/reference.html');
  loadComponents('about', '/sections/about.html');
  loadComponents('contact', '/sections/contact.html');
  loadComponents('footer', '/sections/footer.html');
};

console.log('loaded header.js');

function initHeader() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  } else {
    // Retry after short delay (because HTML might not be loaded yet)
    setTimeout(initHeader, 100);
  }
}

initHeader();
