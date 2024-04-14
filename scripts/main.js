$(document).ready(function(){
  $.ajax({
      type: "GET",
      url: "catalog.xml",
      dataType: "xml",
      success: function(xml){
          $(xml).find('product').each(function(){
              var name = $(this).find('name').text();
              var image = $(this).find('image').text();
              var price = $(this).find('price').text();
              $('.slider').append('<div><img src="' + image + '"><p><h3>' + name + '</h3>' + price + '</p><a href="#" class="button">Приобрести</a></div>');
          });
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
  });
});