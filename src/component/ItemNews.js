import { View, Text, Dimensions, Image, ImageBackground } from 'react-native'
import React from 'react'
import FONT_SIZE from '../../controller/font_size';
import COLOR from '../../controller/color';


const ItemNews = ({ item }) => {
    const width = Dimensions.get("window").width;
    return (
        <View style={{ width: 289, height: 271, marginRight: 15}}>
            <ImageBackground
                resizeMode='cover'
                style={{ width: '100%', height: 176, borderRadius: 16, overflow: 'hidden' }}
                source={{
                    uri: item.image
                }}>

            </ImageBackground>
            <View style={{ flex: 1, justifyContent: 'space-around',padding : 4}}>
                <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 'bold', color: COLOR.black }}>
                    Chụp ảnh phóng sự cưới là gì? [Giá chụp bao nhiêu 2024]
                </Text>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Image
                            style={{ width: 20, height: 20, borderRadius: 4,marginRight : 5}}
                            source={{
                                uri: 'https://kinhbacweb.com/wp-content/uploads/2021/06/bo-anh-dung-lam-avatar-hinh-nen-cover-chat-viet-nam-11515-22.jpg'
                            }}
                        />
                        <Text style = {{fontWeight : 500}}>By: BeeStudio</Text>
                    </View>
                    <View style={{ flexDirection: 'row',alignItems : 'center'}}>
                        <Text>
                            Jan 3, 2023
                        </Text>
                        <Text style = {{marginRight : 2,marginLeft : 2}}>|</Text>
                        <Text>
                            3344 views
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ItemNews