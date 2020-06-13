import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Text,
    ActivityIndicator,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ClockIcon from '../src/clock.png'
{/* Ali Ergüç */}
{/* Github : https://github.com/alierguc?tab=repositories */}
{/* Linkedin : https://tr.linkedin.com/in/ali-erg%C3%BC%C3%A7-972ba6164 */}

export default class SaglikScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultData: [],
            isLoading: false,
            loadingBar: true
        }
    }
    componentDidMount() {
        this.getData();
    }

    GoToButton(props) {
        const navigation = useNavigation();
        console.log("Url : " + props.descParam)
        return (
            <TouchableOpacity
            onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('HaberIcerikScreen', {
                  urlToDesc: props.descParam

                });
              }}>
                <Text style={styles.descNewsText}><MaterialIcon name="page-next" color="#2565AE" size={32} />&nbsp;&nbsp;&nbsp;Haber Kaynağına Git</Text>
            </TouchableOpacity>
        );
        
    }


    renderItem = ({ item, index }) => {
        return (
            <View>
                <View style={styles.cardStyle}>
                    <Image style={styles.logo} source={{ uri: item.urlToImage }} />
                    <Text style={styles.textTitle}>{item.title}</Text>
                    <Text style={styles.textDesc}>{item.description}</Text>
                    <this.GoToButton  descParam={item.url}/>
                    <View style={styles.publishedCard}>
                        <Text style={styles.textPublish}>
                            <Image source={ClockIcon} style={{ width: 15, height: 15, marginRight: 15 }} />
                  &nbsp;&nbsp;Yayınlanma Tarihi : {item.publishedAt}</Text>

                    </View>

                </View>
            </View>
        );
    }

    getData = () => {
        fetch('http://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=e75d743ff904456e99edbc30098e62e8')
            .then(response => response.json())
            .then(json => {
                this.setState({ 
                    resultData: json.articles,
                    loadingBar: false,
                    isLoading: false
                 })
                console.log(json)
            })
    }

 
    render() {
        if (this.state.loadingBar) {
            return (
                <View style={{ flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator color="#2565AE" animating size="large" />
                    <Text style={{ color: "#2565AE", fontSize: 16, fontWeight: '700' }}>Yükleniyor, lütfen bekleyiniz</Text>
                </View>
            );
        }
        return (
            <SafeAreaView style={styles.container}>

                <FlatList
                    data={this.state.resultData}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                    refreshing={this.state.loadingBar}
                    onRefresh={this.getData}
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
        borderRadius: 15,
        backgroundColor: 'white',
        margin: 20
    },
    publishedCard: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#343D46'
    },
    descNewsText:{
        fontWeight:'700',
        margin: 15,
        textAlign: 'justify',
        color:'#2565AE'
    },
    logo: {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        width: '100%',
        height: 180,
    },
    textTitle: {
        margin: 15,
        textAlign: 'justify',
        fontSize: 16,
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
