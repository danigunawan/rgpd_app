import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
//import { AuthScreen, HomeScreen, ArchiveScreen, UserModal } from "./src/screens/screens";
import AuthScreen from "./src/screens/Auth/Auth";
import HomeScreen from "./src/screens/Home/Home";
import ArchiveScreen from "./src/screens/Archive/Archive";
import UserModal from "./src/screens/UserModal/UserModal";
import NewsLetterScreen from "./src/screens/Newsletter/Newsletter";

const TabStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Requêtes"
      }
    },
    Archive: {
      screen: ArchiveScreen,
      navigationOptions: {
        title: "Archives"
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
    NewsLetter: {
      screen: NewsLetterScreen
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