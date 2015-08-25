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

        <rect x="0" y="0" width={body.width} height={body.height} rx="40" ry="40" fill={body.color}/>

        <rect x="58" y="58" width="434" height="314" rx="45" ry="45" fill="#D3FBE5" strokeWidth="6" stroke="#B3CFBE"/>
        <rect x="55" y="55" width="440" height="320" rx="45" ry="45" fill="transparent" strokeWidth="3" stroke="black"/>

        <rect x="70" y="410" width="300" height="25" fill="#133C36" strokeWidth="3" stroke="black"/>
        <circle cx="440" cy="423" r="15" fill="#2320D1" strokeWidth="3" stroke="black"/>

        <rect x="70" y="710" width="90" height={this.props.tablet.height} rx={this.props.tablet.height / 2} ry={this.props.tablet.height / 2} fill="#2320D1" strokeWidth="3" stroke="black"/>
        <rect x="190" y="710" width="90" height={this.props.tablet.height} rx={this.props.tablet.height / 2} ry={this.props.tablet.height / 2} fill="#2320D1" strokeWidth="3" stroke="black"/>

        {ShapeHelpers.pseudo3dShape(
          <circle cx="380" cy="685" r="50" fill="#F72A6A" strokeWidth="3" stroke="black"/>
        )}
        {ShapeHelpers.pseudo3dShape(
          <circle cx="460" cy="610" r="30" fill="#48F464" strokeWidth="3" stroke="black"/>
        )}
        {ShapeHelpers.pseudo3dShape(
          <Cross cx={100} cy={510} scale={50} fill="#FCDE5D"/>
        )}
        {ShapeHelpers.pseudo3dShape(
          <Triangle cx={325} cy={510} scale={20} fill="#47E1F2"/>
        )}
      </svg>
    );
  },
});

module.exports = Bmo;
