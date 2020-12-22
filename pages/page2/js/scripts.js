$(()=> {
  const giftTab = $('.gift__content__tabs__item');
  const burger = $('#burger');
  const menuCloseBtn = $('#menu-close-btn-id');
  const menu = $('.menu');  

  let giftContents = {
    'gift-1': {
      image: 'img-1.png',
      price: '285.000',
      title: 'Giftset "Cà phê phin Việt Nam"',
      text: 'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.',
      textLeft1: 'Loại hạt',
      textLeft2: 'Fine Robusta Blend',
      textRight1: 'Độ cao',
      textRight2: '700 - 800m'
    },
    'gift-2': {
      image: 'img-1.png',
      price: '367.000',
      title: 'Gift-2 content ê phin Việt Nam"',
      text: 'Gift-2 content Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.',
      textLeft1: 'G2ại hạt',
      textLeft2: 'G2ne Robusta Blend',
      textRight1: 'G2ộ cao',
      textRight2: '700 - 800m'
    },
    'gift-3': {
      image: 'img-1.png',
      price: '923.000',
      title: 'Gift-3 "Cà phê phin Việt Nam"',
      text: 'Gift 3 Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.',
      textLeft1: 'G-3 ại hạt',
      textLeft2: 'G3 Fine Robusta Blend',
      textRight1: 'G3Độ cao',
      textRight2: '700 - 800m'
    }
  };

  const changeContent = (e)=>{
    let gift = {};

    let id = $(e.currentTarget).attr('id');
    
    switch(id) {
      case 'tab1':
        gift = giftContents['gift-1'];
        break;
      case 'tab2':
        gift = giftContents['gift-2'];
        break;
      case 'tab3':
        gift = giftContents['gift-3'];
        break;
    };

    let image = gift.image;
    let price = gift.price;
    let title = gift.title;
    let text = gift.text;
    let textLeft1 = gift.textLeft1;
    let textLeft2 = gift.textLeft2;
    let textRight1 = gift.textRight1;
    let textRight2 = gift.textRight2;
    
    $('.gift__content__img__image').attr('src', `uploads/${image}`);
    $('.gift__content__text-wrapper__price').text(price);
    $('.gift__content__text-wrapper__title').text(title);
    $('.gift__content__text-wrapper__text').text(text);
    $('.gift-text-1').text(textLeft1);
    $('.gift-text-2').text(textLeft2);
    $('.gift-text-3').text(textRight1);
    $('.gift-text-4').text(textRight2);    
  };

  burger.on('click', () => {
    menu.css({
      'animation-name': 'menu-show',
      'animation-duration': '1s',
      'animation-timing-function': 'linear',
      'transform': 'translateX(0)'
    });
    burger.hide();
  });

  menuCloseBtn.on('click', () => {
    menu.css({
      'animation-name': 'menu-hide',
      'transform': 'translateX(100%)'
    });
    setTimeout(()=>{
      burger.show();
    }, 1000);    
  });

  giftTab.on('click', changeContent)

  $('a').on('click', (e)=>{
    e.preventDefault();
  });

  $('#tab1').click();
  $('#tab1').focus();
})