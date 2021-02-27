const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    console.log(menuBtn)
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    console.log(menuBtn)
    menuOpen = false;
  }
})
