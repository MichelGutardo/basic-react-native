import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class StopWatch extends Component {

  constructor(props) {
    super(props);
    this.state = { timer: 0.0, button: 'Start' };
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.number = null;
  }
  
  static navigationOptions = ({ navigation }) => ({
    title: 'StopWatch'
  });

  start() {
    state = this.state;

    if (this.number == null) {
      this.number = setInterval(()=>{this.update(state)},100);

      state.button = "Stop";

    } else {
      state.button = "Start";
      clearInterval(this.number);
      this.number = null;
    }

    this.setState(state);
  }

  reset() {
    state = this.state;
    state.timer = 0;
    this.number = null;
    clearInterval(this.number);
    this.setState(state);

  }

  update(state) {
    state.timer += 0.1;
    this.setState(state);
  }

  render() {
    return (
      <View style={styles.body}>
        <Image source={require("../images/sand-clock.png")} style={styles.image}></Image>
        <View style={styles.buttonsArea}>
          <Text style={styles.timer}>{this.state.timer.toFixed(1)}</Text>
        </View>
        <View style={styles.buttonsArea}>
          <TouchableOpacity style={styles.button} onPress={this.start}>
            <Text style={styles.textButton}>{this.state.button}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.reset}>
            <Text style={styles.textButton}>Reset</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },

  image: {
    flex: 1,
    height: 800,
    width: 700,
    left: -190,
    position: 'absolute',
    zIndex: 0
  },

  timer: {
    color: 'white',
    fontSize: 100,
    marginTop: 300,
  },

  buttonsArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textButton: {
    color: 'white',
    fontSize: 23,
    margin: 30,
  },

  button: {
    borderColor: 'white',
    borderRadius: 25,
    borderWidth: 2,
    margin: 10
  }

});
