
const matchingElements = document.querySelectorAll(".dropdown");
console.log(matchingElements.length)
matchingElements.forEach((matchingElement) => {
  const selectButton = matchingElement.querySelector('.select')
  selectButton.onclick = () => {
    const menu = matchingElement.querySelector('ul')
    const arrow = matchingElement.querySelector('.icon');
      menu.classList.toggle('clicked');
      arrow.classList.toggle('transform')
      console.log("hi")
      }
})

const body = document.querySelector('body');
const menuButton = document.querySelector('#menuButton');
const closeButton = document.querySelector('#closeButton');
const menuMobile = document.querySelector('.menu-mobile');

menuButton.onclick = () => {
  menuButton.classList.toggle('fa-x');
  menuMobile.classList.toggle('active');
  body.classList.toggle('freeze')
  console.log("clicked")
  //changeColorBackground.classList.toggle('show-gray')
}