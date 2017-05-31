'use strict';
const $ = require('jquery');

require('./style.less');

module.exports = class CitySelector {
    constructor(obj) {
        this.$container = $(`#${obj.elementId}`);
        this.regionsUrl = obj.regionsUrl;
        this.localitiesUrl = obj.localitiesUrl;
        this.saveUrl = obj.saveUrl;

        $('#info').show();

        this.$container.append($('<button>', {
            class: 'js-select-region',
            type: 'button',
            html: 'Выбрать регион'
        }));

        this.$container.on('click', '.js-select-region', this.showRegionsList.bind(this))
            .on('click', '.js-region-item', this.showLocationList.bind(this))
            .on('click', '.js-locality', this.selectCity.bind(this));
    }

    showRegionsList() {
        this._sendRequest(this.regionsUrl).then((data) => {
            data.forEach((item) => {
                $('<div>', {
                    class: 'region js-region-item',
                    'data-id': item.id,
                    'data-active': 0,
                    html: item.title
                }).appendTo('#citySelector');
            });

            $('.js-select-region').hide();
        });
    }

    showLocationList(ev) {
        let currentItem = ev.currentTarget,
            idReg = $(currentItem).data('id');

        this._sendRequest(this.localitiesUrl + '/' + idReg).then((data) => {
            $('#regionText').text(data.id);
            $('#region').val(data.id);

            for (var key in data.list) {
                $('<div>', {
                    class: 'locality js-locality',
                    html: data.list[key]
                }).appendTo('#citySelector');
            }
        });
    }

    selectCity(ev) {
        let currentItem = ev.currentTarget,
            cityName = $(currentItem).text();

        $('#localityText').text(cityName);
        $('#locality').val(cityName);
    }

    _sendRequest(url) {
        return $.ajax({
            url: url,
            dataType : 'json',
            beforeSend: function () {
            }
        }).fail(function (xhr, status, errorThrown) {
            alert("Извините, произошла ошибка. Пожалуйста, обновите страницу и попробуйте еще раз.");
            console.log("Error: " + errorThrown);
            console.log("Status: " + status);
            console.dir(xhr);
        }).always(function (xhr, status) {
        });
    }
};
