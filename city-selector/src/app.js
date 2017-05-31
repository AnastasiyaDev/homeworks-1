'use strict';
const $ = require('jquery');
const CitySelector = require('./CitySelector');

$('#createCitySelector').on('click', () => {
    if(!$('.js-select-region').length) {
        new CitySelector({
            elementId: 'citySelector',
            regionsUrl: 'http://localhost:3000/regions',
            localitiesUrl: 'http://localhost:3000/localities',
            saveUrl: 'http://localhost:3000/selectedRegions'
        });
    }
});

$('#destroyCitySelector').on('click', () => {
    $('#citySelector').empty(); // то что пришло аяксом осталось, надо доработать
    $('#info').hide()
        .find($('span')).text('')
        .end()
        .find($('input')).val('');
});