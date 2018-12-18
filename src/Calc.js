import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class CustomButton extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      operators:{
        flex:1,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: 'slategray'
      },
      numbers:{
        flex: 1,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
      },
      zero:{
        flex: 2,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
      },
      clean: {
        flex: 3,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
      },
      buttonsText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 35
      },
      buttonsArea: {
      }
    });

  }

  selectStyle(style_selected){
    switch(style_selected){
      case "clean":
        return this.styles.clean;
        break;
      case "zero":
        return this.styles.zero;
        break;
      case "numbers":
        return this.styles.numbers;
        break;
      case "operators":
        return this.styles.operators;
        break;
    }
  }


  render(){
    return (
      <TouchableOpacity style={this.selectStyle(this.props.custom_style)} onPress={this.props.onPress}>
        <View >
          <Text style={this.styles.buttonsText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

}

export default class Calc extends Component {
  constructor(props){
    super(props);
    this.state= {display:"0"}
    this.pressed = this.pressed.bind(this);
    this.clean = this.clean.bind(this);
  }
  
  static navigationOptions = ({ navigation }) => ({
    title: 'Calc'
  });

  pressed(button){
    let state = this.state ;
    if(button == "=")
    {
      if(state.display.includes("x")){
        state.display = eval(state.display.replace("x","*"));
      }
      else{
        state.display = eval(state.display);
      }
    }
    else
    {
      state.display = state.display == "0" ? button : state.display += button ;
    }

    this.setState(state);
  }

  clean()
  {
    this.state.display = "0";
    this.setState(this.state);
  }

  render() {
    return (
      <View style={styles.calc}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{this.state.display}</Text>
        </View>

        <View style={styles.row}>
          <CustomButton custom_style="clean" text="C" onPress={()=>{this.clean()}}></CustomButton>
          <CustomButton custom_style="operators" text="/" onPress={()=>{this.pressed("/")}}></CustomButton>
        </View>

        <View style={styles.row}>
          <CustomButton custom_style="numbers" text="7" onPress={()=>{this.pressed("7")}}></CustomButton>
          <CustomButton custom_style="numbers" text="8" onPress={()=>{this.pressed("8")}}></CustomButton>
          <CustomButton custom_style="numbers" text="9" onPress={()=>{this.pressed("9")}}></CustomButton>
          <CustomButton custom_style="operators" text="x" onPress={()=>{this.pressed("x")}}></CustomButton>
        </View>

        <View style={styles.row}>
          <CustomButton custom_style="numbers" text="4" onPress={()=>{this.pressed("4")}}></CustomButton>
          <CustomButton custom_style="numbers" text="5" onPress={()=>{this.pressed("5")}}></CustomButton>
          <CustomButton custom_style="numbers" text="6" onPress={()=>{this.pressed("6")}}></CustomButton>
          <CustomButton custom_style="operators" text="-" onPress={()=>{this.pressed("-")}}></CustomButton>
        </View>

        <View style={styles.row}>
          <CustomButton custom_style="numbers" text="1" onPress={()=>{this.pressed("1")}}></CustomButton>
          <CustomButton custom_style="numbers" text="2" onPress={()=>{this.pressed("2")}}></CustomButton>
          <CustomButton custom_style="numbers" text="3" onPress={()=>{this.pressed("3")}}></CustomButton>
          <CustomButton custom_style="operators" text="+" onPress={()=>{this.pressed("+")}}></CustomButton>
        </View>

        <View style={styles.row}>
          <CustomButton custom_style="zero" text="0" onPress={()=>{this.pressed("0")}}></CustomButton>
          <CustomButton custom_style="numbers" text="." onPress={()=>{this.pressed(".")}}></CustomButton>
          <CustomButton custom_style="operators" text="=" onPress={()=>{this.pressed("=")}}></CustomButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calc: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  display: {
    flex: 1,
  },
  displayText: {
    textAlign: 'right',
    fontSize: 90
  }

});
