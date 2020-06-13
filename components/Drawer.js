//#region Tanımlamalar
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet,StatusBar, Alert } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Router from '../router/Router';
import Animated from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OctiIcons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

{/* Ali Ergüç */ }
{/* Github : https://github.com/alierguc?tab=repositories */ }
{/* Linkedin : https://tr.linkedin.com/in/ali-erg%C3%BC%C3%A7-972ba6164 */ }

const Drawer = createDrawerNavigator();
//#endregion



//#region  Drawer Itemlerinin olduğu bölüm 
const DrawerContent = props => {

    return (
        <DrawerContentScrollView {...props}>
            <View>

                <View style={styles.drawerLogoContainer}>
                    <Image style={styles.drawerLogo} source={require('../src/llogo.png')} />
                    <Text style={styles.descText}>En Güncel Haberler</Text>
                </View>
                <Text style={styles.drawerItemText}>Haber Başlıkları</Text>
                <DrawerItem
                    labelStyle={{ marginLeft: -11, fontSize: 15, fontWeight: '700' }}
                    icon={() => <AntDesign name="pushpin" color="#2565AE" size={32} />}
                    label="Gündem"
                    onPress={() => props.navigation.navigate("GundemScreen")} />
                <DrawerItem
                    labelStyle={{ marginLeft: -11, fontSize: 15, fontWeight: '700' }}
                    icon={() => <FontAwesome name="football-ball" color="#2565AE" size={32} />}
                    label="Spor"
                    onPress={() => props.navigation.navigate("SporScreen")} />
                <DrawerItem
                    labelStyle={{ marginLeft: -7, fontSize: 15, fontWeight: '700' }}
                    icon={() => <FontAwesome name="flask" color="#2565AE" size={32} />}
                    label="Bilim"
                    onPress={() => props.navigation.navigate("BilimScreen")} />

                <DrawerItem
                    labelStyle={{ marginLeft: -20, fontSize: 15, fontWeight: '700' }}
                    icon={() => <FontAwesome name="robot" color="#2565AE" size={32} />}
                    label="Teknoloji"
                    onPress={() => props.navigation.navigate("TeknolojiScreen")} />

                <DrawerItem
                    labelStyle={{ marginLeft: -11, fontSize: 15, fontWeight: '700' }}
                    icon={() => <OctiIcons name="ruby" color="#2565AE" size={32} />}
                    label="Eğlence"
                    onPress={() => props.navigation.navigate("EglenceScreen")} />

                <DrawerItem
                    labelStyle={{ marginLeft: -11, fontSize: 15, fontWeight: '700' }}
                    icon={() => <FontAwesome name="heartbeat" color="#2565AE" size={32} />}
                    label="Sağlık"
                    onPress={() => props.navigation.navigate("SaglikScreen")} />
                <DividerComponent />
                <Text style={styles.drawerItemText}>Diğer</Text>
                <DrawerItem
                    labelStyle={{ marginLeft: -15, fontSize: 15, fontWeight: '700' }}
                    icon={() => <FontAwesome name="biohazard" color="#2565AE" size={32} />}
                    label="COVID-19 İstatistikleri"
                    onPress={() => props.navigation.navigate("CoronaScreen")} />
                <DrawerItem
                    labelStyle={{ marginLeft: -11, fontSize: 15, fontWeight: '700' }}
                    icon={() => <Entypo name="info-with-circle" color="#2565AE" size={32} />}
                    label="Hakkında"
                    onPress={() => props.navigation.navigate("HakkindaScreen")} />

            </View>
        </DrawerContentScrollView>
    );
}

//#endregion


//#region Divider Bileşeni
const DividerComponent = () => {
    return (
        <View style={styles.divider} />
    );
}
//#endregion

export default () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0));
    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    });

    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 15]
    });

    const screenStyles = { borderRadius, transform: [{ scale }] };
    return (

        <Drawer.Navigator
            overlayColor="transparent"
            drawerType="slide"
            drawerStyle="50%"
            contentContainerStyle={{ flex: 1 }}
            drawerContentOptions={{
                activeBackgroundColor: 'transparent',
                activeTintColor: 'green',
                inactiveTintColor: 'green'
            }}
            sceneContainerStyle={{
                backgroundColor: 'transparent'
            }}
            initialRouteName="GundemScreen"
            drawerContent={props => {
                setProgress(props.progress);
                return <DrawerContent {...props} />
            }}
        >
            <Drawer.Screen name="Screens">
                {props => <Router {...props} style={screenStyles} />}
            </Drawer.Screen>
        </Drawer.Navigator >

    );
};

//#region Stillendirmeler
const styles = StyleSheet.create({
    ViewStyle: {
        paddingLeft: 10
    },
    MenuButtonStyle: {
        width: 60,
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    textColor: {
        color: 'white',
        fontSize: 14
    },
    drawerLogo: {
        width: 200,
        height: 90,
        resizeMode: 'stretch',

    },
    descText: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: '700',
        color: '#2565AE',

    },
    drawerItemText:{
        marginBottom:10,
        fontSize: 22,
        marginLeft:20,
        fontWeight: '700',
        color: '#2565AE',
    },
    drawerLogoContainer: {

        flex: 0.5,
        justifyContent: 'center',
        margin: 25,
    },
    divider: {
        margin: 20,
        borderRadius: 120,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1.2
    }
})
//#endregion