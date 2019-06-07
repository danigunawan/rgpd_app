import React from "react";
import { View, Button, StyleSheet } from "react-native";


class PathsScreen extends React.Component {

    visitorPressedHandler() {
        this.props.navigation.navigate('Visitor');
    }

    adminPressedHandler() {
        this.props.navigation.navigate('Admin');
    }

    render () {
        return (
            <View style={styles.container}>
                <Button
                    title="Visiteur"
                    onPress={() => this.visitorPressedHandler()} />
                <Button
                    title="Administrateur"
                    onPress={() => this.adminPressedHandler()} />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    }
}
export default PathsScreen;