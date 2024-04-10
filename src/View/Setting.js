import { Image, ImageBackground, Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Setting = () => {
    const navigation = useNavigation();
    const [themeChanged, setThemeChanged] = useState(false);

    const navigateToRegister = () => {
        navigation.navigate('Login'); 
    };

    const click = () => {
        navigation.navigate('User'); 
    };

    const n = () => {
        navigation.navigate('Mobile'); 
    };

    const changeTheme = () => {
        // Đổi theme ở đây
        setThemeChanged(!themeChanged);
        // Hiển thị thông báo
        Alert.alert('Thông báo', 'Đổi theme thành công');
    };

    return (
        <View style={[styles.container, themeChanged && styles.containerChanged]}>
            <ImageBackground source={require('../img/2.jpg')} style={styles.anhnen}>
                <View style={[styles.overlay, themeChanged && styles.overlayChanged]}>
                    {/* logo */}
                    <Image source={require('../img/set.jpg')} style={styles.anhlogo} />
                    {/* tiêu đề */}
                    <Text style={[styles.title, themeChanged && styles.titleChanged]}>     Setting</Text>
                    <Pressable style={styles.button} onPress={click}>
                        <Text style={styles.buttonText}>Thông tin cá nhân</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={n}>
                        <Text style={styles.buttonText}>Thông tin máy</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={changeTheme}>
                        <Text style={styles.buttonText}>Đổi Theme</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={navigateToRegister}>
                        <Text style={styles.buttonText}>Đăng xuất</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerChanged: {
        backgroundColor: 'black', 
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: "100%",
        height: "100%",
    },
    overlayChanged: {
        backgroundColor: 'black', 
    },
    anhnen: {
        width: "100%",
        height: "100%",
    },
    anhlogo: {
        width: 100,
        height: 100,
        marginTop: 100,
        marginLeft: 150,
        borderRadius: 50
    },
    title: {
        color: "#9181f2",
        fontWeight: "bold",
        fontSize: 30,
        width: "90%",
        textAlign: "center",
    },
    titleChanged: {
        color: "white", 
    },
    button: {
        width: "70%",
        height: 50,
        backgroundColor: "#9181f2",
        marginLeft: 70,
        marginTop: 50,
        borderRadius: 20
    },
    buttonText: {
        textAlign: "center",
        lineHeight: 50,
    },
});
