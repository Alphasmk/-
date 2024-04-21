$(document).ready(function(){
  $.ajax({
      type: "GET",
      url: "catalog.xml",
      dataType: "xml",
      success: function(xml){
        if(window.matchMedia('(max-width: 1000px)').matches)
          {
            $(xml).find('product').each(function(){
                var name = $(this).find('name').text();
                var image = $(this).find('image').text();
                var price = $(this).find('price').text();
                var area = $(this).find('area').text();
                $('.slider').append('<div style="grid-area: ' + area + '"><img src="' + image + '"><p><h3>' + name + '</h3>' + price + '</p><a href="#" class="button">Приобрести</a></div>');
            });
          }
          if(window.matchMedia('(min-width: 1001px)').matches)
          {
            $(xml).find('product').each(function(){
                var name = $(this).find('name').text();
                var image = $(this).find('image').text();
                var price = $(this).find('price').text();
                var area = $(this).find('area').text();
                $('.itcat').append('<div style="grid-area: ' + area + '"><img src="' + image + '"><p><h3>' + name + '</h3>' + price + '</p><a href="#" class="button">Приобрести</a></div>');
            });
          }
          if(window.matchMedia('(max-width: 420px)').matches)
          {
            $('.single-item').slick({
                infinite: true,
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<img src="images/left.png" class="slick-prev">',
                nextArrow: '<img src="images/right.png" class="slick-next">'
            });
          }
          if (window.matchMedia('(min-width: 421px) and (max-width: 1000px)').matches) {
            $('.single-item').slick({
                infinite: true,
                dots: false,
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                prevArrow: '<img src="images/left.png" class="slick-prev">',
                nextArrow: '<img src="images/right.png" class="slick-next">'
            });
        }
      }
  });
});