import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SliderBox } from "react-native-image-slider-box";

const Slider = () => {
    const [image, setImage] = useState([
        'https://aocuoimailisa.vn/wp-content/uploads/2023/11/anh-bia-web-2.webp',
        'https://aocuoimailisa.vn/wp-content/uploads/2024/02/vi-sao-hang-trieu-co-dau-chu-re-lua-chon-chup-anh-cuoi-nha-trang.jpg',
        'https://aocuoimailisa.vn/wp-content/uploads/2023/07/chup-hinh-cuoi-ho-coc.jpg',
        'https://aocuoimailisa.vn/wp-content/uploads/2023/07/chup-hinh-cuoi-ho-coc-co-gi-dac-biet.jpg'
    ])
    return (
        <View style={{ width: '100%', height: 200 }}>
            <SliderBox
                images={image}
                sliderBoxHeight={200}
                autoplay
                dotColor="#FF69B4"
                inactiveDotColor="#90A4AE"
                circleLoop
            />
        </View>
    )
}

export default Slider