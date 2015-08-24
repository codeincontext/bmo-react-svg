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
      },
      tablet: {
        height: 15
      }
    };
  },

  render: function() {
    var body = this.props.body;
    var viewBox = [0, 0, body.width, body.height].join(' ');

    var tabletHeight = 15;

    return (
      <svg xmlns="http://www.w3.org/svg/2000"
        viewBox={viewBox}
        width={body.width}
        height={body.height}>

        <rect x="0" y="0" width={body.width} height={body.height} rx="15" ry="15" fill={body.color}/>

        <path d="M30 30 h 490 v 360 h -490 Z" fill="#D3FBE5" strokeWidth="3" stroke="black"/>

        <rect x="70" y="430" width="300" height="25" fill="#133C36" strokeWidth="3" stroke="black"/>
        <circle cx="440" cy="442" r="15" fill="#2320D1" strokeWidth="3" stroke="black"/>

        <rect x="70" y="700" width="90" height={this.props.tablet.height} rx={this.props.tablet.height / 2} ry={this.props.tablet.height / 2} fill="#2320D1" strokeWidth="3" stroke="black"/>
        <rect x="190" y="700" width="90" height={this.props.tablet.height} rx={this.props.tablet.height / 2} ry={this.props.tablet.height / 2} fill="#2320D1" strokeWidth="3" stroke="black"/>

        {ShapeHelpers.pseudo3dShape(
          <circle cx="375" cy="680" r="50" fill="#F72A6A" strokeWidth="3" stroke="black"/>
        )}
        {ShapeHelpers.pseudo3dShape(
          <circle cx="460" cy="600" r="30" fill="#48F464" strokeWidth="3" stroke="black"/>
        )}
        {ShapeHelpers.pseudo3dShape(
          <Cross cx={100} cy={500} scale={50} fill="#FCDE5D"/>
        )}
        {ShapeHelpers.pseudo3dShape(
          <Triangle cx={320} cy={500} scale={20} fill="#47E1F2"/>
        )}
      </svg>
    );
  },
});

module.exports = Bmo;
