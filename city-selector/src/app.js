'use strict';
const $ = require('jquery');
const CitySelector = require('./CitySelector');

let citySelector;

$('#createCitySelector').on('click', () => {
    if(!citySelector) {
        citySelector = new CitySelector({
            containerId: 'citySelector',
            regionsUrl: 'http://localhost:3000/regions',
            localitiesUrl: 'http://localhost:3000/localities',
            saveUrl: 'http://localhost:3000/selectedRegions',
            outputRegionId: 'regionText',
            outputlocalityId: 'localityText'
        });
    }

    $('#info').show();
});

$('#destroyCitySelector').on('click', () => {
    if (citySelector) {
        citySelector.destroy();
        citySelector = null;
    }

    $('#info').hide()
        .find($('span')).text('')
        .end()
        .find($('input')).val('');
});