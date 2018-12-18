import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image} from 'react-native';

export default class MimimiMaker extends Component{
  constructor(props){
    super(props);
    this.state = {text1:'Text 1', text2:'Text 2'};
    this.write = this.write.bind(this);

  }
  
  static navigationOptions = ({ navigation }) => ({
    title: 'MimimiMaker'
  });

  write(text){
    let s = this.state;
    s.text1 = text;
    s.text2 = this.replaceVowels(text);
    this.setState(s);
  }

  replaceVowels(text){ 
    let newText = text.toLowerCase();
    newText = newText.replace(/(a|e|i|o|u)/g,'i');
    newText = newText.replace(/(á|é|í|ó|ú)/g,'i');
    newText = newText.replace(/(à|è|ì|ò|ù)/g,'i');
    newText = newText.replace(/(â|ê|î|ô|û)/g,'i');
    newText = newText.replace(/(ã|õ)/g,'i');
    return newText;
  }


  render() {
    return (
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>MimimiMaker</Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Type your mimimi" onChangeText={this.write}/>
        </View>

        <View style={styles.area}>
          <Text style={[styles.text, styles.text1]} >{this.state.text1.toUpperCase()}</Text>
          <Image style={styles.guy} source={require('../images/mimimi.jpg')}/> 
          <Text style={[styles.text, styles.text2]} >{this.state.text2.toUpperCase()}</Text>
        </View>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#999',
    paddingTop: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  titulo:{
    fontSize: 30,
    color: '#FFF',
  },

  inputArea:{
    alignSelf: 'stretch',
  },
  
  input:{
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#EEE',
    color: '#000',
    height: 40,
    margin: 20,
    padding: 10
  },

  area:{
    width: 300,
    height: 300,
    marginTop: 10,
  },

  guy:{
    width: 300,
    height: 300,
    marginTop: -70,
    zIndex: 0
  },

  text:{
    fontSize: 25,
    color: '#FFF',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 70
  },

  text1:{
    zIndex: 1
  },

  text2:{
    zIndex: 1,
    marginTop: -70
  }
});
