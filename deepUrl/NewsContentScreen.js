import React from 'react'
import { WebView } from 'react-native-webview';

export default function NewsContent({ route, navigation }) {
        const {urlToDesc} = route.params;
        return (
            <WebView
                source={{ uri: `${urlToDesc}` }}
            />
        )
    

}
