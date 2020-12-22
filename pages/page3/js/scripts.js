$(document).ready(()=>{
  const burger = $('#burger');
  const vertMenu = $('.header-vertical-menu-wrapper');

  $("#promo-scroll-id").on("click", function (event) {
		var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
			top = $(id).offset().top; //определим высоту от начала страницы до якоря
	  $('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
	});

  $('a').on('click', (e)=> {
    e.preventDefault();
  })

  burger.on('click', () => {
    vertMenu.toggle();
  });
  
})