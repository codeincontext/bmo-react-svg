var React = require('react'),
    Color = require('color');

var ShapeHelpers = {
  pseudo3dShape: function(shape) {
    // _.compose would be good here
    var newShape = ShapeHelpers.higherShape(ShapeHelpers.darkerShape(shape));

    return [newShape, shape];
  },

  darkerShape: function(shape, amount) {
    amount = amount || 0.5;
    var darkerFill = Color(shape.props.fill).darken(amount).rgbString();
    return React.cloneElement(shape, {fill: darkerFill});
  },

  higherShape: function(shape, offset) {
    offset = offset || 10;
    return React.cloneElement(shape, {cy: shape.props.cy-offset});
  },

  scalePoint: function(scale) {
    return p => [p[0] * scale, p[1] * scale];
  },

  offsetPoint: function(x, y) {
    return p => [p[0] + x, p[1] + y];
  }
};

module.exports = ShapeHelpers;
