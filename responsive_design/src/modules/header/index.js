/*global $ requere*/
require('./index.less');

var headerHtml = requere('html!./index.html');
requere('./temp-menu.js');

// $('#header').html(headerHtml);
document.getElementById('header').innerHTML += headerHtml;

