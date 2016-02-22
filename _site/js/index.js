var $carousel = $('#stages-carousel');
$carousel.carousel({interval: false});
var stgcls = Cookies.get('stage');
if (stgcls != undefined) {
  $('.stage').removeClass('active');
  $(stgcls).addClass('active');
  $carousel.carousel(Number($(stgcls).attr('data-slide-to')));
}

$carousel.carousel({
  interval: false,
});

$carousel.on('slide.bs.carousel', function (event) {
  var stgcls = '.stage-'+event.relatedTarget.id.split('-')[0];
  $('.stage').removeClass('active');
  $(stgcls).addClass('active');
  Cookies.set('stage', stgcls);
});