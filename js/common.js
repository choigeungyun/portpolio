
$("#section h1").animate({ opacity: 1 }, 1000)
$("#section h2").delay(500).animate({ opacity: 1 }, 1000)
let pos = $("#content").offset().top-500;
let timer = 200
let state = 1;
$(window).on('scroll', function() {
  if ( $(window).scrollTop() >= pos && state == 1 ) {
    state = 0;
    $("#content > div").each(function() {
      $(this).delay($(this).index()*timer).animate({ opacity: 1, top: 0 })
    })
  }
  else if ( $(window).scrollTop() < pos && state == 0 ) {
    state = 1;
    $('#content > div').animate({ opacity: 0, top: 200 })
  }
})
