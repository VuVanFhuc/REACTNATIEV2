import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const User = () => {
    return (
        <View>
            <ImageBackground source={require('../img/2.jpg')} style={styles.anhnen}>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', width: "100%", height: "100%", }}>
                    {/* logo */}
                    <Image source={require('../img/nguoi.webp')} style={styles.anhlogo} />
                    {/* tiêu đề */}
                    <Text style={{ color: "#9181f2", fontWeight: "bold", fontSize: 30, width: "90%", textAlign: "center" }}>     Profile </Text>
                    <Text style={{color:"#fff",textAlign:"center",marginTop:30,fontSize:20,margin:10}}>Ho và tên : Vũ Văn Phúc</Text>
                    <Text style={{color:"#fff",textAlign:"center",fontSize:20,margin:10}}>Mã sinh viên  : Ph34858</Text>
                    <Text style={{color:"#fff",textAlign:"center",fontSize:20,margin:10}}>Lớp                : MD18063</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default User;

const styles = StyleSheet.create({
    anhnen: {
        width: "100%",
        height: "100%",
    },
    anhlogo: {
        width: 150,
        height: 150,
        marginTop: 150,
        marginLeft: 120,
        borderRadius:70
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
