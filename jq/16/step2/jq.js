const pics = $(".pic");
const lightbox = $("#lightbox");
const lightboxImage = $("#lightboxImage");

pics.on('click', function () {
  const bigLocation = $(this).attr("data-src");
  lightboxImage.load(bigLocation);
  $('html').addClass('all_scrollFixed');
  lightbox.css('display', 'block');
})

lightbox.on('click', function () {
  lightbox.css('display', 'none');
  $('html').removeClass('all_scrollFixed');
})