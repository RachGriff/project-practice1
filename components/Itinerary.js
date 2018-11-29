import React from "react";
import { View, Text, Button, ListItem, FlatList } from "react-native";

export default class ItineraryScreen extends React.Component {
  state = {
    placeName: [
      "Manchester Art Gallery",
      "Manchester Central Library",
      "People's History Museum"
    ]
  };

  render() {
    console.log(this.state.attractions)
    return this.state.placeName.map((place, index) => {
      return (
        <View>
          <Button
            key={index}
            onPress={() => {
              this.props.navigation.navigate("Map", {
                placeArray: this.state.placeName,
                placename: `${this.props.navigation.state.params.location}`
              });
            }}
            title={place}
          />
        </View>
      );
    });
  }
  componentDidMount = () => {
    console.log('component mounting in progress')
    console.log(this.props.navigation.state.params.location)
    this.setState({
      attractions: this.props.navigation.state.params.attractions
    })
  }
}
