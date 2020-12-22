$(() => {
  const burger = $('#burger');
  const vertMenu = $('.header-vertical-menu-wrapper');

  const contentItems = $('.content__body__items');
  const itemInContentItems = $('.content__body__items__item');
  const itemAvailability = $('.content__body__items__item-availability');
  const itemDescription = $('.content__body__items__item-description');
  const itemImage = $('.content__body__items__item__img');

  const classNameInterface = "content__body__items__view-interface";
  const classNameList = "content__body__items__view-list";
  const nameItemInContentItemsInterface = "interface-item";
  const nameItemInContentItemsList = "list-item";
  const nameItemAvailibilatyInterface = "item-availability-interface";
  const nameItemAvailabilityList = "item-availability-list";
  const nameItemDescriptionInterface = "item-description-interface";
  const nameItemDescriptionList = "item-description-list";
  const namItemImageInterface = "item-image-interface";
  const namItemImageList = "item-image-list";


  const btnViewModeList = $('#view-mode-list');
  const btnViewModeInterface = $('#view-mode-interface');

  const changeViewToList = () => {    
    contentItems.removeClass(classNameInterface).addClass(classNameList);
    itemInContentItems.removeClass(nameItemInContentItemsInterface).addClass(nameItemInContentItemsList);
    itemAvailability.removeClass(nameItemAvailibilatyInterface).addClass(nameItemAvailabilityList);
    itemDescription.removeClass(nameItemDescriptionInterface).addClass(nameItemDescriptionList);
    itemImage.removeClass(namItemImageInterface).addClass(namItemImageList);

  };
  const changeViewToInterface = () => {
    contentItems.removeClass(classNameList).addClass(classNameInterface);
    itemInContentItems.removeClass(nameItemInContentItemsList).addClass(nameItemInContentItemsInterface);
    itemAvailability.removeClass(nameItemAvailabilityList).addClass(nameItemAvailibilatyInterface);
    itemDescription.removeClass(nameItemDescriptionList).addClass(nameItemDescriptionInterface);
    itemImage.removeClass(namItemImageList).addClass(namItemImageInterface);
  };

  burger.on('click', () => {
    vertMenu.toggle();
  });

  btnViewModeList.on('click', changeViewToList);
  btnViewModeInterface.on('click', changeViewToInterface);

  $('a').on('click', (e) => {
    e.preventDefault();
  });

})