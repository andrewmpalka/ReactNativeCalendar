  // import some code we need
  var React = require('react');
  var ReactNative = require('react-native');
  var Text =  ReactNative.Text;

  // create our component
  var DayItem = React.createClass({
    render: function() {
      return <Text style={this.style()}>
        {this.props.day}
      </Text>;
    },
    style: function(){
      return {
        color: this.color(),
        fontWeight: this.fontWeight(),
        fontSize: this.fontSize(),
        lineHeight: this.lineHeight(),
      };
    },
    color: function() {
      var opacity = (1 / (this.props.daysUntil + 1));
      return 'rgba(120, 109, 196, '+ opacity.toString() + ')';
    },
    fontWeight: function(){
      var weight = 8 - this.props.daysUntil;
      return (weight * 100).toString();
    },
    fontSize: function(){
      return 60 - 6 * this.props.daysUntil;
    },
    lineHeight: function(){
      return 70 - 4 * this.props.daysUntil;
    }
  });

  // style our component
  // javascript brackets are for objects

  // make this code available elsewhere
  // publicly accessible api
module.exports = DayItem;
