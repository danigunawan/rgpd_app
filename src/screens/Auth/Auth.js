import React from 'react';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';
import axios from "axios";
import requestURL from "../../../requestUrl";

class AuthScreen extends React.Component {
    state = {
        email: '',
        password: '',
        visibility: "invisible", //serves as a toggler to render the error message in case of wrong login
        authToken: ''
    }

    // Redirects to the Home Screen if credentials are valid

    buttonPressedHandler() {
        const fullUrl = requestURL + "login";
        console.log(fullUrl);
        axios.post(fullUrl, {
            email: this.state.email,
            password: this.state.password,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            this.setState({ authToken: response.data["auth_token"] });
            const { navigate } = this.props.navigation;
            console.log('AuthToken:', this.state.authToken);
            //console.log("res.data:", response.data);
            navigate("Home", {
                authToken: this.state.authToken
            });
        }).catch(error => {
            this.setState({ visibility: "visible" }); // show error message for wrong user/password
        });
    }
    /*buttonPressedHandler(){
        if (this.state.email == "yorickjacquin@gmail.com" && this.state.password == "Aristote1337!") {
            const { navigate } = this.props.navigation;
            navigate("Home");
        }
        else {
            this.setState({visibility: "visible"}); // show error message for wrong user/password
        }
    }*/
    render() {
        return (
            <View style={styles.viewContainer}>
                <View style={styles[this.state.visibility]}>
                    <Text style={{ color: 'white', fontWeight: "bold" }}>L'adresse mail ou le mot de passe est erroné.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text>Courriel</Text>
                    <TextInput
                        autoFocus={true}
                        style={styles.input}
                        keyboardType="email-address"
                        value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text })} />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Mot de passe</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Se connecter"
                        onPress={() => this.buttonPressedHandler()} />
                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "space-around",
        margin: 30
    },
    inputContainer: {

    },
    input: {
        height: 50,
        backgroundColor: "#eee",
        borderRadius: 10
    },
    buttonContainer: {
    },
    visible: {
        alignItems: "center",
        backgroundColor: "#ff3333",
        color: "white",
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    invisible: {
        display: 'none'
    }
});



export default AuthScreen;