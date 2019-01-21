import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import CameraScreen from './client/Components/CameraScreen'
import { createMaterialTopTabNavigator } from 'react-navigation'
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
        <AppTabNavigator />
        <CameraScreen />
      </SafeAreaView>
      // <View>
      //   <AppTabNavigator />
      //   <CameraScreen />
      // </View>
    )
  }
}

class Camera extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>1: Camera Screen</Text>
      </View>
    )
  }
}

class Translation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>2: Translation Screen</Text>
      </View>
    )
  }
}

const AppTabNavigator = createMaterialTopTabNavigator({
  Camera: {
    screen: Camera,
    navigationOptions: {
      tabBarLabel: 'Camera',
      // tabBarIcon: ({ tintColor }) => (
        // <Icon name='ios-home' color={tintColor} size={24} />
      // )
    }
  },
  Translation: {
    screen: Translation,
    navigationOptions: {
      tabBarLabel: 'Translation',
      // tabBarIcon: ({ tintColor }) => (
      //   <Icon name='ios-settings' color={tintColor} size={24} />
      // )
    }
  }
}, {
  initialRouteName: 'Camera',
  // order: ['Camera', 'Translation'],
  // tabBarPosition: 'bottom',                                   // can delete to keep it on top
  // swipeEnabled: false,
  swipeEnabled: true,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: 'orange',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: '#f2f2f2',
      borderTopWidth: 0.5,
      borderTopColor: 'grey'
    },
    indicatorStyle: {
      height: 0
    },
    showIcon: true                                  // showIcon: false
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})














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
//   Camera: Camera,
// });

// const AppContainer = createAppContainer(AppNavigator);