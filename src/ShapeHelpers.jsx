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
    var newProps = shape.props.hasOwnProperty('cy')
      ? {cy: shape.props.cy-offset}
      : {y: shape.props.y-offset};

    return React.cloneElement(shape, newProps);
  },

  scalePoint: function(scale) {
    return p => [p[0] * scale, p[1] * scale];
  },
};

module.exports = ShapeHelpers;
