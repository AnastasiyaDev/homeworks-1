"use strict";

	var sale = [];
	var promo = [];
	var recommended = [];
	var tmpl = _.template($('#list-template').html() );

	$.ajax({
    // url: "https://raw.githubusercontent.com/AnastasiyaDev/homeworks-1/master/products-by-types/products.json",
    url: 'products.json',
    dataType : 'json',
    beforeSend: function () {
        $.fancybox.showLoading();
    }
	}).done(function (products) {

	    products.forEach(function(item) {
  			if (item.type == 'sale'){
  				sale.push(item);
  			}
  			else if (item.type == 'promo'){
  				promo.push(item);
  			}
  			else if (item.type == 'recommended'){
  				recommended.push(item);
  			}
		});

	$('#sale').find( $('.content')).html( tmpl({ products: sale }) );
	$('#promo').find( $('.content')).html( tmpl({ products: promo }) );
	$('#recommended').find( $('.content')).html( tmpl({ products: recommended }) );

	}).fail(function (xhr, status, errorThrown) {
	    alert("Извините, произошла ошибка. Пожалуйста, обновите страницу и попробуйте еще раз.");
	    console.log("Error: " + errorThrown);
	    console.log("Status: " + status);
	    console.dir(xhr); // list of properties
	}).always(function (xhr, status) {
        $.fancybox.hideLoading();
	});

