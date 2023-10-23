const pics = $(".pic");
const lightbox = $("#lightbox");
const lightboxImage = $("#lightboxImage");

pics.on('click', function () {
  const bigLocation = $(this).attr("data-src");
  lightboxImage.attr("src", bigLocation);
  lightbox.css('display', 'block');
})

lightbox.on('click', function () {
  lightbox.css('display', 'none');
})