/*global $ requere*/
require('./index.less');

var footerHtml = requere('html!./index.html');

$('#footer').html(footerHtml);