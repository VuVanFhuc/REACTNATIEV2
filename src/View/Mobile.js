import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Mobile = () => {
    return (
        <View>
            <ImageBackground source={require('../img/2.jpg')} style={styles.anhnen}>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', width: "100%", height: "100%", }}>
                    {/* logo */}
                    <Image source={require('../img/ll.png')} style={styles.anhlogo} />
                    {/* tiêu đề */}
                    <Text style={{ color: "#9181f2", fontWeight: "bold", fontSize: 30, width: "90%", textAlign: "center" }}>    Thông tin máy</Text>
                    <Text style={{color:"#fff",textAlign:"center",marginTop:30,fontSize:20}}>Tên           : IPHONE15PROMAX</Text>
                    <Text style={{color:"#fff",textAlign:"center",marginTop:20,fontSize:20}}>Phiên bản phần mềm   : 30.8.2</Text>
                    <Text style={{color:"#fff",textAlign:"center",marginTop:20,fontSize:20}}>Số máy                 : MKUJ2LL/A</Text>
                    <Text style={{color:"#fff",textAlign:"center",marginTop:20,fontSize:20}}>Số sê-ri      : MKUWHGDACJSC</Text>
                    <Text style={{color:"#fff",textAlign:"center",marginTop:20,fontSize:20}}>Gói bảo hành     : ĐÃ HẾT HẠN</Text>
                    <Text style={{color:"#fff",textAlign:"center",marginTop:20,fontSize:20}}>Mạng                  : VIETTEL 50.0</Text>
                    <Text style={{color:"#fff",textAlign:"center",marginTop:20,fontSize:20}}>Địa chỉ wifi: 70:81:EB:1A:7E:82</Text>
                    <Text style={{color:"#fff",textAlign:"center",marginTop:20,fontSize:20}}>Bluetooth : 70:81:EB:1A:7E:82</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Mobile;

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
