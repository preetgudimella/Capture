import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import CameraScreen from './client/Components/CameraScreen'
import { createMaterialTopTabNavigator } from 'react-navigation'
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

export default class App extends React.Component {
  render() {
    return (
      // <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2'}}>
        // <AppTabNavigator />
        <CameraScreen />
      // </SafeAreaView>
    )
  }
}

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>1: Home Screen</Text>
//       </View>
//     )
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>2: Settings Screen</Text>
//       </View>
//     )
//   }
// }

// const AppTabNavigator = createMaterialTopTabNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       tabBarLabel: 'Home',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name='ios-home' color={tintColor} size={24} />
//       )
//     }
//   },
//   Settings: {
//     screen: SettingsScreen,
//     navigationOptions: {
//       tabBarLabel: 'Settings',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name='ios-settings' color={tintColor} size={24} />
//       )
//     }
//   }
// }, {
//   initialRouteName: 'Home',
//   // order: ['Home', 'Settings'],
//   tabBarPosition: 'bottom',                                   // can delete to keep it on top
//   swipeEnabled: false,                                        // swipeEnabled: true,
//                                                               // animationEnabled: false,
//   tabBarOptions: {
//     activeTintColor: 'orange',
//     inactiveTintColor: 'grey',
//     style: {
//       backgroundColor: '#f2f2f2',
//       borderTopWidth: 0.5,
//       borderTopColor: 'grey'
//     },
//     indicatorStyle: {
//       height: 0
//     },
//     showIcon: true                                  // showIcon: false
//   },
// })

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
// })














// createMaterialBottomTabNavigator

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'
// import CameraScreen from './client/Components/CameraScreen'
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

// // export default class App extends React.Component {
// //   render() {
// //     return (
// //         <CameraScreen />
// //     );
// //   }
// // }

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>1</Text>
//       </View>
//     )
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>2</Text>
//       </View>
//     )
//   }
// }

// export default createMaterialBottomTabNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       tabBarLabel: 'Home',
//       tabBarIcon: ({tintColor})=>(
//         <Icon name='ios-home' color={tintColor} size={24} />
//       )
//     }
//   },
//   Settings: {
//     screen: SettingsScreen,
//     navigationOptions: {
//       tabBarLabel: 'Settings',
//       tabBarIcon: ({tintColor})=>(
//         <Icon name='ios-settings' color={tintColor} size={24} />
//       )
//     }
//   }
// }, {
//   initialRouteName: 'Home',
//   // order: ['Home', 'Settings'],
//   activeTintColor: 'orange',                                   // activeTintColor: 'white'
//   shifting: true
// })

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
// })



















// https://reactnavigation.org/docs/en/common-mistakes.html

// const AuthenticationNavigator = createStackNavigator({
//   SignIn: SignInScreen,
//   ForgotPassword: ForgotPasswordScreen,
// });

// const AppNavigator = createSwitchNavigator({
//   /* 
//    * Rather than being rendered by a screen component, the
//    * AuthenticationNavigator is a screen component
//    */
//   Auth: AuthenticationNavigator,
//   Home: HomeScreen,
// });

// const AppContainer = createAppContainer(AppNavigator);