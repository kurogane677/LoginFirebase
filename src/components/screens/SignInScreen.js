import React, { useEffect, useState } from 'react'
import { Button, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

//Library dari luar
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const SignInScreen = ({navigation}) => {

    const [data, setData] = useState({
        email: '',
        password:'',
        checkItem:false,
        secureTextEntry:true,
    })

    const checkInput = (val) => {
        if (val.length > 0){
            setData({
                ... data,
                email:val,
                checkItem:true,
            })
        }else{
            setData({
                ... data,
                email:val,
                checkItem:false,
            })
        }
    }

    const checkPassword = (val) => {
        setData({
            ... data,
            password:val,
        })
    }

    const checkSecurity = () => {
        setData({
            ... data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
        <View style={styles.container}>
            <Animatable.View style={styles.header}>
                <Text style={styles.textheader}>Welcome, Please Sign in here</Text>
            </Animatable.View>
            <Animatable.View animation='fadeInUpBig' style={styles.footer}>
                <Text style={styles.textfooter}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome name='user' color='#0F0F0F' size={24}/>
                    <TextInput placeholder='Place your username' style={styles.textInput} onChangeText={(val) => checkInput(val)}/>
                    {   data.checkItem ?  
                        <Animatable.View animation='bounceIn'>
                            <FontAwesome name='check' color='green' size={18}/>
                        </Animatable.View>
                    : null }
                </View>
                <Text style={styles.textfooter}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome name='lock' color='#0F0F0F' size={24}/>
                    <TextInput placeholder='Place your Password' secureTextEntry={data.secureTextEntry ? true : false} style={styles.textInput} onChangeText={(val) => checkPassword(val)}/>
                    <TouchableOpacity onPress={checkSecurity}>
                        {data.secureTextEntry ? 
                            <FontAwesome name='eye-slash' color='#0F0F0F' size={18}/>
                            : <FontAwesome name='eye' color='#0F0F0F' size={18}/>}
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <LinearGradient colors={['#08D4C4','#01AB9D']} style={styles.signIn}>
                        <Text style={styles.textSign}>Sign In</Text>
                    </LinearGradient>

                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn, {borderColor:'#08D4C4', borderWidth:1, marginTop:15}]}>
                        <Text style={[styles.textSign, {color:'#08D4C4'}]}>Sign Up</Text>
                    </TouchableOpacity> 
                </View>
            </Animatable.View>
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#009387'
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50,
    },
    footer:{
        flex:3,
        backgroundColor:'#F0F0F0',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        padding:20
    },
    textheader:{
        color:'#F0F0F0',
        fontWeight:'bold',
        fontSize:32,
    },
    textfooter:{
        color: '#05375A',
        fontSize:18,
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor: '#F2F2F2',
        paddingBottom:5,
        justifyContent:'center',
    },
    textInput:{
        flex:1,
        paddingLeft:10,
        marginTop:-10,
        color: '#05375A'
    },
    button:{
        alignItems:'center',
        marginTop:50,
    },
    signIn:{
        width:'100%',
        height:50,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:10,
    },
    textSign:{
        fontSize:18,
        fontWeight:'bold',
        color:'#F0F0F0',
    }
})
