import React from "react";
import { View, Text } from "react-native";
import requestUrl from "../../../requestUrl";
import Axios from "axios";

class HomeScreen extends React.Component {

    state = {
        users: []
    }

    render() {
        const fullUrl = requestUrl + "users";
        // Retrieves Auth Token from previous Auth screen, set the value to "No token as a fallback"
        const authToken = this.props.navigation.getParam('authToken', "No Token");
        console.log(authToken);
        Axios.get(fullUrl, {
            headers: {
                "Authorization": authToken
            }
        }).then(response => {
            this.setState({users: response.data})
            console.log(this.state.users)
            // Print users
        }).catch(error => {
            console.log(error);
            // Display error message
        })
        return (
            <View>
                <Text>{"Hello"}</Text>
            </View>
        );
    }

}

export default HomeScreen;