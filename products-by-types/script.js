"use strict";

	var sale = [];
	var promo = [];
	var recommended = [];

	$.ajax({
    // url: "https://raw.githubusercontent.com/AnastasiyaDev/homeworks-1/master/products-by-types/products.json",
    url: 'products.json',
    dataType : 'json'
	}).done(function (products) {

		
	    // console.log(data);
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

	// $('#sale').html( tmpl({products: sale}) );


	}).fail(function (xhr, status, errorThrown) {
	    alert("Извините, произошла ошибка. Пожалуйста, обновите страницу и попробуйте еще раз.");
	    console.log("Error: " + errorThrown);
	    console.log("Status: " + status);
	    console.dir(xhr);
	}).always(function (xhr, status) {
	    $.fancybox.hideLoading(); 
	});


	$(document)
	    .on('ajaxStart', function () {
	        $.fancybox.showLoading();
	    })
	    .on('ajaxStop', function () {
	        $.fancybox.hideLoading();
	    });
