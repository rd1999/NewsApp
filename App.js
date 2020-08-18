import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";
import ResultsDetailScreen from "./src/screens/ResultsDetailScreen"
import { createDrawerNavigator } from "react-navigation-drawer"
import businessScreen from './src/screens/businessScreen';
import sportsScreen from './src/screens/sportsScreen';
import Icon from "react-native-vector-icons/Ionicons"
import React from "react"
import {View} from "react-native"
import scienceScreen from './src/screens/scienceScreen';
import technologyScreen from './src/screens/technologyScreen';
import politicsScreen from './src/screens/politicsScreen';

const homeNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsDetail: ResultsDetailScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return{
        headerStyle: {
          backgroundColor: '#3a9ad3'
        },
        headerTitle: 'INDIA NEWS',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        },
        headerLeft: (
          <Icon 
            style={{paddingLeft:10, color: "white"}}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <View />
        )
      }
    }
  }
)

const businessNavigator = createStackNavigator(
  {
    Business: businessScreen,
    ResultsDetail: ResultsDetailScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return{
        headerStyle: {
          backgroundColor: '#3a9ad3'
        },
        headerTitle: 'INDIA NEWS',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        },
        headerLeft: (
          <Icon 
            style={{paddingLeft:10, color: "white"}}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <View />
        )
      }
    }
  }
)

const SportsNavigator = createStackNavigator(
  {
    Sports: sportsScreen,
    ResultsDetail: ResultsDetailScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return{
        headerStyle: {
          backgroundColor: '#3a9ad3'
        },
        headerTitle: 'INDIA NEWS',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        },
        headerLeft: (
          <Icon 
            style={{paddingLeft:10, color: "white"}}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <View />
        )
      }
    }
  }
)

const ScienceNavigator = createStackNavigator(
  {
    Science: scienceScreen,
    ResultsDetail: ResultsDetailScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return{
        headerStyle: {
          backgroundColor: '#3a9ad3'
        },
        headerTitle: 'INDIA NEWS',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        },
        headerLeft: (
          <Icon 
            style={{paddingLeft:10, color: "white"}}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <View />
        )
      }
    }
  }
)

const TechnologyNavigator = createStackNavigator(
  {
    technology: technologyScreen,
    ResultsDetail: ResultsDetailScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return{
        headerStyle: {
          backgroundColor: '#3a9ad3'
        },
        headerTitle: 'INDIA NEWS',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        },
        headerLeft: (
          <Icon 
            style={{paddingLeft:10, color: "white"}}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <View />
        )
      }
    }
  }
)

const PoliticsNavigator = createStackNavigator(
  {
    politics: politicsScreen,
    ResultsDetail: ResultsDetailScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return{
        headerStyle: {
          backgroundColor: '#3a9ad3'
        },
        headerTitle: 'INDIA NEWS',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          flex: 1
        },
        headerLeft: (
          <Icon 
            style={{paddingLeft:10, color: "white"}}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <View />
        )
      }
    }
  }
)

const DrawerNavigator = createDrawerNavigator(
  {
    Home: homeNavigator,
    Sports: SportsNavigator,
    Business: businessNavigator,
    Science: ScienceNavigator,
    Technology: TechnologyNavigator,
    Politics: PoliticsNavigator
  },
  {
    // hideStatusBar: true,
    // drawerBackgroundColor: 'rgba(255, 255, 255, .9)',
    // overlayColor: '#3a9ad3',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#3a9ad3'
    }
  }
)

export default createAppContainer(DrawerNavigator);
