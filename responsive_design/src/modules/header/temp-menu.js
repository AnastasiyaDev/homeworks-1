/*global $ _*/
'use strict';

$(function() {

    var menuList = ['MAKEUP', 'SKINCARE', 'FRAGRANCES', 'ARMANI', '|', 'PRAVE', 'ONLINE', 'EXCLUSIVES', 'GIFTS', 'MAESTRO OF DETAILS'];
    var $headerMenuWide = $('#header-menu-wide');
    var $headerMenuMob = $('#menuToggle');
    var tmplMenu = _.template($('#list-template-menu').html());

    $headerMenuWide.html(tmplMenu({ items: menuList }));
    $headerMenuWide.addClass('list-inline');
    menuList.splice(4, 1);
    $headerMenuMob.html(tmplMenu({ items: menuList }));

});
