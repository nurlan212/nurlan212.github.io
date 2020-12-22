$(() => {
  const burger = $('#burger');
  const vertMenu = $('.header-vertical-menu-wrapper');
  const btnOrder = $('.price__list__item__footer__btn');
  const btnPriceModal = $('.price-modal__btn');
  const orderModalWindow = $ ('.price-modal');  

  const transportData = {
    transport1: {
      img: 'transport1.jpg',
      titleHidden: 'Газель 3 метра / 1,5 тонны ',
      title: 'Газель 3 метра',
      list: ['Ширина 2 м', 'Высота 2 м', 'Объем 16 м³', 'Грузоподъемность 1,5 т']
    },
    transport2: {
      img: 'transport2.jpeg',
      titleHidden: 'Каблук 1,5 метра / 100 кг ',
      title: 'Каблук 1,5 метра',
      list: ['Ширина 1,7 м', 'Высота 1,5 м', 'Объем 9 м³', 'Грузоподъемность 100кг']
    },
    transport3: {
      img: 'transport3.png',
      titleHidden: 'Грузовик 5 метра / 10 тонны ',
      title: 'Грузовик 5 метра',
      list: ['Ширина 2 м', 'Высота 1,5 м', 'Объем 30 м³', 'Грузоподъемность 10 т']
    }
  };

  const transportTab = $('.carpark__tabs-item');
  const transportImg = $('.carpark__content-2 img');
  const transportTitle = $('.carpark__content__title');
  const transportTitleHidden = $('.carpark__content__title-hidden');
  const transportList = $('.carpark__content__list');

  const getTransportData = (id)=> {
    let img="";
    let data = {};
    
    switch (id) {
      case 'transport1':
        data = transportData.transport1;
        break;
      case 'transport2':
        data = transportData.transport2;
        break;
      case 'transport3':
        data = transportData.transport3;
    }

    return data;
  };

  const setListData = (list) => {
    transportList.empty();
    for(let listItemText of list) {
      const newListItem = $(`<li class="carpark__content__list__item">${listItemText}</li>`);
      transportList.append(newListItem);
    }
  };

  showContent = (e) => {
    let id = $(e.currentTarget).attr("id");
    let data = getTransportData(id);
    let imgName = data.img;
    imgPath = `uploads/${imgName}`;
    transportImg.attr('src', imgPath);
    transportTitleHidden.text(data.titleHidden);
    transportTitle.text(data.title);
    setListData(data.list);
  };

  $('a').on('click', (e) => {
    e.preventDefault();
  });
 
  transportTab.on('click', showContent);

  burger.on('click', () => {
    vertMenu.toggle();
  });

  btnOrder.on('click', () => {    
    orderModalWindow.css('display', 'flex');    
  });

  btnPriceModal.on('click', (e) => {
    orderModalWindow.css('display', 'none');
    e.preventDefault();
  }); 

  $('#transport1').click();
})