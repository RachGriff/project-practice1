import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
// import DashBoard from './DashBoard'

export default class EditDetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <TextInput placeholder="Firstname" style={styles.textInput} />
        <TextInput placeholder="Lastname" style={styles.textInput} />
        <TextInput placeholder="email" style={styles.textInput} />
        <TextInput placeholder="d.o.b" style={styles.textInput} />
        <TextInput placeholder="username" style={styles.textInput} />

        {/* <Button title='send to dashboard'onPress={()=>{
          this.props.navigation.navigate("DashBoard")
        }} */}
        {/* /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  textInput: {
    backgroundColor: "#87cefa",
    color: "black",
    width: "50%",
    height: 40
  }
});
