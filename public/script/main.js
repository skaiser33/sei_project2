const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    target = document.querySelector('.menu-btn_burger')
    console.log(target)
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    console.log(menuBtn)
    menuOpen = false;
  }
})
