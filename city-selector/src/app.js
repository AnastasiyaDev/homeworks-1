'use strict';
const $ = require('jquery');
const CitySelector = require('./CitySelector');

$('#destroyCitySelector').on('click', () => {

});

$('#createCitySelector').on('click', () => {
    const citySelector = new CitySelector({
        elementId: 'citySelector'
    });

    citySelector.init();
});

$('#citySelector').on('click', '.js-select-region', () => {
    const citySelector = new CitySelector({
        regionsUrl: 'http://localhost:3000/regions',
    });

    citySelector.selectRegions();
});

$('#citySelector').on('click', '.js-region-list', (ev) => {
    const citySelector = new CitySelector({
        localitiesUrl: 'http://localhost:3000/localities'
    });

    let currentItem = ev.currentTarget,
        idReg = $(currentItem).data('id');

    citySelector.selectLocation(idReg, currentItem);
});

$('#citySelector').on('click', '.js-region-item', (ev) => {
    let currentItem = ev.currentTarget,
        cityName = $(currentItem).text();

    $('.js-submit').remove();

    $('#localityText').text(cityName);

    $('<button>', {
        class: 'js-submit',
        type: 'submit',
        html: 'Сохранить'
    }).appendTo('#citySelector');
});

$('#citySelector').on('click', '.js-submit', () => {
    const citySelector = new CitySelector({
        saveUrl: 'http://localhost:3000/selectedRegions'
    });

    citySelector.saveSelect($('#regionText').text(), $('#localityText').text());
});
