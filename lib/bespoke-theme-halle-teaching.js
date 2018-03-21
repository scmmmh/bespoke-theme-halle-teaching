var fs = require('fs');
var classes = require('bespoke-classes');
var insertCss = require('insert-css');

module.exports = function() {
  var css = fs.readFileSync(__dirname + '/tmp/theme.css', 'utf8');
  insertCss(css, { prepend: true });

  return function(deck) {
    classes()(deck);
    // Add the print button
    var print_icon = document.createElement('a');
    print_icon.setAttribute('class', 'print-icon');
    print_icon.setAttribute('href', '#');
    print_icon.addEventListener('click', function(ev) {
        ev.preventDefault();
        window.print();
    });
    var print_icon_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    print_icon_svg.setAttribute('viewBox', '0 0 24 24');
    var print_icon_path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    print_icon_path.setAttribute('d', 'M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z');
    print_icon_svg.appendChild(print_icon_path);
    print_icon.appendChild(print_icon_svg);
    document.body.appendChild(print_icon);
  };
};
