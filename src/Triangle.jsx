var React = require('react'),
    ShapeHelper = require('./shapeHelper');

class Triangle extends React.Component {
  render() {
    var points = [[2, 0],
                  [0, 3.5],
                  [4, 3.5]];
    points = points
      .map(ShapeHelper.scalePoint(this.props.scale))
      .map(p => p.join(','))
      .join(' ');

    return (
      <g transform={`translate(${this.props.x}, ${this.props.y})`}>
        <polygon points={points} fill={this.props.fill} strokeWidth="3" stroke="black"/>
      </g>
    );
  }
};

module.exports = Triangle;
