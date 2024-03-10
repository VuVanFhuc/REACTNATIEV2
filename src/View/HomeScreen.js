import { View, Text, SafeAreaView, Image, ScrollView, Button, FlatList, ImageBackground, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FONT_SIZE from '../../controller/font_size'
import ItemProduct from '../component/ItemProduct'
import Slider from '../component/Slider'
import ItemAlbum from '../component/ItemAlbum'
import ItemWeddingDress from '../component/ItemWeddingDress'
import ItemNews from '../component/ItemNews'
import ItemVideo from '../component/ItemVideo'
import RegisterService from '../component/RegisterService'
import COLOR from '../../controller/color'
import RenderFlatList from '../component/RenderFlatList'

const HomeScreen = () => {
    const [data, setData] = useState([
        {
            id: "1",
            name: "Chụp ảnh cưới Nha Trang trọn gói siêu đẹp chỉ 15tr900k",
            image: "https://aocuoimailisa.vn/wp-content/uploads/2023/11/anh-bia-web-2.webp",
            describe: "Chụp hình cưới Nha Trang trọn gói chỉ 15tr900k. Dâu chú rể chọn 5 váy, 5 vest cao cấp, tùy chọn các trang..."
        },
        {
            id: "2",
            name: "Chụp ảnh cưới Nha Trang trọn gói siêu đẹp chỉ 15tr900k",
            image: "https://aocuoimailisa.vn/wp-content/uploads/2023/11/anh-bia-web-2.webp",
            describe: "Chụp hình cưới Nha Trang trọn gói chỉ 15tr900k. Dâu chú rể chọn 5 váy, 5 vest cao cấp, tùy chọn các trang..."
        },
        {
            id: "3",
            name: "Chụp ảnh cưới Nha Trang trọn gói siêu đẹp chỉ 15tr900k",
            image: "https://aocuoimailisa.vn/wp-content/uploads/2023/11/anh-bia-web-2.webp",
            describe: "Chụp hình cưới Nha Trang trọn gói chỉ 15tr900k. Dâu chú rể chọn 5 váy, 5 vest cao cấp, tùy chọn các trang..."
        },
        {
            id: "4",
            name: "Chụp ảnh cưới Nha Trang trọn gói siêu đẹp chỉ 15tr900k",
            image: "https://aocuoimailisa.vn/wp-content/uploads/2023/11/anh-bia-web-2.webp",
            describe: "Chụp hình cưới Nha Trang trọn gói chỉ 15tr900k. Dâu chú rể chọn 5 váy, 5 vest cao cấp, tùy chọn các trang..."
        },
    ])
    // const RenderFlatList = (data, renderItemComponent, isHorizontal) => (
    //     <FlatList
    //         horizontal={isHorizontal}
    //         style={{ flex: 1, marginTop: 10 }}
    //         data={data}
    //         keyExtractor={(item) => item.id.toString()}
    //         renderItem={({ item }) => renderItemComponent(item)}
    //     />
    // );
    const CustomsButton = ({ children, onPress, styleContainer, styleChildren }) => (
        <TouchableOpacity
            onPress={onPress}
            style={styleContainer}>
            <Text style={styleChildren}>
                {children}
            </Text>
        </TouchableOpacity>
    )
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.centerScreen}>
                    <Slider />
                </View>
                <View style={{ padding: 10, width: '100%' }}>
                    <Text style={styles.title}>
                        Câu chuyện Studio
                    </Text>
                    <Text style={{ color: COLOR.mainStream, fontSize: 20, fontWeight: 600, marginTop: 5 }}>
                        ĐÔI NÉT VỀ ẢNH VIỆN ÁO CƯỚI BEE STUDIO
                    </Text>
                    <Text style={styles.content}>
                        Chặng đường 15 năm xây dựng và phát triển thương hiệu BeeStudio uy tín, chuyên nghiệp, chất lượng, gần gũi trong lòng khách hàng là minh chứng rõ ràng nhất cho tâm huyết và thành quả của người sáng lập cùng toàn thể cán bộ nhân viên công ty.
                    </Text>
                    <Text style={styles.content}>
                        Nổi bật với các bộ sưu tập váy cưới độc quyền và phong cách chụp ảnh tự nhiên – chân thật, Chúng tôi tự hào là nơi lưu giữ khoảnh khắc thăng hoa của hạnh phúc lứa đôi cho các diễn viên ca sỹ nổi tiếng và hơn 4000 cặp đôi uyên ương khác. Ngay cả những khách hàng khó tính nhất cũng đều hài lòng khi tới Mailisa.
                    </Text>
                    <Text style={styles.content}>
                        Bằng nền tảng kinh nghiệm và nội lực vững chắc, Chúng tôi đã sẵn sàng cho chặng đường phát triển mới, hướng đến vị thế là nhà cung cấp dịch vụ cưới hàng đầu thành phố Hà nội và khu vực miền Bắc.
                    </Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <CustomsButton children={"Xem thêm"} onPress={() => console.log(1234)} styleContainer={styles.customsButton} styleChildren={{ color: COLOR.white }} />
                </View>
                {/**Danh sách nổi bật*/}
                <View style={styles.viewItems}>
                    <Text style={styles.title}>
                        Danh sách nổi bật
                    </Text>
                    <RenderFlatList
                        data={data}
                        isHorizontal={false}
                        renderItemComponent={(item) => <ItemProduct item={item} />}
                    />
                </View>
                {/*Album chi tiết*/}
                <View style={styles.viewItems}>
                    <Text style={styles.title}>
                        Album ảnh cưới
                    </Text>
                    <RenderFlatList
                        data={data}
                        isHorizontal={false}
                        renderItemComponent={(item) => <ItemAlbum item={item} />}
                    />
                </View>
                {/**Bộ sưu tập áo cưới mới*/}
                <View style={styles.viewItems}>
                    <Text style={styles.title}>
                        Mẫu áo cưới mới nhất
                    </Text>
                    <FlatList
                        horizontal={false}
                        style={{ flex: 1, marginTop: 10 }}
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <ItemWeddingDress item={item} />}
                        numColumns={2}
                        columnWrapperStyle={{
                            flex: 1,
                            justifyContent: 'space-around',
                        }}
                    />
                </View>
                {/**Bộ sưu tập áo cưới mới*/}
                <View style={styles.viewItems}>
                    <Text style={styles.title}>
                        Tin tức
                    </Text>
                    <RenderFlatList
                        data={data}
                        isHorizontal={true}
                        renderItemComponent={(item) => <ItemNews item={item} />}
                    />
                </View>
                {/**Video nổi bật*/}
                <View style={styles.viewItems}>
                    <Text style={styles.title}>
                        Video nổi bật
                    </Text>
                    <RenderFlatList
                        data={data}
                        isHorizontal={false}
                        renderItemComponent={(item) => <ItemVideo item={item} />}
                    />
                </View>
                {/**Register*/}
                <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <RegisterService />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    centerScreen: {
        justifyContent: 'center', alignItems: 'center'
    },
    container: {
        width: '100%',
        height: '100%'
    },
    content: {
        fontSize: 15, lineHeight: 30, fontWeight: '500', marginTop: 10, color: COLOR.black, flexWrap: 'wrap'
    },
    title: {
        fontSize: FONT_SIZE.font_size_25, fontWeight: 'bold', color: COLOR.mainStream
    },
    viewItems: { padding: 10, width: '100%' },
    customsButton: {
        width: 100, height: 40, borderRadius: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: COLOR.mainStream
    }
})

export default HomeScreen