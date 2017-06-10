'use strict';
const $ = require('jquery');

class Info {
    constructor() {
        console.log('initInfo');

        this.$info = $('#info');

        $(document).on('citySelector:create', this.initInfoBlock.bind(this))
            .on('citySelector:destroy', this.removeInfoBlock.bind(this))
            .on('citySelector:change', this.changeInfoBlock.bind(this));
    }

    initInfoBlock() {
        this.$info.show();
    }

    removeInfoBlock() {
        this.$info.hide()
            .find($('span')).text('')
            .end()
            .find($('input')).val('');
    }

    changeInfoBlock() {

    }
}

$(() => {
    const info = new Info();
});