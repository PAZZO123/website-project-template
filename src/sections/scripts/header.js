console.log('Header script loaded');
function initHeader() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');

      // Change icon to close
      if (!menu.classList.contains('hidden')) {
        btn.src = '../Images/close.svg';
      } else {
        btn.src = '../Images/Group 5.svg';
      }
    });
  } else {
    // Retry after short delay
    setTimeout(initHeader, 100);
  }
}

initHeader();
