$(() => {

  const verticalMenu = $('.header__vertical-menu-wrapper');
  const menuGamburger = $('.header-menu__gamburger-link');

  let isClicked = false;
  const showMenu = () => {
    if(isClicked) {
      verticalMenu.hide();
      isClicked = false;
    } else {
      verticalMenu.show();
      isClicked = true;
    }    
  };

  menuGamburger.on('click', showMenu);
  $('a').on('click', (e)=> {
    e.preventDefault();
  })

  $('.owl-carousel').owlCarousel({      
      margin:10,
      center: true,
      items:3,
      loop: true,
      nav: true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav: false,
              dots: false
          },
          830:{
              items:2
          },
          1250: {
            items: 3
          }
      }
  });
})