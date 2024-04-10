import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

const images = [
  'https://khangthanh.com/upload/images/hop%20giay%20dung%20dien%20thoai%20(2).jpg',

  'https://congthuong.vn/stores/news_dataimages/2022/092022/16/16/iphone-14-pro-max-120220916161017.jpg?rt=20220916161017',
  
  'https://cdn.cellphones.com.vn/media/wysiwyg/mobile/apple/mua-dien-thoai-iphone-chinh-hang-gia-re-tai-cellphones.jpg',
];

const ANH = {
  'coffe1.png': require('../img/iphone.jpg'),
  'ccoffe.png': require('../img/samsung.jpg'),
  'sanpham.jpg': require('../img/ipad.jpg'),
};

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Home = (props) => {
  const { navigation } = props;

  const Click = () => {
    navigation.navigate('Chi tiết');
  }

  const [imgAtic, setImgAtic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgAtic((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Chuyển ảnh sau mỗi 5 giây

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImgAtic((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Chuyển ảnh sau mỗi 5 giây

    return () => clearTimeout(timeout);
  }, [imgAtic]);

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
      if (slide !== imgAtic) {
        setImgAtic(slide);
      }
    }
  };

  return (
    <SafeAreaView style={styles.containerr}>
      <View>

        <ScrollView style={styles.container}>
        <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
          contentOffset={{ x: imgAtic * WIDTH, y: 0 }}
        >
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode='stretch'
              style={{ width: WIDTH, height: HEIGHT * 0.25 }}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text key={e} style={imgAtic === index ? styles.dotActive : styles.dot}>
              ⬤
            </Text>
          ))}
        </View>
      </View>
          <Text style={{ color: "#f7b2b7", margin: 10, fontWeight: "bold", fontSize: 20 }}>Sản phẩm mới nhất  </Text>
          <FlatList
            horizontal
            data={Object.keys(ANH)}
            renderItem={({ item, index }) => (
              <Pressable onPress={Click}>
                <View style={styles.itema}>
                  <Image source={ANH[item]} style={{ width: 150, height: 200, borderRadius: 20 }} />
                  {/* Thay đổi nội dung tương ứng với từng ảnh */}
                  <Text style={{ color: "black" }}>Mã số:A1234</Text>
                  <Text style={{ color: "black" }}>{index === 0 ? "Iphone 15 promax" : index === 1 ? "Samsung S23 Ultra" : "iPad"}</Text>
                  <Text style={{ color: "black" }}>giá mua :14000000 VND</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item}
          />
          <Text style={{ color: "#f7b2b7", margin: 10, fontWeight: "bold", fontSize: 20 }}>Sản phẩm hot trend  </Text>
          {/*  */}
          <FlatList
            horizontal
            data={Object.keys(ANH)}
            renderItem={({ item, index }) => (
              <Pressable onPress={Click}>
                <View style={styles.itema}>
                  <Image source={ANH[item]} style={{ width: 150, height: 200, borderRadius: 20 }} />
                  {/* Thay đổi nội dung tương ứng với từng ảnh */}
                  <Text style={{ color: "black" }}>Mã số:A1234</Text>
                  <Text style={{ color: "black" }}>{index === 0 ? "Iphone 15 promax" : index === 1 ? "Samsung S23 Ultra" : "iPad"}</Text>
                  <Text style={{ color: "black" }}>giá mua :14000000 VND</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item}
          />

          {/*  */}
          <Text style={{ color: "#f7b2b7", margin: 10, fontWeight: "bold", fontSize: 20 }}>Sản phẩm đã xem  </Text>
          <FlatList
            horizontal
            data={Object.keys(ANH)}
            renderItem={({ item, index }) => (
              <Pressable onPress={Click} style={{ marginBottom: 500 }}>
                <View style={styles.itema}>
                  <Image source={ANH[item]} style={{ width: 150, height: 200, borderRadius: 20 }} />
                  {/* Thay đổi nội dung tương ứng với từng ảnh */}
                  <Text style={{ color: "black" }}>Mã số:A1234</Text>
                  <Text style={{ color: "black" }}>{index === 0 ? "Iphone 15 promax" : index === 1 ? "Samsung S23 Ultra" : "iPad"}</Text>
                  <Text style={{ color: "black" }}>giá mua :14000000 VND</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item}
          />
          {/*  */}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  containerr: {
    flex: 1
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center"
  },
  dotActive: {
    margin: 3,
    color: "black"
  },
  dot: {
    margin: 3,
    color: "#fff"
  },
  container: {
    height: "100%"
  },
  theLoGo: {
    width: 50,
    height: 50,
    borderRadius: 30
  },
  thetimkiem: {
    borderWidth: 1,
    height: 50,
    width: 350,
    borderRadius: 30,
    paddingLeft: 40,
    backgroundColor: "#d17842",
    marginLeft: 30,
    marginRight: 30,
  },
  thechu: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#fff'
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itema: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#fff",
    backgroundColor: "#fff"
  },
})
