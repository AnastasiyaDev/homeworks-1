/*global $*/

    require('./index.less');

    var $menuToggle = $('.menu-toggle');
    var $openMenu = $('.menu');

    $menuToggle.on('click', function() {
        $openMenu.toggleClass('open');
    });
