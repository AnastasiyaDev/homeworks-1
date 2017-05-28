'use strict';
const $ = require('jquery');

require('./style.less');

module.exports = class CitySelector {
    constructor(obj) {
        // this.elementId = obj.elementId;  // не работает
        this.id = obj.elementId;
        this.regionsUrl = obj.regionsUrl;
        this.localitiesUrl = obj.localitiesUrl;
        this.saveUrl = obj.saveUrl;
    }

    init() {
        $('#info').show();

        $('#' + this.id).html($('<button>', {
            class: 'js-select-region',
            type: 'button',
            html: 'Выбрать регион'
        }));
    }

    selectRegions() {
        $.ajax({
            url: this.regionsUrl,
            dataType : 'json',
            beforeSend: function () {
            }
        }).done(function (data) {
            data.forEach(function(item) {
                $('<ul>', {
                    class: 'region-list js-region-list',
                    'data-id': item.id,
                    'data-active': 0,
                    type: 'button',
                    html: item.title
                }).appendTo('#citySelector');
            });

            $('.js-select-region').hide();
        }).fail(function (xhr, status, errorThrown) {
            alert("Извините, произошла ошибка. Пожалуйста, обновите страницу и попробуйте еще раз.");
            console.log("Error: " + errorThrown);
            console.log("Status: " + status);
            console.dir(xhr);
        }).always(function (xhr, status) {
        });
    }

    selectLocation(idReg, currentItem) {
        $.ajax({
            url: this.localitiesUrl + '/' + idReg,
            dataType: 'json',
            beforeSend: function () {
            }
        }).done(function (data) {
            $('#regionText').text(data.id);

            if ($(currentItem).data('active') === 0) {
                for (var key in data.list) {
                    $('<li>', {
                        class: 'region-list__item js-region-item',
                        html: data.list[key]
                    }).appendTo($(currentItem));
                }
            }

            $(currentItem).data('active', 1);
        }).fail(function (xhr, status, errorThrown) {
            alert("Извините, произошла ошибка. Пожалуйста, обновите страницу и попробуйте еще раз.");
            console.log("Error: " + errorThrown);
            console.log("Status: " + status);
            console.dir(xhr);
        }).always(function (xhr, status) {
        });
    }

    saveSelect(reg, loc) {
        $.ajax({
            url: this.saveUrl,
            async: false,
            type: 'POST',
            dataType: 'json',
            data: {
                'region': reg,
                'locality': loc
                },
            beforeSend: function () {
            }
        }).done(function (data) {
            $('body').html('Ваш запрос отправлен: ' + JSON.stringify(data));
        }).fail(function (xhr, status, errorThrown) {
            alert('Извините, произошла ошибка. Пожалуйста, обновите страницу и попробуйте еще раз.');
            console.log("Error: " + errorThrown);
            console.log("Status: " + status);
            console.dir(xhr);
        }).always(function (xhr, status) {
        });
    }
};
