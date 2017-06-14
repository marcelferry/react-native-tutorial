'use strict';

var React = require('react');
var ReactNative = require('react-native');
var ReactNavigation = require('react-navigation');

var SearchPage = require('./SearchPage');

var SearchResults = require('./SearchResults');

var PropertyView = require('./PropertyView');

var MapsPage = require('./MapsPage');

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    //backgroundColor: 'white',
    fontSize: 30,
    margin: 80,
    textAlign: 'center'
  },
  container: {
    flex: 1
  }
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ReactNative.View>
        <ReactNative.Text style={styles.text}>Property Finder App</ReactNative.Text>
        <ReactNative.Button onPress={() => navigate('SearchPage')} title="Search Page"/>
      </ReactNative.View>
    );
  }
}

const PropertyFinderApp = ReactNavigation.StackNavigator({
  Home: { screen: HomeScreen },
  SearchPage: { screen: SearchPage },
  SearchResults: { screen: SearchResults },
  PropertyView: { screen: PropertyView },
  MapsPage: { screen: MapsPage }
});


ReactNative.AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp );
