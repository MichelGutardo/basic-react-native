import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './src/Home';
import Calc from './src/Calc';
import DrinkWater from './src/DrinkWater';
import FortuneCookie from './src/FortuneCookie';
import MimimiMaker from './src/MimimiMaker';
import StopWatch from './src/StopWatch';


const Navigator = createStackNavigator({
  Home:{screen:Home},
  
  Calc:{screen:Calc},
  
  DrinkWater:{screen:DrinkWater},
  
  FortuneCookie:{screen:FortuneCookie},
  
  MimimiMaker:{screen:MimimiMaker},

  StopWatch:{screen:StopWatch}
});

const AppContainer = createAppContainer(Navigator);

export default AppContainer ;
