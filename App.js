import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import AuthScreen from "./src/screens/Auth/Auth";
import HomeScreen from "./src/screens/Home/Home";
import ArchiveScreen from "./src/screens/Archive/Archive";
import UserModal from "./src/screens/UserModal/UserModal";
import Icon from "react-native-vector-icons/Ionicons";

const TabStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Requêtes",
        labelColor: "tomato",
        tabBarIcon: ({tintColor}) => <Icon name="ios-home" size={30}/>,
        activeTintColor:'blue',
        inactiveTintColor: 'gray',
        fontSize: 15,
      }
    },
    Archive: {
      screen: ArchiveScreen,
      navigationOptions: {
        title: "Archives",
        labelColor: "tomato",
        tabBarIcon: ({tintColor}) => <Icon name="ios-archive" size={30}/>,
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        labelStyle: {fontSize: 15, color:"black"}
      }
    },
  },
  {
    initialRouteName: "Home"
  }
);

const MainStack = createStackNavigator(
  {
    Auth: {
      screen: AuthScreen,
      navigationOptions: {
        title: "Connexion",
      }
    },
    Requests: {
      screen: TabStack
    }
  },
  {
    initialRouteName: "Auth"
  }
);


const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    UserModal: {
      screen: UserModal
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;