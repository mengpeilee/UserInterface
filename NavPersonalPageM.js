/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

import React, { 
  Component,
  PropTypes,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import AchievementM from './AchievementM';
import PersonalPageM from './PersonalPageM';

export  default  class  NavPersonalPageM  extends  Component {
  render() {
        let defaultName = 'PersonalPageM';
        let defaultComponent = PersonalPageM;
        return (
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
        );
    }
}

module.exports = NavPersonalPageM;