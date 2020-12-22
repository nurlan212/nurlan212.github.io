
$(() => {
  const videoElem = document.getElementById('video-clip');
  const playBtn = $('#play-btn');
  const promoVideoContent = $('.promo-video__content');



  playBtn.on('click', () => {
    const isPaused = videoElem.paused;
    if(isPaused){
      videoElem.play();
      promoVideoContent.css('display', 'none');
    }
  });

  $(videoElem).on('click', () => {
    const isPaused = videoElem.paused;
    if(!isPaused) {
      videoElem.pause();
      promoVideoContent.css('display', 'flex');
    }
  })

  $('a').on('click', (e) => {
    e.preventDefault();
  });
});