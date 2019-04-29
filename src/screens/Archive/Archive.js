import React from "react";
import { View, FlatList } from 'react-native';
import User from '../../components/Users/User';
import requestUrl from "../../../requestUrl";
import axios from "axios";
import { NavigationEvents } from 'react-navigation';

class ArchiveScreen extends React.Component {
    state = {
        users: [],
        authToken: this.props.navigation.getParam('authToken', "No Token"),
        isLoading: false
    }

    request() {
        const fullUrl = requestUrl + "cemetary";
        this.setState({ isLoading: true });
        axios.get(fullUrl, {
            headers: {
                "Authorization": this.state.authToken
            }
        }).then(response => {
            this.setState({ users: response.data })
            console.log("Users on Archive.js:", this.state.users)
        }).catch(error => {
            console.log("Error in Cemetary.js", error);
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
                            key={object.item.id}
                            user={object.item}
                            navigation={this.props.navigation}
                            authToken={this.state.authToken}
                            navigation = {this.props.navigation}/>
                        )
                    }
                }
                keyExtractor={(item, index) => index.toString()}
                onRefresh={this.componentDidMount.bind(this)}
                refreshing={this.state.isLoading}
            />
            </View>
        );
    }
}

export default ArchiveScreen;