import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Setting = () => {
    const navigation = useNavigation();

    const navigateToRegister = () => {
        navigation.navigate('Login'); 
    };
    const click = () => {
      navigation.navigate('User'); 
  };
    return (
        <View>
            <ImageBackground source={require('../img/2.jpg')} style={styles.anhnen}>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', width: "100%", height: "100%", }}>
                    {/* logo */}
                    <Image source={require('../img/set.jpg')} style={styles.anhlogo} />
                    {/* tiêu đề */}
                    <Text style={{ color: "#9181f2", fontWeight: "bold", fontSize: 30, width: "90%", textAlign: "center" }}>    Setting</Text>
                    <Pressable style={styles.nut} onPress={click}>
                        <Text style={{ textAlign: "center", lineHeight: 50 }}>Thông tin cá nhân   </Text>
                    </Pressable>
                    <Pressable style={styles.nut1} onPress={navigateToRegister}>
                        <Text style={{ textAlign: "center", lineHeight: 50 }}>Thông tin máy   </Text>
                    </Pressable>
                    <Pressable style={styles.nut1} onPress={navigateToRegister}>
                        <Text style={{ textAlign: "center", lineHeight: 50 }}>Đổi Theme  </Text>
                    </Pressable>
                    <Pressable style={styles.nut1} onPress={navigateToRegister}>
                        <Text style={{ textAlign: "center", lineHeight: 50 }}>Đăng xuất  </Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Setting;

const styles = StyleSheet.create({
    anhnen: {
        width: "100%",
        height: "100%",
    },
    anhlogo: {
        width: 100,
        height: 100,
        marginTop: 150,
        marginLeft: 150,
        borderRadius:50
    },
    nut: {
        width: "70%",
        height: 50,
        backgroundColor: "#9181f2",
        marginLeft: 70,
        marginTop: 50,
        borderRadius: 20
    },
    nut1: {
      width: "70%",
      height: 50,
      backgroundColor: "#9181f2",
      marginLeft: 70,
      marginTop: 10,
      borderRadius: 20
  }
});
