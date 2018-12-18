import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      button: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor: props.color,
        backgroundColor: 'transparent',
        borderRadius: 25,
      },
      buttonArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonText: {
        color: props.color,
        fontSize: 14,
        fontWeight: 'bold',
      }

    });
  }

  

  render() {
    return (
      <TouchableOpacity style={this.styles.button} onPress={this.props.onPress}>
        <View style={this.styles.buttonArea}>
          <Text style={this.styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

}


export default class FortuneCookie extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: "" };
    this.phrases = ['Não ligue para a ostentação dos animais ao seu redor','Você vai morrer, aceite isso e não se limite', 'Não seja hipocrita!'];
    this.breakCookie = this.breakCookie.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Fortune Cookie'
  });

  breakCookie() {
    let s = this.state;
    let rnd = Math.floor(Math.random() * this.phrases.length);
    s.quote = '"' + this.phrases[rnd]+ '"';
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require("../images/fortune-cookie.jpg")} style={styles.bgImage}>
          <View style={styles.data}>
            <Text style={styles.text}>{this.state.quote}</Text>
            <CustomButton color="#66ff66" onPress={this.breakCookie} text="Break Cookie"></CustomButton>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    width: null
  },
  data:{
    flex: 1 ,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  text:{
    alignItems: 'center',
    color: '#000000',
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 250,
    margin: 30
  }

});
