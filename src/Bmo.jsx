var React = require('react'),
    Cross = require('./cross'),
    Triangle = require('./triangle'),
    ShapeHelpers = require('./shapeHelpers');

var Bmo = React.createClass({

  getDefaultProps: function() {
    return {
      body: {
        width: 550,
        height: 800,
        color: '#6BBEB0'
      }
    };
  },

  render: function() {
    var body = this.props.body;
    var viewBox = [0, 0, body.width, body.height].join(' ');

    return (
      <svg xmlns="http://www.w3.org/svg/2000"
        viewBox={viewBox}
        width={body.width}
        height={body.height}>

        <rect x="0" y="0" width={body.width} height={body.height} rx="15" ry="15" fill={body.color}/>

        {ShapeHelpers.pseudo3dShape(
          <circle cx="375" cy="630" r="50" fill="#F72A6A" strokeWidth="3" stroke="black"/>
        )}
        {ShapeHelpers.pseudo3dShape(
          <circle cx="460" cy="550" r="30" fill="#48F464" strokeWidth="3" stroke="black"/>
        )}
        {ShapeHelpers.pseudo3dShape(
          <Cross cx={100} cy={450} scale={50} fill="#FCDE5D"/>
        )}
        {ShapeHelpers.pseudo3dShape(
          <Triangle cx={320} cy={450} scale={20} fill="#47E1F2"/>
        )}
      </svg>
    );
  },
});

module.exports = Bmo;
