const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  //if the menuBtn is clicked
  if (!menuOpen) {
//add a class of open
    menuBtn.classList.add('open');
    // menuBtn.textContent = 
    console.log(menuBtn)
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    console.log(menuBtn)
    menuOpen = false;
  }
})
