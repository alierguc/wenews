import React, { Component } from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    Image 
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


{/* Ali Ergüç */ }
{/* Github : https://github.com/alierguc?tab=repositories */ }
{/* Linkedin : https://tr.linkedin.com/in/ali-erg%C3%BC%C3%A7-972ba6164 */ }


export default function HakkindaScreen({navigation}) {


        return (



            <View>
            
                <ScrollView>
                    <View style={styles.drawerLogoContainer}>
                        <Image style={styles.drawerDescLogo} source={require('../src/newsapilogo.jpg')} />
                        <Text style={styles.descText}><Text style={{ color: '#C21D72', fontSize: 12 }}>POWERED BY</Text> News API</Text>
                        <Image style={styles.drawerDescLogo} source={require('../src/rapidapilogo.jpg')} />
                        <Text style={styles.descText}><Text style={{ color: '#C21D72', fontSize: 12 }}>POWERED BY</Text> Rapid API</Text>
                        <Image style={styles.drawerLogo} source={require('../src/llogo.png')} />
                        <Text style={styles.descText}>En Güncel Haberler</Text>

                        <View style={styles.socialView}>
                            <TouchableOpacity onPress={() => navigation.navigate('LinkedinScreen')}>
                                <AntDesign name="linkedin-square" color="#0074B0" size={42} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.middleButton} onPress={() => navigation.navigate('GithubScreen')}>
                                <AntDesign name="github" color="#000000" size={42} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('InstagramScreen')}>
                                <AntDesign name="instagram" color="#C21D72" size={42} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.descNT}>Muhammet Ali Ergüç &copy;2020</Text>

                    </View>

                </ScrollView>
            </View>
        )

}

const styles = StyleSheet.create({
    ViewStyle: {
        paddingLeft: 10
    },
    socialView: {
        marginTop: 30,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center'
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
    middleButton: {
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '700',
        fontSize: 16,
        color: '#2565AE',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'
    },
    drawerLogo: {
        width: 150,
        height: 75,
        resizeMode: 'stretch',

    },
    drawerDescLogo: {
        marginBottom: 5,
        borderRadius: 120,
        width: 70,
        height: 70,
        resizeMode: 'stretch',

    },
    descNT: {
        marginTop: 15,
        marginBottom: 20,
        fontSize: 16,
        fontWeight: '700',
        color: '#2565AE',

    },
    descText: {
        marginTop: 2,
        marginBottom: 20,
        fontSize: 18,
        fontWeight: '700',
        color: '#2565AE',

    },
    drawerLogoContainer: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 25,
    },
    divider: {
        margin: 30,
        borderRadius: 120,
        borderBottomColor: 'black',
        borderBottomWidth: 1.2
    }
})
