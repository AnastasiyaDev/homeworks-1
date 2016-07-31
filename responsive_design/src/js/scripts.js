/*global $ _*/
'use strict';

$(function() {

    var arr = ['banner_bottom.jpg', 'banner_top.jpg', 'black.jpg', 'blue.jpg', 'gray.jpg', 'red.jpg', 'tile_1.jpg', 'tile_2.jpg'];
    var $imgGrid = $('#img-grid');
    var $menuToggle = $('.menu-toggle');
    var $openMenu = $('.menu');

    var tmpl = _.template($('#list-template').html());

    // $imgGrid.html(tmpl({ images: arr }));


    $menuToggle.on('click',function(){
        $openMenu.toggleClass('open');
    });

});
