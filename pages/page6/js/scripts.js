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

  const owl = $('.owl-carousel');
  owl.owlCarousel({
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true
  });

  $("#header-down-btn-link").on("click", function (event) {
		event.preventDefault(); //опустошим стандартную обработку
		var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
			top = $(id).offset().top; //определим высоту от начала страницы до якоря
	$('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
	});
})