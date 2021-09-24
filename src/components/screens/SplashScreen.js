import React from 'react'
import {Animated, Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

//Library dari luar
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'


const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle='light-content'/>
            <View style={styles.header}>
                <Animatable.Image
                animation='bounceIn' duraton='1500' source={require('../../assets/images/logo.png')} style={styles.logo} resizeMode='stretch' />
            </View>
            <Animatable.View animation='fadeInUpBig' duraton='3000' View style={styles.footer}>
                <Text style={styles.title}>Stay Connected With Us</Text>
                <Text>Let's Start</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                        <LinearGradient colors={['#08D4C4', '#01AB9D']} style={styles.signIn}>
                            <Text style={styles.textSign}>Get Started</Text>
                            <FontAwesome name='chevron-right' size={18} color='#F0F0F0'/>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default SplashScreen

const {height} = Dimensions.get('screen')
const height_logo = height * 0.3

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#009387'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    footer:{
        flex:1,
        backgroundColor:'#F0F0F0',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        paddingVertical:50,
        paddingHorizontal:30,
    },
    logo:{
        width: height_logo,
        height: height_logo,
    },
    title:{
        color:'#05375A',
        fontSize:32,
        fontWeight:'bold'
    },
    text:{
        color:'grey',
        marginTop:5
    },
    button:{
        position:'absolute',
        right:20,
        bottom:50,
        alignItems: 'flex-end',
        marginTop:30
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
    },
    textSign:{
        color:'#F0F0F0',
        fontWeight:'bold',
    }
})