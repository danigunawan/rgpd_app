import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


class User extends React.Component {
    state = {
        user: this.props.user
    }
    userPressedHandler() {
        console.log("pressed");
        this.props.navigation.navigate('UserModal', {
            user: this.state.user,
            authToken: this.props.authToken
        });
    }
    render() {
        return (
            <TouchableOpacity onPress={this.userPressedHandler.bind(this)}>
                <View  style={styles.UserContainer}>
                    <View>
                        <Text>Prénom: {this.state.user.name}</Text>
                    </View>
                    <View>
                        <Text>Nom: {this.state.user.surname}</Text>
                    </View>
                    <View>
                        <Text>Courriel: {this.state.user.email}</Text>
                    </View>
                    <View>
                        <Text>Téléphone: {this.state.user.phone}</Text>
                    </View>
                    <View>
                        <Text>Adresse: {this.state.user.address}</Text>
                    </View>
                    <View>
                        <Text>Ville: {this.state.user.city}</Text>
                    </View>
                    <View>
                        <Text>Code postal: {this.state.user.zipcode}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    UserContainer: {
        padding: 20,
        margin: 10,
        fontSize: 50,
        backgroundColor: '#80bfff',
        color: "white",
        borderRadius: 10
        //margin: 15
        //height: 50
    }
});


export default User;