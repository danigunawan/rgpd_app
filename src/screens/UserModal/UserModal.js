import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import requestUrl from "../../../requestUrl";
import axios from 'axios';

class UserModal extends React.Component {
    static navigationOptions = {
        header: null
    };
    archiveButtonPressed () {
        const fullUrl = requestUrl + "archive";
        console.log("Auth Token received by USerModal: ", this.props.navigation.getParam('authToken', "No Token"))
        axios.post(fullUrl, {
            id: this.props.navigation.getParam('user', null).id
        },{
            headers: {
                "Authorization": this.props.navigation.getParam('authToken', "No Token")
            }
        }
        ).then(response => {
            // ideally, add a succes message
            console.log(response);
            this.props.navigation.goBack();
        }).catch(error => {
            console.log("Error in UserModal.js", error);
        })
    }
    render() {
        console.log(this.props)
        const user = this.props.navigation.getParam('user', null);
        return (
            <View style = {{flex:1}}>
                <View key={user.id} style={styles.UserContainer}>
                    <View>
                        <Text style= {styles.Text}>Prénom: {user.name}</Text>
                    </View>
                    <View>
                        <Text style= {styles.Text}>Nom: {user.surname}</Text>
                    </View>
                    <View>
                        <Text style= {styles.Text}>Courriel: {user.email}</Text>
                    </View>
                    <View>
                        <Text style= {styles.Text}>Téléphone: {user.phone}</Text>
                    </View>
                    <View>
                        <Text style= {styles.Text}>Adresse: {user.address}</Text>
                    </View>
                    <View>
                        <Text style= {styles.Text}>Ville: {user.city}</Text>
                    </View>
                    <View>
                        <Text style= {styles.Text}>Code postal: {user.zipcode}</Text>
                    </View>
                </View>
                <View style = {{flex: 1}}>
                    <Button 
                        title = "Archiver" 
                        color="green"
                        onPress={this.archiveButtonPressed.bind(this)}/>
                    <Button 
                        title= "Fermer"
                        color="red"
                        onPress={() => this.props.navigation.goBack()}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    UserContainer: {
        flex: 3,
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: 20,
        margin: 10,
        backgroundColor: '#80bfff',
        borderRadius: 10
        //margin: 15
        //height: 50
    },
    Text: {
        fontWeight:"bold",
        fontSize:15
    }
});
export default UserModal;