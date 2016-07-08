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
	    	switch(item.type){
	    		case 'sale': sale.push(item); break;
	    		case 'promo': promo.push(item); break;
	    		case 'recommended': recommended.push(item); break;
	    	}
		});

	$('#sale').html( tmpl({ products: sale, productНeader: "Распродажа" }) );
	$('#promo').html( tmpl({ products: promo, productНeader: "Промо-акция" }) );
	$('#recommended').html( tmpl({ products: recommended, productНeader: "Рекомендуемые товары" }) );

	}).fail(function (xhr, status, errorThrown) {
	    alert("Извините, произошла ошибка. Пожалуйста, обновите страницу и попробуйте еще раз.");
	    console.log("Error: " + errorThrown);
	    console.log("Status: " + status);
	    console.dir(xhr); // list of properties
	}).always(function (xhr, status) {
        $.fancybox.hideLoading();
	});