const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slider2 = document.querySelector('.slider-2');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft2 = document.querySelector('.arrow-left-2');
const arrowRight2 = document.querySelector('.arrow-right-2');


const sliderWidth = sliderContainer.clientWidth;
let currentTranslate = 0;

arrowLeft.addEventListener('click', () => {
  if (currentTranslate < 0) {
    currentTranslate += sliderWidth;
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }
});

arrowRight.addEventListener('click', () => {
  const sliderOverflow = slider.scrollWidth - sliderWidth;
  if (currentTranslate > -sliderOverflow) {
    currentTranslate -= sliderWidth;
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }


});
arrowLeft2.addEventListener('click', () => {
  if (currentTranslate < 0) {
    currentTranslate += sliderWidth;
    slider2.style.transform = `translateX(${currentTranslate}px)`;
  }
});

arrowRight2.addEventListener('click', () => {
  const sliderOverflow = slider.scrollWidth - sliderWidth;
  if (currentTranslate > -sliderOverflow) {
    currentTranslate -= sliderWidth;
    slider2.style.transform = `translateX(${currentTranslate}px)`;
  }


});

// Get the "Filtros" link element
const filtrosLink = document.getElementById('filtros');

// Get the "Precio" and "idioma" link elements
const precioLink = document.getElementById('precio');
const idiomaLink = document.getElementById('idioma');

// Add a click event listener to the "Filtros" link
filtrosLink.addEventListener('click', function(event) {
  // Prevent the default link behavior
  event.preventDefault();

  // Toggle the visibility of the "Precio" and "idioma" links
  precioLink.style.display = precioLink.style.display === 'none' ? 'block' : 'none';
  idiomaLink.style.display = idiomaLink.style.display === 'none' ? 'block' : 'none';
});

// Get the "Categorias" link element
const categoriasLink = document.getElementById('categorias');

// Add a click event listener to the "Categorias" link
categoriasLink.addEventListener('click', function(event) {
  // Prevent the default link behavior
  event.preventDefault();

  // Get all the category links except for the "Categorias" link
  const categoryLinks = document.querySelectorAll('.category a:not(#categorias)');

  // Loop through the category links and trigger their click event
  categoryLinks.forEach(function(link) {
    link.click();
  });
});
