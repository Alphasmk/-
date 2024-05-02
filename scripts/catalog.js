$(document).ready(function() {
    $('select').niceSelect();

    function loadProducts() {
        $.ajax({
            type: "GET",
            url: "catalog.xml",
            dataType: "xml",
            success: function(xml) {
                $('.items').empty(); 

                var products = [];
                $(xml).find('product').each(function() {
                    var name = $(this).find('name').text();
                    var image = $(this).find('image').text();
                    var price = parseFloat($(this).find('price').text().replace('$', ''));
                    var rate = parseFloat($(this).find('rate').text());
                    var link = $(this).find('link').text();

                    products.push({ name: name, image: image, price: price, rate: rate, link: link });
                });

                displayProducts(products);
            }
        });
    }

    if(window.matchMedia('(min-width: 1001px)').matches)
          {
            function displayProducts(products) {
                $('.items').empty();
        
                products.forEach(function(product) {
                    var productHtml = `
                        <div class="single-item">
                            <img src="${product.image}">
                            <span>Рейтинг: <img style="width: 2vw; height: auto" src="images/catalog/svg/Star.svg"/> ${product.rate}</span>
                            <span>${product.name}</span>
                            <span style="font-weight: 900">Цена: $${product.price}</span>
                            <a href="${product.link}" class="button">Перейти</a>
                        </div>
                    `;
                    $('.items').append(productHtml);
                });
            }
          }

          if(window.matchMedia('(min-width: 421px) and (max-width: 1000px)').matches)
          {
            function displayProducts(products) {
                $('.items').empty();
        
                products.forEach(function(product) {
                    var productHtml = `
                        <div class="single-item">
                            <img src="${product.image}">
                            <div class="product-info">
                                <div>
                                    <span>Рейтинг: <img style="width: 3vw; height: auto" src="images/catalog/svg/Star.svg"/> ${product.rate}</span>
                                    <span>${product.name}</span>
                                </div>
                                <span style="font-weight: 900">Цена: $${product.price}</span>
                                <a href="${product.link}" class="button">Перейти</a>
                            </div>
                        </div>
                    `;
                    $('.items').append(productHtml);
                });
            }
          }

          if(window.matchMedia('(max-width: 420px)').matches)
          {
            function displayProducts(products) {
                $('.items').empty();
        
                products.forEach(function(product) {
                    var productHtml = `
                        <div class="single-item">
                            <img src="${product.image}" style="grid-area: a1">
                                    <span><img style="width: 5vw; height: auto" src="images/catalog/svg/Star.svg"/></span>${product.rate}
                                    <span style="display: block; text-align: center">${product.name}</span>
                                <span style="font-weight: 900">$${product.price}</span>
                                <a href="${product.link}" class="button">Перейти</a>
                        </div>
                    `;
                    $('.items').append(productHtml);
                });
            }
          }

    loadProducts();

    $('.sort').change(function() {
        var selectedOption = $(this).val();
        var products = [];
    
        $.ajax({
            type: "GET",
            url: "catalog.xml",
            dataType: "xml",
            success: function(xml) {
                $(xml).find('product').each(function() {
                    var name = $(this).find('name').text();
                    var image = $(this).find('image').text();
                    var price = parseFloat($(this).find('price').text().replace('$', ''));
                    var rate = parseFloat($(this).find('rate').text());
                    
                    products.push({ name: name, image: image, price: price, rate: rate });
                });
    
                switch (selectedOption) {
                    case 'ascPrice':
                        products.sort((a, b) => a.price - b.price);
                        break;
                    case 'descPrice':
                        products.sort((a, b) => b.price - a.price);
                        break;
                    case 'ascRate':
                        products.sort((a, b) => a.rate - b.rate);
                        break;
                    case 'descRate':
                        products.sort((a, b) => b.rate - a.rate);
                        break;
                    default:
                        break;
                }
    
                displayProducts(products);
            }
        });
    });
});
