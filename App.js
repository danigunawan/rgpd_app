import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
//import { AuthScreen, HomeScreen, ArchiveScreen, UserModal } from "./src/screens/screens";
import AuthScreen from "./src/screens/Auth/Auth";
import HomeScreen from "./src/screens/Home/Home";
import ArchiveScreen from "./src/screens/Archive/Archive";
import UserModal from "./src/screens/UserModal/UserModal";
import NewsLetterScreen from "./src/screens/Newsletter/Newsletter";
import PathsScreen from "./src/screens/Paths/Paths";



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

const AdminStack = createStackNavigator(
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
    initialRouteName: "Auth",
    headerMode: "none"
  }
);


const RootStack = createStackNavigator(
  {
    Main: {
      screen: AdminStack,
    },
    UserModal: {
      screen: UserModal,
      header: null
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
const VisitorStack = createStackNavigator(
  {
    Visitor: {
      screen: NewsLetterScreen,
      title: "Visiteur"
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)
const PathStack = createStackNavigator(
  {
    Paths: {
      screen: PathsScreen,
      navigationOptions: {
        title: "Accueil"
      }
    },
    Admin: {
      screen: RootStack,
    },
    Visitor: {
      screen: VisitorStack
    },
  },
  {
    initialRouteName: "Paths",
    mode: 'modal',
    headerMode: "screen"
  }
);

const AppContainer = createAppContainer(PathStack);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;