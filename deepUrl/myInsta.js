import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
export default class myInsta extends Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://www.instagram.com/alierguc1/' }}
            />
        )
    }

}
