import { Alert, Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import loginApi from '../services/api/apiLogin';

const Login = () => {
    const navigation = useNavigation();
    const [mail, setmail] = useState('');
    const [pass, setpass] = useState('');
    const click = () => {
        if (mail==''||pass=='') {
            Alert.alert('vui lòng nhập đủ thông tin');
            return
        }
        loginApi({
            mail:mail,
            pass:pass
        })
        navigation.navigate('Trang chủ'); 
        Alert.alert('đăng nhập thành công ')
    };

    return (
        <View>
            <ImageBackground source={require('../img/2.jpg')} style={styles.anhnen}>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', width: "100%", height: "100%", }}>
                    {/* logo */}
                    <Image source={require('../img/1.png')} style={styles.anhlogo} />
                    {/* tiêu đề */}
                    <Text style={{ color: "#9181f2", fontWeight: "bold", fontSize: 30, width: "90%", textAlign: "center" }}>      Login</Text>
                    {/* nơi nhập mail  */}
                    <TextInput onChange={setmail} placeholder='mail' style={{ width: "70%", height: 50, backgroundColor: "#aaa", opacity: 0.75, borderRadius: 20, marginLeft: 70, marginTop: 20 }} />
                    {/* nơi nhập mật khẩu  */}
                    <TextInput onChange={setpass} placeholder='Nhập mật khẩu  ' style={{ width: "70%", height: 50, backgroundColor: "#aaa", opacity: 0.75, borderRadius: 20, marginLeft: 70, marginTop: 20 }} />
                    {/* button đăng nhập  */}
                    <Pressable style={styles.nut} onPress={click}>
                        <Text style={{ textAlign: "center", lineHeight: 50 }}>ĐĂNG NHẬP </Text>
                    </Pressable>
                    

                </View>
            </ImageBackground>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    anhnen: {
        width: "100%",
        height: "100%",
    },
    anhlogo: {
        width: 100,
        height: 100,
        marginTop: 150,
        marginLeft: 150
    },
    nut: {
        width: "70%",
        height: 50,
        backgroundColor: "#9181f2",
        marginLeft: 70,
        marginTop: 50,
        borderRadius: 20
    }
});





