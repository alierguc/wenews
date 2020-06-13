import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
export default class myGithub extends Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://github.com/alierguc' }}
            />
        )
    }

}
