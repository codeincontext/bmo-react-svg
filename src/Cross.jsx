var React = require('react'),
    ShapeHelper = require('./shapeHelper');

// The basic cross shape on a 3x3 pixel grid
//
//    0 1 2 3
//   ––––––––
// 0|   x x         0  1
// 1| x x x x    10 11 2  3
// 2| x x x x    9  8  5  4
// 3|   x x         7  6

var basicPoints = [[1, 0], [2, 0], [2, 1], [3, 1], [3, 2], [2, 2], [2, 3], [1, 3], [1, 2], [0, 2], [0, 1], [1, 1]];

class Cross extends React.Component {
  render() {
    var points = basicPoints
      .map(this.alignPointToGrid(this.gridForCrossArmWidth(this.props.armWidth)))
      .map(ShapeHelper.scalePoint(this.props.scale))
      .map(p => p.join(','))
      .join(' ');

    return (
      <g transform={`translate(${this.props.x}, ${this.props.y})`}>
        <polygon points={points} fill={this.props.fill} strokeWidth="3" stroke="black"/>
      </g>
    );
  }

  // pixel values for the 3x3 grid axes based on a given arm width
  gridForCrossArmWidth(armWidth) {
    var adjustmentEachSide = (armWidth-1)/2;
    return [0, 1-adjustmentEachSide, 2+adjustmentEachSide, 3];
  }

  alignPointToGrid(gridWarp) {
    return p => [gridWarp[p[0]], gridWarp[p[1]]]
  }
};

module.exports = Cross;
