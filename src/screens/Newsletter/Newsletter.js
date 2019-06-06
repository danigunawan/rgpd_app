import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";


class NewsLetterScreen extends React.Component {

    render () {
        return (
            <View style={styles.container}>
                <WebView
                source={{ uri: "https://madparis.fr/francais/lettre-d-information/lettre-d-information" }}
                 />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    }
}

export default NewsLetterScreen;