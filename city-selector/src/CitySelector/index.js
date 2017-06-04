'use strict';
const $ = require('jquery'),
    coreTemplate = require('./template/core.hbs'),
    regions = require('./template/regions.hbs'),
    localities = require('./template/localities.hbs');

require('./style.less');

module.exports = class CitySelector {
    constructor(obj) {
        this.$container = $(`#${obj.elementId}`);
        this.regionsUrl = obj.regionsUrl;
        this.localitiesUrl = obj.localitiesUrl;
        this.saveUrl = obj.saveUrl;

        $('#info').show();

        this.$container.append($(coreTemplate({})));

        this.$container.on('click', '.js-select-region', this.showRegionsList.bind(this))
            .on('click', '.js-region-item', this.showLocationList.bind(this))
            .on('click', '.js-locality-item', this.selectCity.bind(this));
    }

    showRegionsList() {
        this._sendRequest(this.regionsUrl).then((data) => {

            $('.js-regions-list').html($(regions({data})));

            $('.js-select-region').hide();
        });
    }

    showLocationList(ev) {
        let currentItem = ev.currentTarget,
            idReg = $(currentItem).data('id');

        $('.js-region-item').removeClass('_active');
        $(currentItem).addClass('_active');

        $('#localityText').text('');
        $('#locality').val('');

        this._sendRequest(this.localitiesUrl + '/' + idReg).then((data) => {
            $('#regionText').text(data.id);
            $('#region').val(data.id);

            $('.js-localities-list').html($(localities({data})));
        });
    }

    selectCity(ev) {
        let currentItem = ev.currentTarget,
            cityName = $(currentItem).text();

        $('.js-locality-item').removeClass('_active');
        $(currentItem).addClass('_active');

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
