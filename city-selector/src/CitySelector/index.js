'use strict';
const $                  = require('jquery'),
      coreTemplate       = require('./template/core.hbs'),
      regionsTemplate    = require('./template/regions.hbs'),
      localitiesTemplate = require('./template/localities.hbs');

require('./style.less');

module.exports = class CitySelector {
    constructor(obj) {
        this.$container           = $(`#${obj.containerId}`);
        this.regionsUrl           = obj.regionsUrl;
        this.localitiesUrl        = obj.localitiesUrl;
        this.saveUrl              = obj.saveUrl;
        this.$outputRegionField   = $(`#${obj.outputRegionId}`);
        this.$outputLocalityField = $(`#${obj.outputlocalityId}`);

        this.selectRegionBtn = '.js-select-region-btn';
        this.submitBtn       = '.js-submit-btn';
        this.regionItem      = '.js-region-item';
        this.localityItem    = '.js-locality-item';
        this.regionInput     = '#regionInput';
        this.localityInput   = '#localityInput';

        this.$container.append($(coreTemplate({url: this.saveUrl})));

        this.$container.on('click', this.selectRegionBtn, this.showRegionsList.bind(this))
            .on('click', this.regionItem, this.showLocationList.bind(this))
            .on('click', this.localityItem, this.selectCity.bind(this));
    }

    showRegionsList() {
        this._sendRequest(this.regionsUrl).then((data) => {
            const $regionsList = $('.js-regions-list');

            $regionsList.html($(regionsTemplate({data})));

            $(this.selectRegionBtn).hide();
        });
    }

    showLocationList(ev) {
        let currentItem = ev.currentTarget,
            idReg       = $(currentItem).data('id');

        const $localitiesList = $('.js-localities-list');

        $(this.submitBtn).addClass('hidden');

        $(this.regionItem).removeClass('_active');
        $(currentItem).addClass('_active');

        this.$outputLocalityField.text('');

        $(this.localityInput).val('');

        this._sendRequest(this.localitiesUrl + '/' + idReg).then((data) => {
            this.$outputRegionField.text(data.id);
            $(this.regionInput).val(data.id);

            $localitiesList.html($(localitiesTemplate({data})));
        });
    }

    selectCity(ev) {
        let currentItem = ev.currentTarget,
            cityName    = $(currentItem).text();

        $(this.localityItem).removeClass('_active');
        $(currentItem).addClass('_active');

        this.$outputLocalityField.text(cityName);
        $(this.localityInput).val(cityName);

        $(this.submitBtn).removeClass('hidden');
    }

    _sendRequest(url) {
        return $.ajax({
            url: url,
            dataType: 'json',
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
