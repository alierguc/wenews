import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import GundemScreen from '../screens/GundemScreen';
import CoronaScreen from '../screens/CoronaScreen';
import EglenceScreen from '../screens/EglenceScreen';
import SaglikScreen from '../screens/SaglikScreen';
import SporScreen from '../screens/SporScreen';
import BilimScreen from '../screens/BilimScreen';
import TeknolojiScreen from '../screens/TeknolojiScreen';
import HakkindaScreen from '../screens/HakkindaScreen';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import myGithub from '../deepUrl/myGithub';
import myInsta from '../deepUrl/myInsta';
import myLinkedin from '../deepUrl/myLinkedin';
import NewsContent from '../deepUrl/NewsContentScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

{/* Mevcut sayfadaki geçiş işlemleri için routing konfigürasyonu */ }
{/* Ali Ergüç */ }
{/* Github : https://github.com/alierguc?tab=repositories */ }
{/* Linkedin : https://tr.linkedin.com/in/ali-erg%C3%BC%C3%A7-972ba6164 */ }

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
//#region Drawer Routeları

const Router = ({ navigation, style }) => {
    return (
        <Animated.View style={[{ flex: 1, overflow: 'hidden' }, style]}>
            <Stack.Navigator
                backgroundColor="#ce0e0e"
                screenOptions={{
                    headerLeft: () => (
                        <View style={styles.ViewStyle}>
                            <TouchableOpacity
                                onPress={() => navigation.openDrawer()}
                                style={styles.MenuButtonStyle}>
                                <MaterialIcon name="menu" color="white" size={32} />
                            </TouchableOpacity>

                        </View>
                    ),
                }}
            >
                
                <Stack.Screen options={{ title: 'Gündem', headerTintColor: 'white', headerStyle: { backgroundColor: '#2565AE', }, }} name="GundemScreen" component={GundemScreen} />
                <Stack.Screen options={{ title: 'Eğlence', headerTintColor: 'white', headerStyle: { backgroundColor: '#2565AE', }, }} name="EglenceScreen" component={EglenceScreen} />
                <Stack.Screen options={{ title: 'Sağlık', headerTintColor: 'white', headerStyle: { backgroundColor: '#2565AE', }, }} name="SaglikScreen" component={SaglikScreen} />
                <Stack.Screen options={{ title: 'Spor', headerTintColor: 'white', headerStyle: { backgroundColor: '#2565AE', }, }} name="SporScreen" component={SporScreen} />
                <Stack.Screen options={{ title: 'Bilim', headerTintColor: 'white', headerStyle: { backgroundColor: '#2565AE', }, }} name="BilimScreen" component={BilimScreen} />
                <Stack.Screen options={{ title: 'Teknoloji', headerTintColor: 'white', headerStyle: { backgroundColor: '#2565AE', }, }} name="TeknolojiScreen" component={TeknolojiScreen} />
                <Stack.Screen name="Divider" component={DividerComponent} />
                <Stack.Screen options={{ title: 'Corona İstatistikleri', backgroundColor: '#ce0e0e', headerTintColor: 'white', headerStyle: { backgroundColor: '#2565AE', }, }} name="CoronaScreen" component={CoronaScreen} />
                <Stack.Screen options={{ title: 'Hakkında', headerTintColor: 'white', headerStyle: { backgroundColor: '#2565AE', }, }} name="HakkindaScreen" component={HakkindaScreen} />
                <Stack.Screen options={{ title: 'Linkedin Hesabım', headerTintColor: 'white', headerStyle: { backgroundColor: '#2565AE', }, }} name="LinkedinScreen" component={myLinkedin} />
                <Stack.Screen options={{ title: 'Github Hesabım', headerTintColor: 'white', headerStyle: { backgroundColor: '#2565AE', }, }} name="GithubScreen" component={myGithub} />
                <Stack.Screen options={{ title: 'Instagram Hesabım', headerTintColor: 'white', headerStyle: { backgroundColor: '#2565AE', }, }} name="InstagramScreen" component={myInsta} />
                <Stack.Screen options={{ title: 'Haber İçeriği', headerTintColor: 'white', headerStyle: { backgroundColor: '#2565AE', }, }} name="HaberIcerikScreen" component={NewsContent} />
            </Stack.Navigator>
        </Animated.View>
    );
};

//#endregion
const DividerComponent = () => {
    return (
        <View style={styles.divider} />
    );
}

const styles = StyleSheet.create({
    divider: {
        margin: 30,
        borderRadius: 120,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1.2
    },
    ViewStyle: {
        paddingLeft: 10
    },
    MenuButtonStyle: {
        width: 60,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textColor: {
        color: 'white',
        fontSize: 14
    },
    drawerLogo: {
        width: 200,
        resizeMode: 'stretch',
        height: 70
    },
    drawerLogoContainer: {
        flex: 0.4,
        margin: 20,
    },
    divider: {
        margin: 30,
        borderRadius: 120,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1.2
    }
})
export default Router;