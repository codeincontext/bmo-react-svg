var fs = require('fs')
var React = require('react')
var BMO = require('./dest/Bmo')

var build = function(name, props) {
  var svg = React.renderToStaticMarkup(React.createElement(BMO, props));

  // stripped by React :(
  svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');

  fs.writeFileSync('icons/' + name + '.svg', svg)
}

build('bmo', {})
