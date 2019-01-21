import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'
import CameraScreen from './client/Components/CameraScreen'
import TranslationScreen from './client/Components/TranslationScreen'
// import Icon from 'react-native-vector-icons/Ionicons'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
        <AppNavigator />
      </SafeAreaView>
    )
  }
}

const AppTabNavigator = createMaterialTopTabNavigator({
  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      tabBarLabel: 'Camera',
      // tabBarIcon: ({ tintColor }) => (
        // <Icon name='ios-home' color={tintColor} size={24} />
      // )
    }
  },
  Translation: {
    screen: TranslationScreen,
    navigationOptions: {
      tabBarLabel: 'Translation',
      // tabBarIcon: ({ tintColor }) => (
      //   <Icon name='ios-settings' color={tintColor} size={24} />
      // )
    }
  }
}, {
  initialRouteName: 'Camera',
  order: ['Camera', 'Translation'],
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: 'orange',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'black',
      borderTopWidth: 0.5,
      borderTopColor: 'orange'
    },
    indicatorStyle: {
      height: 0
    },
    showIcon: true                                  // showIcon: false
  },
})

const SwitchNavigator = createSwitchNavigator({          // Rather than being rendered by a screen component, the AuthenticationNavigator is a screen component
  Main: AppTabNavigator,
});

const AppNavigator = createAppContainer(SwitchNavigator);














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

// class Camera extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>1</Text>
//       </View>
//     )
//   }
// }

// class Translation extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>2</Text>
//       </View>
//     )
//   }
// }

// export default createMaterialBottomTabNavigator({
//   Camera: {
//     screen: Camera,
//     navigationOptions: {
//       tabBarLabel: 'Camera',
//       tabBarIcon: ({tintColor})=>(
//         <Icon name='ios-home' color={tintColor} size={24} />
//       )
//     }
//   },
//   Translation: {
//     screen: Translation,
//     navigationOptions: {
//       tabBarLabel: 'Translation',
//       tabBarIcon: ({tintColor})=>(
//         <Icon name='ios-settings' color={tintColor} size={24} />
//       )
//     }
//   }
// }, {
//   initialRouteName: 'Camera',
//   // order: ['Camera', 'Translation'],
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

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

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