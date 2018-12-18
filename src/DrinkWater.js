import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, Button } from 'react-native';

export default class DrinkWater extends Component {
  constructor(props){
    super(props);
    this.state = {drank:'0%', status:'Bad', pct:'0%'};
    this.addGlass = this.addGlass.bind(this);
    this.update = this.update.bind(this);
  }
  
  static navigationOptions = ({ navigation }) => ({
    title: 'Drink Water'
  });

  update(){
    let s = this.state;
    s.pct = Math.floor((parseInt(s.drank)/2000) * 100 );
    if(s.pct >= 100){
      s.status ="Good";
    }else{
      s.status = "Bad";
    }
    s.pct +="%";
    this.setState(s);
  }

  addGlass(){
    let s = this.state;
    s.drank = parseInt(s.drank);
    s.drank += 200;
    s.drank += "ml";
    this.setState(s);
    this.update();
  }

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require('../images/glass-of-water.jpg')} style={styles.bgImage}>
          <View style={styles.infoArea}>
            <View style={styles.area}>
              <Text style={styles.areaTitle}>Goal</Text>
              <Text style={styles.areaData}>2000ml</Text>
            </View>
            <View style={styles.area}>
              <Text style={styles.areaTitle}>Drank</Text>
              <Text style={styles.areaData}>{this.state.drank}</Text>
            </View>
            <View style={styles.area}>
              <Text style={styles.areaTitle}>Status</Text>
              <Text style={styles.areaData}>{this.state.status}</Text>
            </View>
          </View>
          <View style={styles.pctArea}>
            <Text style={styles.pctText}>{this.state.pct}</Text>
          </View>
          <View style={styles.btnArea}>
            <Button title="Drink 200ml" onPress={this.addGlass} />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    width: null
  }
  ,
  infoArea: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 50,
    opacity: 0.7,
    backgroundColor: '#ccc',
    marginTop:10

  },
  area: {
    flex: 1,
    alignItems: 'center'
  },
  areaTitle: {
    color: '#45b2fc',
    fontWeight: 'bold',
    fontSize: 25
  },
  areaData: {
    color: '#2b4274',
    fontSize: 25,
    fontWeight: 'bold'
  },
  pctArea: {
    flex: 1 ,
    opacity: 0.4,
    marginTop: 480,
    alignItems: 'center'
  },

  pctText: {
    fontSize: 70,
    color: '#fff',
    backgroundColor: '#ddd',
    borderRadius:50,
    width: 300,
    textAlign: 'center',
  },
  btnArea: {
    marginTop: 20,
    backgroundColor: 'transparent'
  }
});