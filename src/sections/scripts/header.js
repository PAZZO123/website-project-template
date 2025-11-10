console.log('Header script loaded');

function initHeader() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');

      if (!menu.classList.contains('hidden')) {
        btn.innerHTML = `
          <svg width="46" height="30" viewBox="0 0 58 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.10811 9.11842L0 19.1053L8.64865 28.3493L31.5135 30L39 19.0227L28 7L1.10811 9.11842Z" fill="currentColor"/>
            <path d="M21.072 24L17.52 19.008L17.112 18.624L12.624 12.6H15.24L18.48 17.04L18.888 17.376L23.688 24H21.072ZM12.408 24L17.112 17.664L18.336 19.248L14.952 24H12.408ZM19.056 18.6L17.808 17.064L20.952 12.6H23.472L19.056 18.6Z" fill="white"/>
          </svg>
        `;
      } else {
  
        btn.innerHTML = `
          <svg width="39" height="23" viewBox="0 0 39 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.10811 2.11842L0 12.1053L8.64865 21.3493L31.5135 23L39 12.0227L28 0L1.10811 2.11842Z" fill="currentColor"/>
            <line x1="10" y1="6" x2="26" y2="6" stroke="#EFECEA" stroke-width="2"/>
            <line x1="10" y1="11" x2="26" y2="11" stroke="#EFECEA" stroke-width="2"/>
            <line x1="10" y1="16" x2="26" y2="16" stroke="#EFECEA" stroke-width="2"/>
          </svg>
        `;
      }
    });
  } else {
    setTimeout(initHeader, 100);
  }
}

initHeader();
