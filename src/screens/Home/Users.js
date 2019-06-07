import React from "react";
import { View, FlatList } from 'react-native';
import User from '../../components/Users/User';
import requestUrl from "../../../requestUrl";
import axios from "axios";
import { NavigationEvents } from 'react-navigation';

class UsersScreen extends React.Component {
    state = {
        users: [],
        authToken: this.props.navigation.getParam('authToken', "No Token"),
        isLoading: false
    }

    request() {
        const fullUrl = requestUrl + "users";
        this.setState({ isLoading: true });
        axios.get(fullUrl, {
            headers: {
                "Authorization": this.state.authToken
            }
        }).then(response => {
            this.setState({ users: response.data })
            console.log("Users on Users.js:", response.data)
        }).catch(error => {
            console.log("Error in Users.js", error);
        }).then(() => this.setState({ isLoading: false }));
    }

    render() {
        return (
            <View>
                <NavigationEvents onDidFocus={this.request.bind(this)} />
                <FlatList
                    data={this.state.users}
                    renderItem={
                        object => {
                            return (
                                <User
                                    user={object.item}
                                    navigation={this.props.navigation}
                                    authToken={this.state.authToken}
                                    navigation={this.props.navigation} />
                            )
                        }
                    }
                    keyExtractor={(item, index) => item.id.toString()}
                    onRefresh={this.componentDidMount.bind(this)}
                    refreshing={this.state.isLoading}
                />
            </View>


        );
    }
}

export default UsersScreen;