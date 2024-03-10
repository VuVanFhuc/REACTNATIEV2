import { View, Text, Image } from 'react-native';
import React from 'react';
import FONT_SIZE from '../../controller/font_size';
import COLOR from '../../controller/color';

const ItemWeddingDress = ({ item }) => {
    return (
        <View style={{ width: '48%', height: 280, elevation: 7, borderRadius: 20, overflow: 'hidden', marginBottom: 10, backgroundColor: '#fff' }}>
            <Image
                resizeMode='cover'
                source={{
                    uri: "https://aocuoimailisa.vn/wp-content/uploads/2023/06/AT093-2-1536x1024.jpg"
                }}
                style={{ width: '100%', height: '70%', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
            />
            <View style={{ width: '100%', height: '30%', padding: 10, justifyContent: 'space-evenly' }}>
                <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 'bold', color: COLOR.black }}>
                    Mã số: A1234
                </Text>
                <Text style={{ fontSize: FONT_SIZE.font_size_12, fontWeight: '500', color: COLOR.gray }}>
                    Váy cưới mới A1234
                </Text>
                <Text style={{ fontSize: FONT_SIZE.font_size_13, fontWeight: 'bold', color: COLOR.black }}>
                    Giá bán: <Text style={{ color: COLOR.mainStream }}>14.000.000 VND</Text>
                </Text>
                <Text style={{ fontSize: FONT_SIZE.font_size_13, fontWeight: 'bold', color: COLOR.black }}>
                    Giá thuê: <Text style={{ color: COLOR.mainStream }}>7.000.000 VND</Text>
                </Text>
            </View>
        </View>
    );
};

export default ItemWeddingDress;
