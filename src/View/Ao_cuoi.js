import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

const images = [
  'https://tuart.net/wp-content/uploads/2020/08/Banner-web-super-combo-4-scaled.jpg',
  'https://tuart.net/wp-content/uploads/2020/03/banner-web-tuart-3.jpg',
  'https://tuart.net/wp-content/uploads/2020/08/Banner-web-super-combo-4-scaled.jpg',
  'https://linhnga.vn/wp-content/uploads/2023/02/Untitled-design-1400x700.png',
];

const data = ['All', 'Cappuccino', 'Espresso', 'Americano', 'Robusta Beans', 'Liberica Coffee Beans'];

const ANH = {
  'coffe1.png': require('../img/sp.jpg'),
  'ccoffe.png': require('../img/sp.jpg'),
  'sanpham.jpg': require('../img/sp.jpg'),
};

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Ao_cuoi = (props) => {
  const { navigation } = props;
    const Click = () => {
        navigation.navigate('Chitiet_aocuoi');
    }
  const [imgAtic, setImgAtic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgAtic((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Run every 3 seconds
    return () => clearInterval(interval);
  }, []);

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
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
          // Automatically scroll to the current image
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
      <View>
        <Text style={{color:"#f7b2b7",margin:10,fontWeight:"bold",fontSize:20}}>Bộ sưu tập mới nhất  </Text>
        <ScrollView style={styles.container}>
          {/* <FlatList
            horizontal
            data={data}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={{ color: "black" }}>{item}</Text>
              </View>
            )}
            keyExtractor={(item) => item}
          /> */}
         <FlatList
            horizontal
            data={Object.keys(ANH)}
            renderItem={({ item }) => (
              <Pressable onPress={Click}>
                <View style={styles.itema}>
                <Image source={ANH[item]} style={{ width: 150, height: 200, borderRadius: 20 }} />
                <Text style={{ color: "black" }}>Mã số:A1234</Text>
                <Text style={{ color: "black" }}>Váy cưới mới </Text>
                <Text style={{ color: "black" }}>giá mua :14000000 VND</Text>
                <Text style={{ color: "black" }}>giá thuê :7000000 VND</Text>
              </View>
              </Pressable>
              
            )}
            keyExtractor={(item) => item}
          />
            <FlatList
            horizontal
            data={Object.keys(ANH)}
            renderItem={({ item }) => (
              <Pressable onPress={Click}>
                <View style={styles.itema}>
                <Image source={ANH[item]} style={{ width: 150, height: 200, borderRadius: 20 }} />
                <Text style={{ color: "black" }}>Mã số:A1234</Text>
                <Text style={{ color: "black" }}>Váy cưới mới </Text>
                <Text style={{ color: "black" }}>giá mua :14000000 VND</Text>
                <Text style={{ color: "black" }}>giá thuê :7000000 VND</Text>
              </View>
              </Pressable>
              
            )}
            keyExtractor={(item) => item}
          />
           <FlatList
            horizontal
            data={Object.keys(ANH)}
            renderItem={({ item }) => (
              <Pressable onPress={Click}>
                <View style={styles.itema}>
                <Image source={ANH[item]} style={{ width: 150, height: 200, borderRadius: 20 }} />
                <Text style={{ color: "black" }}>Mã số:A1234</Text>
                <Text style={{ color: "black" }}>Váy cưới mới </Text>
                <Text style={{ color: "black" }}>giá mua :14000000 VND</Text>
                <Text style={{ color: "black" }}>giá thuê :7000000 VND</Text>
              </View>
              </Pressable>
              
            )}
            keyExtractor={(item) => item}
          />
          
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Ao_cuoi

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
    backgroundColor:"#fff"
  },
})
