$(document).ready(()=>{

  const burger = $('#burger');
  const vertMenu = $('.header-vertical-menu-wrapper');
  
  const galleryPhoto = $('.promo__content__img-wrapper__image');
  const modalContainer = $('.modal');
  const modalWindow = $('.modal__img');
  const clickCount = 0;

  const showModal = () => {
    modalContainer.css('display', 'flex');
  }

  const hideModal = () => {
    modalContainer.css('display', 'none');
  }

  const setPathToImg = (e)=> {
    const pathToImg = $(e.currentTarget).attr('src');
    modalWindow.attr('src', pathToImg);
  }

  burger.on('click', () => {
    vertMenu.toggle();
  });


  $(galleryPhoto).on('click', (e) => {
    setPathToImg(e);
    showModal();    
  });

  $(modalWindow).on('click', (e) => {
    hideModal();
  })

  $('a').on('click', (e) => {
    e.preventDefault();
  });

  $('form').on('submit', (e) => {
    e.preventDefault();
  });
});