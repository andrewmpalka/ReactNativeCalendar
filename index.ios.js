// Import some code we need
var Moment = require('moment');
var React = require('react');
var ReactNative = require('react-native');
var AppRegistry = ReactNative.AppRegistry;
var View = ReactNative.View;
var Text = ReactNative.Text;
var StyleSheet = ReactNative.StyleSheet;
var DayItem = require('./src/day-item');

// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text>
        {Moment().format('MMMM Do YYYY')}
      </Text>
      {this.days()}
    </View>;
  },
  days: function() {
    var dayItems = [];

    for(var i = 0; i < 7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      dayItems.push(
        <DayItem day={day} daysUntil={i} />
      );
      }
      return dayItems;
    // days will be an array of DayItem components
    // days = [<DayItem day = 'Sunday'/>, ... , <DayItem day ='Saturday'/>]
  }
});

//Style the react component
var styles = StyleSheet.create({
  container: {
    //max size of item in view
    flex: 1,
    //flexDirection flips justifyContent and alignItems when changed from default value of 'column' to 'row'
    //default: y direction
    justifyContent: 'center',
    //default: x direction
    alignItems: 'center'
  }
});


// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays;
});
