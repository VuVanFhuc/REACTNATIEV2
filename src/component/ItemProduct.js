import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import COLOR from '../../controller/color'
import FONT_SIZE from '../../controller/font_size'
const ItemProduct = ({ item }) => {
    return (
        <View style={{ width: '100%', height: 500, backgroundColor: COLOR.white, elevation: 10, shadowColor: COLOR.gray, marginBottom: 10, borderRadius: 20 }}>
            <Image
                style={{
                    width: '100%',
                    height: 330,
                    borderRadius: 20
                }}
                source={
                    {
                        uri: item.image
                    }
                }
            />
            <View style={{ width: '100%', height: 170, padding: 15, justifyContent: 'space-around' }}>
                <Text style={{ fontSize: FONT_SIZE.font_size_17, color: '#FF69B4', fontWeight: 700 }}>
                    {item.name}
                </Text>
                <View style={{
                    width: "100%",
                    height: 1,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderStyle: 'dashed',
                    borderColor: COLOR.gray,
                    backgroundColor: 'gray',
                    borderDashStyle: 'dashed',
                }} />
                <Text style={{ fontSize: FONT_SIZE.font_size_13, color: COLOR.gray }}>
                    {item.describe}
                </Text>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Image
                        style={{ width: 23, height: 23, marginRight: 10 }}
                        source={require('../img/next.png')} />
                    <Text>
                        Xem chi tiết
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemProduct