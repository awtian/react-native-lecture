/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Button} from 'react-native';
import Lists from './components/Lists.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  state = {
    todo: ['bangun', 'mandi'],
    newTodo: ''
  }

  componentDidMount () {
    console.log('hello')
  }
  
  handleNewTodo (text) {
    this.setState({newTodo: text}, () => {console.log(this.state)})
  }

  addTodo = () => {
    this.setState({todo: [...this.state.todo, this.state.newTodo], newTodo: ''})
  }
  
  render() {
    const {todo} = this.state
    return (
      <View style={styles.container}>
        <Lists data={todo} />
        <TextInput 
          style={{height:70, width:100, padding: 10}} 
          placeholder='Add new todo'
          ref={this.newTodo}
          onChangeText={(text) => this.handleNewTodo(text)}
          value={this.state.newTodo}
          />
        <Button
          title="add todo"
          onPress={this.addTodo}
          />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
