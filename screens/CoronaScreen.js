import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    ScrollView,
    View,
    FlatList,
    TouchableOpacity,
    Text,
    Alert,
    ActivityIndicator,
    Image,
    Animated,
    Easing,
    ImageBackground,
    StatusBar,
} from 'react-native';
import ClockIcon from '../src/clock.png'

{/* Ali Ergüç */ }
{/* Github : https://github.com/alierguc?tab=repositories */ }
{/* Linkedin : https://tr.linkedin.com/in/ali-erg%C3%BC%C3%A7-972ba6164 */ }

const ANIMATION_DURATION = 250;
export default class CoronaScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultData: [],
            isLoading: false,
            loadingBar: true
        }
        this.spinValue = new Animated.Value(0)
        this._animated = new Animated.Value(0);
    }
    componentDidMount() {
        Animated.timing(this._animated, {
            toValue: 1,
            duration: ANIMATION_DURATION,
        }).start();
        this.getCoronaStatistics();
        this.spin()
    }
    spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 40000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }
    renderItem = ({ item, index }) => {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View>
                <StatusBar backgroundColor="#2565AE"/>
                <TouchableOpacity style={styles.cardStyle}  >
                    <View>
                        <ImageBackground source={require('../src/cardback.png')} style={{ width: '100%', resizeMode: 'crop', borderRadius: 30 }}>
                            <Animated.Image source={require('../src/cvir.png')} style={{
                                width: 125,
                                height: 125,
                                flex: 0.6,
                                position: 'absolute',
                                justifyContent: 'flex-end',
                                alignContent: 'flex-end',
                                alignSelf: 'flex-end',
                                margin: 10,
                                transform: [{ rotate: spin }]
                            }} />
                            <Text style={styles.countryTitle}>&nbsp;{item.country}</Text>
                            <Text style={styles.textDescription}>
                                &nbsp;&nbsp; Yeni Vaka : &nbsp;&nbsp; {item.cases.new}</Text>
                            <Text style={styles.textDescription}>
                                &nbsp;&nbsp; Hafif Vaka :  &nbsp;&nbsp;{item.cases.active}</Text>
                            <Text style={styles.textDescription}>
                                &nbsp;&nbsp; Kritik Seviyedeki Vaka : &nbsp;&nbsp;{item.cases.critical}</Text>
                            <Text style={styles.textDescription}>
                                &nbsp;&nbsp;&nbsp;İyileşen Hasta Sayısı :   &nbsp;&nbsp;{item.cases.recovered}</Text>
                            <Text style={styles.textTitle}>
                                &nbsp;&nbsp;Toplam : &nbsp;{item.cases.total}</Text>
                            <Text style={styles.textDescription}>&nbsp;&nbsp;&nbsp;Yeni Ölümler : &nbsp;&nbsp; {item.deaths.new}</Text>
                            <Text style={styles.textDescription}>&nbsp;&nbsp;&nbsp;Toplam Ölüm : &nbsp;&nbsp; {item.deaths.total}</Text>
                            <Text style={styles.textDescription}>
                                &nbsp;&nbsp;&nbsp;Test Toplamı : &nbsp;&nbsp; {item.tests.total}</Text>
                            <View style={styles.publishedCard}>
                                <Text style={styles.textPublish}>
                                    <Image source={ClockIcon} style={{ width: 15, height: 15, marginRight: 15 }} />
                  &nbsp;&nbsp;Yayınlanma Tarihi : {item.day}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    getCoronaStatistics = () => {
        try {
            fetch("https://covid-193.p.rapidapi.com/statistics", {
                "method": "GET",
                headers: new Headers({
                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                    "x-rapidapi-key": "5df40adbc4msh8f8e68ecbc02e11p1b89eejsn425127ab267e"
                })
            })
                .then(response => response.json())
                .then(returnedData => {
                    this.setState({
                        resultData: returnedData.response,
                        loadingBar: false,
                        isLoading: false
                    })
                    console.log(returnedData)
                })
        }
        catch{
            Alert.alert("We News", "Belirlenemeyen bir hata oluştu.")
        }
    }

    _handleLoading = () => {
        try {
            this.setState = ({
                refreshing: true
            }, () => {
                this.getCoronaStatistics();
            })
        }
        catch{
            Alert.alert("Hata", "Lütfen internet bağlanıtınızı kontrol ediniz.")
        }

    };
    render() {
        
        if(this.state.loadingBar)
        {
            return(
                
                <View style={{flex:1, padding:20, alignItems:'center',justifyContent:'center'}}>
                    <ActivityIndicator color="#2565AE" animating size="large"/>
                    <Text style={{color:"#2565AE",fontSize:16,fontWeight:'700'}}>Yükleniyor, lütfen bekleyiniz</Text>
                </View>
            );
        }
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    isLoading={this.state.isLoading}
                    data={this.state.resultData}
                    renderItem={this.renderItem}
                    keyExtractor={(index, key) => index}
                    refreshing={this.state.isLoading}
                    onRefresh={this.getCoronaStatistics}
                    onEndReachedThreshold={0}
                />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    topText: {
        textAlign: 'center',
        color: '#343D46',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: '700'
    },
    cardStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 30,
        backgroundColor: 'white',
        margin: 20
    },
    coronaLogo: {
        width: 125,
        height: 125,
        flex: 0.6,
        position: 'absolute',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignSelf: 'flex-end',
        margin: 10
    },
    publishedCard: {
        marginTop: 5,
        backgroundColor: '#005073'
    },
    logo: {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        width: '100%',
        height: 180,
    },
    totalTest: {
        margin: 15,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    },
    textDescription: {
        margin: 15,
        textAlign: 'left',
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    },
    textTitle: {
        margin: 15,
        textAlign: 'left',
        fontSize: 24,
        color: 'white',
        fontWeight: '700'
    },
    countryTitle: {
        margin: 15,
        textAlign: 'left',
        fontSize: 38,
        color: 'yellow',
        fontWeight: '700'
    },
    textPublish: {

        margin: 15,
        color: 'white',
        textAlign: 'justify',
        fontSize: 14,
    },
    textContent: {
        margin: 15,
        textAlign: 'justify',
        fontSize: 16,
        fontWeight: '700'
    },
    textDesc: {
        margin: 15,
        textAlign: 'justify',
        fontSize: 15,
    },
    container: {
        flex: 1
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
