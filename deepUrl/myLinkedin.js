import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
export default class myLinkedin extends Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://www.linkedin.com/in/ali-erg%C3%BC%C3%A7-972ba6164/' }}
            />
        )
    }

}
