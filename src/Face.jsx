var React = require('react');

class Face extends React.Component {

  render() {
    var eyeOneX = this.props.width/2 - this.props.eyeDistance/2;
    var eyeTwoX = this.props.width/2 + this.props.eyeDistance/2;

    var mouthStart = [this.props.width/2 - this.props.mouthWidth/2, this.props.mouthY].join(' ');
    var mouthEnd = [this.props.mouthWidth, 0].join(' ');

    var mouthPath = `M ${mouthStart} c 0 ${this.props.mouthHeight}, ${this.props.mouthWidth} ${this.props.mouthHeight}, ${mouthEnd}`;

    return (
      <g transform={`translate(${this.props.x}, ${this.props.y})`}>
        <circle cx={eyeOneX} cy="0" r={this.props.eyeRadius} fill={this.props.color} strokeWidth="3" stroke={this.props.color}/>
        <circle cx={eyeTwoX} cy="0" r={this.props.eyeRadius} fill={this.props.color} strokeWidth="3" stroke={this.props.color}/>

        <path d={mouthPath} fill="transparent" stroke={this.props.color} strokeWidth="7" strokeLinecap="round"/>
      </g>
    )
  }

};

module.exports = Face;
