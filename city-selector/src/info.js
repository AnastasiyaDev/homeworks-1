'use strict';
const $ = require('jquery');

class Info {
    constructor() {
        this.$info = $('#info');
        this.$regionText = $('#regionText');
        this.$localityText = $('#localityText');

        $(document).on('citySelector:create', this.initInfoBlock.bind(this))
            .on('citySelector:destroy', this.removeInfoBlock.bind(this))
            .on('citySelector:change', this.changeInfoBlock.bind(this));
    }

    initInfoBlock() {
        this.$info.show();
    }

    removeInfoBlock() {
        this.$info.hide()
            .find($('span')).text('');
    }

    changeInfoBlock(ev, data) {
        this.$localityText.text(data.cityName);
        this.$regionText.text(data.regionId);
    }
}

$(() => {
    const info = new Info();
});