var React = require('react'),
    ShapeHelpers = require('./shapeHelpers');

var Cross = React.createClass({
  render: function() {
    var points = [[1, 0], // clockwise from top left corner of top arm
                  [2, 0],
                  [2, 1],
                  [3, 1],
                  [3, 2],
                  [2, 2],
                  [2, 3],
                  [1, 3],
                  [1, 2],
                  [0, 2],
                  [0, 1],
                  [1, 1]];

    points = points
      .map(ShapeHelpers.scalePoint(this.props.scale))
      .map(p => p.join(','))
      .join(' ');

    return (
      <g transform={`translate(${this.props.x}, ${this.props.y})`}>
        <polygon points={points} fill={this.props.fill} strokeWidth="3" stroke="black"/>
      </g>
    );
  },

  scalePoint: function(scale) {
    return p => [p[0] * scale, p[1] * scale];
  },

  offsetPoint: function(x, y) {
    return p => [p[0] + x, p[1] + y];
  }
});

module.exports = Cross;
