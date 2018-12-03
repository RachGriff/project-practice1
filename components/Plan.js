import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import DateTimePickerTester from './DatePicker';
import * as api from '../api';
import Nav from './Nav.js';

export default class PlanScreen extends React.Component {
  state = {
    location: 'Manchester',
    username: 'williamwalkers',
    attractions: [],
  };
  render() {
    return (
      <>
        <Nav openDrawer={this.props.navigation.openDrawer} />
        <View style={styles.view}>
          <Text>Pick a location:</Text>
        </View>
        <View style={styles.view}>
          <TextInput
            value={this.state.location}
            style={styles.textInput}
            placeholder="Location city"
            onChangeText={location => this.setState({ location })}
          />
        </View>
        <View style={styles.view}>
          <DateTimePickerTester />
          <Text>{this.props.date}</Text>
        </View>
        <View style={styles.view}>
          <Button
            title="Map my day!"
            onPress={() => {
              api
                .getAttractions(this.state.username, this.state.location)
                .then(attractions =>
                  this.setState({ attractions: attractions }),
                )
                .then(res => {
                  this.props.navigation.navigate('Itinerary', {
                    location: `${this.state.location}`,
                    attractions: this.state.attractions,
                  });
                });
            }}
          />
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    // padding: 100,
    // flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#87cefa',
    color: 'black',
    width: '50%',
    height: 40,
  },
  date: {
    color: 'blue',
  },
});
