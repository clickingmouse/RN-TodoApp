import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Heading from "./app/Heading";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todos: [],
      type: "All"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
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
