import React, { useEffect, useRef } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Resigter');
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View>
            <ImageBackground source={require('../img/2.jpg')} style={styles.anhnen}>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', width: "100%", height: "100%", }}>
                    <Image source={require('../img/1.png')} style={styles.anhlogo} />
                    <Text style={{ color: "#9181f2",fontWeight:"bold",fontSize:30,width:"90%",textAlign:"center"}}>   WELCOME</Text>
                    <Text style={{ color: "pink",fontStyle:"italic",fontSize:17,width:"90%",marginLeft:20,marginTop:50}}>
                        " Chào mừng đến với ứng dụng của chúng tôi! Khám phá những sản phẩm điện thoại hàng đầu, đánh giá từ cộng đồng, và chuyên gia. Tìm hiểu về tính năng và phong cách của từng sản phẩm. Tải ngay để bắt đầu hành trình khám phá! "</Text>
                        <Text style={{ color: "#fff",fontWeight:"bold",color:"#9181f2",width:"90%",marginLeft:20,marginTop:200,marginLeft:250,fontSize:10}}>HỌ TÊN : VŨ VĂN PHÚC </Text>
                        <Text style={{ color: "#fff",fontWeight:"bold",color:"#9181f2",width:"90%",marginLeft:250,fontSize:10}}>MÃ SINH VIÊN : PH34858</Text>
                        <Text style={{ color: "#fff",fontWeight:"bold",color:"#9181f2",width:"90%",marginLeft:250,fontSize:10}}>GIẢNG VIÊN  : ĐẶNG THÁI SƠN </Text>
                        <Text style={{ color: "#fff",fontWeight:"bold",color:"#9181f2",width:"90%",marginLeft:250,fontSize:10}}>LỚP  : MD18306 </Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Welcome;

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
    }
});
