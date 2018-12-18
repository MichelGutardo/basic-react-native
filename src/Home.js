import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.stylesType = this.stylesType.bind(this);

        this.styles = StyleSheet.create({
            button: {
                flex: 1,
                width: 150,
                height: 100,
                margin: 10,
                borderWidth: 2,
                borderRadius: 25,
                borderColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#c30',
            },
            text: {
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
            },
            calc: {
                flex: 1,
                width: 150,
                height: 100,
                margin: 10,
                borderWidth: 2,
                borderRadius: 25,
                borderColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'slategray',
            },
            drinkWater: {
                flex: 1,
                width: 150,
                height: 100,
                margin: 10,
                borderWidth: 2,
                borderRadius: 25,
                borderColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#009',
            },
            fortuneCookie: {
                flex: 1,
                width: 150,
                height: 100,
                margin: 10,
                borderWidth: 2,
                borderRadius: 25,
                borderColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#500',
            },
            mimimiMaker: {
                flex: 1,
                width: 150,
                height: 100,
                margin: 10,
                borderWidth: 2,
                borderRadius: 25,
                borderColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'orange',
            },
            stopWatch: {
                flex: 1,
                width: 150,
                height: 100,
                margin: 10,
                borderWidth: 2,
                borderRadius: 25,
                borderColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'green',
            },
        });
    }

    stylesType(type){
        switch(type){
            case "calc":
                return this.styles.calc;
                break;
            case "drinkWater":
                return this.styles.drinkWater;
                break;
            case "fortuneCookie":
                return this.styles.fortuneCookie;
                break;
            case "mimimiMaker":
                return this.styles.mimimiMaker;
                break;
            case "stopWatch":
                return this.styles.stopWatch;
                break;
            default:
                return this.styles.calc;
                break;
        }
    }

    render() {
        return (
            <TouchableOpacity style={this.stylesType(this.props.style)} onPress={this.props.onPress}>
                <Text style={this.styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }

}

export default class Home extends Component {
    constructor(props){
        super(props);
        this.NaveTo = this.NaveTo.bind(this);
    }

    NaveTo(to){
        this.props.navigation.navigate(to);
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Home'
    });


    render() {
        return (
            <View style={styles.body}>
                <View style={styles.row}>
                    <CustomButton style="calc" text="Calc" onPress={()=>{this.NaveTo('Calc')}}></CustomButton>
                    <CustomButton style="drinkWater" text="Drink Water" onPress={()=>{this.NaveTo('DrinkWater')}}></CustomButton>
                </View>
                <View style={styles.row} >
                    <CustomButton style="fortuneCookie" text="Fortune Cookie" onPress={()=>{this.NaveTo('FortuneCookie')}}></CustomButton>
                    <CustomButton style="mimimiMaker" text="Mimimi Maker" onPress={()=>{this.NaveTo('MimimiMaker')}}></CustomButton>
                </View>
                <View style={styles.row}>
                    <CustomButton style="stopWatch" text="StopWatch" onPress={()=>{this.NaveTo('StopWatch')}}></CustomButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#036"
    },
    row: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    }

});