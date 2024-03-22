import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const navigateToRegister = () => {
        navigation.navigate('Resigter'); 
    };
    const click = () => {
        navigation.navigate('Trang chủ'); 
    };

    return (
        <View>
            <ImageBackground source={require('../img/2.jpg')} style={styles.anhnen}>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', width: "100%", height: "100%", }}>
                    {/* logo */}
                    <Image source={require('../img/1.png')} style={styles.anhlogo} />
                    {/* tiêu đề */}
                    <Text style={{ color: "#9181f2", fontWeight: "bold", fontSize: 30, width: "90%", textAlign: "center" }}>    Login</Text>
                    {/* nơi nhập họ và tên  */}
                    <TextInput placeholder='Nhập họ và tên ' style={{ width: "70%", height: 50, backgroundColor: "#aaa", opacity: 0.75, borderRadius: 20, marginLeft: 70, marginTop: 20 }} />
                    {/* nơi nhập mật khẩu  */}
                    <TextInput placeholder='Nhập mật khẩu  ' style={{ width: "70%", height: 50, backgroundColor: "#aaa", opacity: 0.75, borderRadius: 20, marginLeft: 70, marginTop: 20 }} />
                    {/* button đăng nhập  */}
                    <Pressable style={styles.nut} onPress={click}>
                        <Text style={{ textAlign: "center", lineHeight: 50 }}>ĐĂNG NHẬP </Text>
                    </Pressable>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "#9181f2", marginTop: 20, marginLeft: 70 }}>Bạn đã có tài khoản chưa ?</Text>
                        {/* click vào chữ sẽ chuyển qua màn hình đăng ký  */}
                        <Pressable onPress={navigateToRegister}>
                            <Text style={{ color: "pink", marginTop: 20, marginLeft: 50, fontWeight: "bold" }}>ĐĂNG KÝ </Text>
                        </Pressable>
                    </View>

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
