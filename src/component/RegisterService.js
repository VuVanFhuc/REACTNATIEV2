import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import COLOR from '../../controller/color'
import FONT_SIZE from '../../controller/font_size'

const RegisterService = () => {
    return (
        <View style={{ width: '95%', height: 330, justifyContent: 'space-around', alignItems: 'center'}}>
            <Text style = {{fontSize : FONT_SIZE.font_size_17,color : COLOR.black,fontWeight : 'bold'}}>ĐĂNG KÝ LIỀN TAY - NHẬN NGAY ƯU ĐÃI</Text>
            <View style={{ width: '95%' }}>
                <Text>
                    Họ và tên
                </Text>
                <TextInput style={{ width: '100%', height: 40, borderBottomWidth: 1 }} />
            </View>
            <View style={{ width: '95%' }}>
                <Text>
                    Số điện thoại
                </Text>
                <TextInput style={{ width: '100%', height: 40, borderBottomWidth: 1 }} />
            </View>
            <View style={{ width: '95%' }}>
                <Text>
                    Nội dung đăng ký
                </Text>
                <TextInput
                    multiline
                    numberOfLines={4}
                    placeholder="Nội dung ..."
                    style={{ width: '100%', height: 100, backgroundColor: '#E8ECF4',marginTop : 5}} />
            </View>
            <View style={{ width: '95%' }}>
                <Button title='Đăng ký' color={COLOR.mainStream} />
            </View>
        </View>

    )
}

export default RegisterService