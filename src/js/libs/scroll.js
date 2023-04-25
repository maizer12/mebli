const mainBody = document.querySelector('body')
const mainHome = document.querySelector('.main-home')
const headerW = document.querySelector('.header')
function headerScroll(scrollPosition) {
  const header = document.querySelector('.header');
  const scrollClass = 'scrolled';

  function handleScroll() {
    if (window.scrollY > scrollPosition) {
      header.classList.add(scrollClass);
      console.dir()
      if(!mainHome){
        mainBody.style.paddingTop = header.clientHeight + 'px'
      }
    } else {
      header.classList.remove(scrollClass);
      if(!mainHome){
        mainBody.style.paddingTop = '0px'
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
}

headerScroll(20);

const arrowTop = document.querySelector('.arrow-top');

arrowTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= 20) {
    arrowTop.style.display = 'flex';
  } else {
    arrowTop.style.display = 'none';
  }
});
$('.product-images').fotorama({
  width: 'auto',
  height: 'auto',
  nav: 'thumbs',
  width:516,
  click:false,
  thumbwidth: 147,
  thumbheight: 177,
  thumbmargin: 44,
  thumbbordercolor: '#9A2C31',
})