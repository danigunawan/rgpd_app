import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AuthScreen from './src/screens/Auth/Auth';
import HomeScreen from './src/screens/Home/Home';

const AppNavigator = createStackNavigator(
  {
    Auth: {
      screen: AuthScreen,
      navigationOptions: {
        title: "Connexion",
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Requêtes"
      }
    }
  },
  {
    initialRouteName: "Auth"
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;