var React = require('react'),
    ShapeHelpers = require('./shapeHelpers');

var Triangle = React.createClass({
  render: function() {
    var points = [[2, 0],
                  [0, 3.5],
                  [4, 3.5]];
    points = points
      .map(ShapeHelpers.scalePoint(this.props.scale))
      .map(p => p.join(','))
      .join(' ');

    return (
      <g transform={`translate(${this.props.x}, ${this.props.y})`}>
        <polygon points={points} fill={this.props.fill} strokeWidth="3" stroke="black"/>
      </g>
    );
  }
});

module.exports = Triangle;
