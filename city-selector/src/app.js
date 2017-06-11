'use strict';
const $ = require('jquery'),
      CitySelector = require('./CitySelector');

require('./info.js');

let citySelector;

$('#createCitySelector').on('click', () => {
    if(!citySelector) {
        citySelector = new CitySelector({
            containerId: 'citySelector',
            regionsUrl: 'http://localhost:3000/regions',
            localitiesUrl: 'http://localhost:3000/localities',
            saveUrl: 'http://localhost:3000/selectedRegions',
        });
    }
});

$('#destroyCitySelector').on('click', () => {
    if (citySelector) {
        citySelector.destroy();
        citySelector = null;
    }
});