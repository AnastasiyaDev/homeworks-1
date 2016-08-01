/*global $ _*/
'use strict';

$(function() {

    var imagesList = ['banner_bottom.jpg', 'banner_top.jpg', 'black.jpg', 'blue.jpg', 'gray.jpg', 'red.jpg', 'tile_1.jpg', 'tile_2.jpg'];
    var menuList = ['MAKEUP', 'SKINCARE', 'FRAGRANCES', 'ARMANI', '|', 'PRAVE', 'ONLINE', 'EXCLUSIVES', 'GIFTS', 'MAESTRO OF DETAILS'];
    var $headerMenuWide = $('#header-menu-wide');
    var $imgGrid = $('#img-grid');
    var $menuToggle = $('.menu-toggle');
    var $openMenu = $('.menu');

    var tmpl = _.template($('#list-template').html());
    var tmplMenu = _.template($('#list-template-menu').html());


    // $imgGrid.html(tmpl({ images: imagesList }));
    $headerMenuWide.html(tmplMenu({ items: menuList }));

    $menuToggle.on('click', function() {
        $openMenu.toggleClass('open');
    });

});
