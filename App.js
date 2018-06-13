import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Heading from "./app/Heading";
import Input from "./app/Input";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todos: [],
      type: "All"
    };
  }
  inputChange(inputValue) {
    console.log("Input Value : ", inputValue);
    this.setState({ inputValue });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;
/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
