/**
 * Created by JohnTangarife on 24/03/16.
 */
function showSlider(sliderClass) {
  $('.'+sliderClass).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  });
}

function destroySlider(sliderClass) {
  $('.'+sliderClass).slick('unslick');
}
