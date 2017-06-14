'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableHighlight,
  Text
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

class PropertyView extends Component {
  static navigationOptions = {
    title: 'Property',
  };

  onLocationPressed() {
    var property = this.props.navigation.state.params.property;
    this.props.navigation.navigate('MapsPage',
    {
      longitude: property.longitude,
      latitude: property.latitude,
    });
  }

  render() {
    var property = this.props.navigation.state.params.property;
    var stats = property.bedroom_number + ' bed ' + property.property_type;
    if (property.bathroom_number) {
      stats += ', ' + property.bathroom_number + ' ' + (property.bathroom_number > 1
        ? 'bathrooms' : 'bathroom');
    }

    var price = property.price_formatted.split(' ')[0];

    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image}
            source={{uri: property.img_url}} />
        <View style={styles.heading}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.title}>{property.title}</Text>
          <View style={styles.separator}/>
        </View>
        <TouchableHighlight
            style={styles.button}
            onPress={this.onLocationPressed.bind(this)}
            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Location</Text>
        </TouchableHighlight>
        <Text style={styles.description}>{stats}</Text>
        <Text style={styles.description}>{property.summary}</Text>
      </ScrollView>
    );
  }
}

module.exports = PropertyView;
