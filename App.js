import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Heading from "./app/Heading";
import Input from "./app/Input";
import Button from "./app/Button";
import TodoList from "./app/todoList";

let todoIndex = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todos: [],
      type: "All"
    };
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  inputChange(inputValue) {
    console.log("Input Value : ", inputValue);
    this.setState({ inputValue });
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    let todo = {
      title: this.state.inputValue,
      todoIndex: todoIndex,
      complete: false
    };
    todoIndex++;
    this.state.todos.push(todo);
    this.setState({ todos: this.state.todos, inputValue: "" }, () => {
      console.log("State:", this.state);
    });
  }

  toggleComplete(todoIndex) {
    let { todos } = this.state;
    todos.forEach(todo => {
      if (todo.todoIndex === todoIndex) {
        todo.Complete = !todo.Complete;
      }
    });
    this.setState({ todos });
  }

  deleteTodo(todoIndex) {
    let { todos } = this.state;
    todos = this.state.todos.filter(todo => {
      return todo.todoIndex !== todoIndex;
    });
    this.setState({ todos });
  }
  render() {
    const { inputValue, todos } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <TodoList
            todos={todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos}
          />
          <Button submitTodo={() => this.submitTodo()} />
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
