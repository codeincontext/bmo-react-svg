var React = require('react'),
    Cross = require('./cross'),
    Triangle = require('./triangle'),
    ShapeHelpers = require('./shapeHelpers')
    Face = require('./face');

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

    return (
      <svg xmlns="http://www.w3.org/svg/2000"
        viewBox={viewBox}
        width={body.width}
        height={body.height}>

        // body
        <rect x="0" y="0" width={body.width} height={body.height} rx="40" ry="40" fill={body.color}/>

        // screen
        <rect x="58" y="58" width="434" height="314" rx="45" ry="45" fill="#D3FBE5" strokeWidth="6" stroke="#B3CFBE"/>
        <rect x="55" y="55" width="440" height="320" rx="45" ry="45" fill="transparent" strokeWidth="3" stroke="black"/>
        <Face x={0} y={180} width={this.props.body.width} eyeDistance={230} eyeRadius={17} mouthWidth={100} mouthY={35} mouthHeight={60} color="black"/>

        // tray
        <rect x="70" y="410" width="300" height="25" fill="#133C36" strokeWidth="3" stroke="black"/>
        <circle cx="440" cy="423" r="15" fill="#2320D1" strokeWidth="3" stroke="black"/>

        // tablet buttons
        <rect x="70" y="710" width="90" height={this.props.tablet.height} rx={this.props.tablet.height / 2} ry={this.props.tablet.height / 2} fill="#2320D1" strokeWidth="3" stroke="black"/>
        <rect x="190" y="710" width="90" height={this.props.tablet.height} rx={this.props.tablet.height / 2} ry={this.props.tablet.height / 2} fill="#2320D1" strokeWidth="3" stroke="black"/>

        {ShapeHelpers.pseudo3dShape(
          <circle cx="380" cy="685" r="50" fill="#F72A6A" strokeWidth="3" stroke="black"/>
        )}
        {ShapeHelpers.pseudo3dShape(
          <circle cx="460" cy="610" r="30" fill="#48F464" strokeWidth="3" stroke="black"/>
        )}
        {ShapeHelpers.pseudo3dShape(
          <Cross x={100} y={510} scale={50} armWidth={1.1} fill="#FCDE5D"/>
        )}
        {ShapeHelpers.pseudo3dShape(
          <Triangle x={325} y={510} scale={20} fill="#47E1F2"/>
        )}
      </svg>
    );
  },
});

module.exports = Bmo;
