import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'


const Favourite = () => {
  return (
    <ScrollView>
      {/* sản phẩn 1 */}
      <View style={{flexDirection:"row",marginTop:10}}>
        <Image source={require('../img/iphone.jpg')} style={styles.sanpham}/>
        <View style={{marginLeft:10,width:"70%"}}>
          <Text>sản phẩm :ipone 15 promax</Text>
          <Text>sản phẩm :ipone 15 promax</Text>
          <Text>sản phẩm :ipone 15 promax</Text>
          <View style={{flexDirection:"row"}}>
          <TextInput placeholder='Bình luận ...' style={{width:"90%",backgroundColor:"#dad0e2",borderRadius:20}}/>
          <Image source={require('../img/r.png')} style={{width:30,height:30,margin:9}}/>
          </View>
        </View>
      </View>
      <View style={{width:"100%",height:1,backgroundColor:"red",marginTop:20}}></View>
            {/* sản phẩn 1 */}
            <View style={{flexDirection:"row",marginTop:10}}>
        <Image source={require('../img/samsung.jpg')} style={styles.sanpham}/>
        <View style={{marginLeft:10,width:"70%"}}>
          <Text>sản phẩm :ipone 15 promax</Text>
          <Text>sản phẩm :ipone 15 promax</Text>
          <Text>sản phẩm :ipone 15 promax</Text>
          <View style={{flexDirection:"row"}}>
          <TextInput placeholder='Bình luận ...' style={{width:"90%",backgroundColor:"#dad0e2",borderRadius:20}}/>
          <Image source={require('../img/r.png')} style={{width:30,height:30,margin:9}}/>
          </View>
        </View>
      </View>
      <View style={{width:"100%",height:1,backgroundColor:"red",marginTop:20}}></View>
      {/* san pham 2 */}
            {/* sản phẩn 1 */}
            <View style={{flexDirection:"row",marginTop:10}}>
        <Image source={require('../img/ipad.jpg')} style={styles.sanpham}/>
        <View style={{marginLeft:10,width:"70%"}}>
          <Text>sản phẩm :ipone 15 promax</Text>
          <Text>sản phẩm :ipone 15 promax</Text>
          <Text>sản phẩm :ipone 15 promax</Text>
          <View style={{flexDirection:"row"}}>
          <TextInput placeholder='Bình luận ...' style={{width:"90%",backgroundColor:"#dad0e2",borderRadius:20}}/>
          <Image source={require('../img/r.png')} style={{width:30,height:30,margin:9}}/>
          </View>
        </View>
      </View>
      <View style={{width:"100%",height:1,backgroundColor:"red",marginTop:20}}></View>
      {/* san pham 2 */}
      {/* san pham 2 */}
      <View style={{flexDirection:"row",marginTop:10}}>
        <Image source={require('../img/iphone.jpg')} style={styles.sanpham}/>
        <View style={{marginLeft:10,width:"70%"}}>
          <Text>sản phẩm :ipone 15 promax</Text>
          <Text>sản phẩm :ipone 15 promax</Text>
          <Text>sản phẩm :ipone 15 promax</Text>
          <View style={{flexDirection:"row"}}>
          <TextInput placeholder='Bình luận ...' style={{width:"90%",backgroundColor:"#dad0e2",borderRadius:20}}/>
          <Image source={require('../img/r.png')} style={{width:30,height:30,margin:9}}/>
          </View>
        </View>
      </View>
      <View style={{width:"100%",height:1,backgroundColor:"red",marginTop:20}}></View>
      <View style={{flexDirection:"row",marginTop:10}}>
        <Image source={require('../img/iphone.jpg')} style={styles.sanpham}/>
        <View style={{marginLeft:10,width:"70%"}}>
          <Text>sản phẩm :ipone 15 promax</Text>
          <Text>sản phẩm :ipone 15 promax</Text>
          <Text>sản phẩm :ipone 15 promax</Text>
          <View style={{flexDirection:"row"}}>
          <TextInput placeholder='Bình luận ...' style={{width:"90%",backgroundColor:"#dad0e2",borderRadius:20}}/>
          <Image source={require('../img/r.png')} style={{width:30,height:30,margin:9}}/>
          </View>
        </View>
      </View>
      <View style={{width:"100%",height:1,backgroundColor:"red",marginTop:20}}></View>
      <View style={{flexDirection:"row",marginTop:10}}>
        <Image source={require('../img/iphone.jpg')} style={styles.sanpham}/>
        <View style={{marginLeft:10,width:"70%"}}>
          <Text>sản phẩm :ipone 15 promax</Text>
          <Text>sản phẩm :ipone 15 promax</Text>
          <Text>sản phẩm :ipone 15 promax</Text>
          <View style={{flexDirection:"row"}}>
          <TextInput placeholder='Bình luận ...' style={{width:"90%",backgroundColor:"#dad0e2",borderRadius:20}}/>
          <Image source={require('../img/r.png')} style={{width:30,height:30,margin:9}}/>
          </View>
        </View>
      </View>
      <View style={{width:"100%",height:1,backgroundColor:"red",marginTop:20}}></View>
      <View style={{flexDirection:"row",marginTop:10}}>
        <Image source={require('../img/iphone.jpg')} style={styles.sanpham}/>
        <View style={{marginLeft:10,width:"70%"}}>
          <Text>sản phẩm :ipone 15 promax</Text>
          <Text>sản phẩm :ipone 15 promax</Text>
          <Text>sản phẩm :ipone 15 promax</Text>
          <View style={{flexDirection:"row"}}>
          <TextInput placeholder='Bình luận ...' style={{width:"90%",backgroundColor:"#dad0e2",borderRadius:20}}/>
          <Image source={require('../img/r.png')} style={{width:30,height:30,margin:9}}/>
          </View>
        </View>
      </View>
      <View style={{width:"100%",height:1,backgroundColor:"red",marginTop:20}}></View>
    </ScrollView>
  )
}

export default Favourite

const styles = StyleSheet.create({
  sanpham:{
    width:80,
    height:100
  }
})