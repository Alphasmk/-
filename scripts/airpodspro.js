$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "reviews.xml",
        dataType: "xml",
        success: function(xml){
              $(xml).find('review').each(function(){
                  var name = $(this).find('name').text();
                  var title = $(this).find('title').text();
                  var rate = $(this).find('rate').text();
                  var text = $(this).find('text').text();
                  var good = $(this).find('good').text();
                  var bad = $(this).find('bad').text();
                  $('.slider-review').append('<div><h3>' + name + '</h3><h4>' + title + '</h4>' + rate + '<img src="/images/catalog/svg/star.svg" style="width: 1.3vw; display: inline-block; margin-left: 1%"></br></br>' + text + '</br></br><span class="plm plus">Достоинства: </span>' + good + '</br></br><span class="plm minus">Недостатки: </span>' + bad + '</div>');
              });
            if (window.matchMedia('(min-width: 1001px)').matches) {
            $('.slider-review').slick({
                infinite: true,
                dots: true,
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '<img src="/images/left.png" class="slick-prev">',
                nextArrow: '<img src="/images/right.png" class="slick-next">'
            });
            }
            if (window.matchMedia('(min-width: 421px) and (max-width: 1000px)').matches) {
                $('.slider-review').slick({
                    infinite: true,
                    dots: true,
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: '<img src="/images/left.png" class="slick-prev">',
                    nextArrow: '<img src="/images/right.png" class="slick-next">'
                });
            }
            if (window.matchMedia('(max-width: 420px)').matches) {
                $('.slider-review').slick({
                    infinite: true,
                    dots: true,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: '<img src="/images/left.png" class="slick-prev">',
                    nextArrow: '<img src="/images/right.png" class="slick-next">'
                });
            }
            $('.img-slider').slick({
                infinite: true,
                dots: true,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<img src="/images/left.png" class="slick-prev">',
                nextArrow: '<img src="/images/right.png" class="slick-next">'
            });
        }
    });
});