$('#stages-carousel').carousel({
  interval: false,
});


$('#stages-carousel').on('slide.bs.carousel', function (event) {
  var stgcls = '.stage-'+event.relatedTarget.id.split('-')[0];
  $('.stage').removeClass('active');
  $(stgcls).addClass('active');
})

