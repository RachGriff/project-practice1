import React from "react";
import { View, Text, Button } from "react-native";
// import DashBoard from './DashBoard'

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
        {/* <Button title='send to dashboard'onPress={()=>{
          this.props.navigation.navigate("DashBoard")
        }} */}
        {/* /> */}
      </View>
    );
  }
}