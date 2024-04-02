
// import React from 'react';
// import { Button, View, StyleSheet } from 'react-native';
// import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

// export default function Bai_1() {
//   const offset = useSharedValue(0);

//   const startAnimation = () => {
//     const random = Math.random() * 400; // Thay 200 bằng khoảng giới hạn bạn muốn
//     offset.value = withSpring(random, { damping: 10, stiffness: 100 });
//   };

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateY: offset.value }],
//     };
//   });

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Animated.View
//         style={[
//           styles.box,
//           {
//             backgroundColor: 'green',
//           },
//           animatedStyle,
//         ]}
//       />
//       <Button onPress={startAnimation} title="Move" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   box: {
//     width: 50,
//     height: 50,
//   },
// });


// bai 2


// import React, { useRef, useState } from 'react';
// import { FlatList, View, Text, StyleSheet, Animated } from 'react-native';

// const generateRandomData = () => {
//   const data = [];
//   for (let i = 0; i < 20; i++) {
//     data.push({ key: i.toString(), title: `` });
//   }
//   return data;
// };

// const Item = React.memo(({ title, isVisible }) => {
//   const opacity = useRef(new Animated.Value(0)).current;
//   const scale = useRef(new Animated.Value(0.8)).current;

//   React.useEffect(() => {
//     Animated.parallel([
//       Animated.timing(opacity, {
//         toValue: isVisible ? 1 : 0,
//         duration: 500,
//         useNativeDriver: true,
//       }),
//       Animated.timing(scale, {
//         toValue: isVisible ? 1 : 0.8,
//         duration: 500,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, [isVisible]);

//   return (
//     <Animated.View
//       style={[
//         styles.item,
//         {
//           opacity: opacity,
//           transform: [{ scale: scale }],
//         },
//       ]}
//     >
//       <Text style={styles.title}>{title}</Text>
//     </Animated.View>
//   );
// });

// export default function App() {
//   const [viewableItems, setViewableItems] = useState([]);
//   const data = generateRandomData();

//   const onViewableItemsChanged = useRef(({ viewableItems }) => {
//     setViewableItems(viewableItems.map((item) => item.key));
//   }).current;

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={({ item }) => <Item title={item.title} isVisible={viewableItems.includes(item.key)} />}
//         keyExtractor={(item) => item.key}
//         onViewableItemsChanged={onViewableItemsChanged}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50,
//   },
//   item: {
//     // backgroundColor: '#f9c2ff',
//     backgroundColor: 'blue',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius:20
//   },
//   title: {
//     fontSize: 22,
    
//   },
// });


// bai 3


// import { StyleSheet, Text, View, Image, Pressable, Animated, FlatList } from 'react-native';
// import React, { useState, useEffect } from 'react';

// // Wrap FlatList with Animated.createAnimatedComponent
// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

// const App = () => {
//   const [scrollY] = useState(new Animated.Value(0));
//   const [headerHeight, setHeaderHeight] = useState(400);

//   useEffect(() => {
//     scrollY.addListener(({ value }) => {
//       setHeaderHeight(Math.max(0, 400 - value));
//     });

//     return () => {
//       scrollY.removeAllListeners();
//     };
//   }, []);

//   const headerOpacity = scrollY.interpolate({
//     inputRange: [0, 200],
//     outputRange: [1, 0],
//     extrapolate: 'clamp',
//   });

//   const headerScale = scrollY.interpolate({
//     inputRange: [0, 200],
//     outputRange: [1, 0.5],
//     extrapolate: 'clamp',
//   });

//   const data = [
//     { id: '1', title: 'Product Design', subtitle: 'Design System', author: 'Matheu' },
//     { id: '2', title: 'Product Design', subtitle: 'Design System', author: 'Matheu' },
//     { id: '3', title: 'Product Design', subtitle: 'Design System', author: 'Matheu' },
//     { id: '4', title: 'Product Design', subtitle: 'Design System', author: 'Matheu' },
//     { id: '5', title: 'Product Design', subtitle: 'Design System', author: 'Matheu' },
//     { id: '6', title: 'Product Design', subtitle: 'Design System', author: 'Matheu' },
//     { id: '7', title: 'Product Design', subtitle: 'Design System', author: 'Matheu' },
//     { id: '8', title: 'Product Design', subtitle: 'Design System', author: 'Matheu' },
//     { id: '9', title: 'Product Design', subtitle: 'Design System', author: 'Matheu' },
//     { id: '10', title: 'Product Design', subtitle: 'Design System', author: 'Matheu' },

//     // Add more data items here
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.quizContainer}>
//       <View style={styles.quizItem}>
//         <View style={styles.quizItemHeader}>
//           <Text style={styles.quizItemTitle}>{item.title}</Text>
//           <Pressable>
//             <Image style={styles.loveIcon} source={require('./sp.jpg')} />
//           </Pressable>
//         </View>
//         <Text style={styles.quizItemSubtitle}>{item.subtitle}</Text>
//         <View style={styles.quizItemAuthor}>
//           <Image style={styles.authorAvatar} source={require('./sp.jpg')} />
//           <Text style={styles.authorName}>{item.author}</Text>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       <Animated.View style={[styles.header, { height: headerHeight, opacity: headerOpacity, transform: [{ scale: headerScale }] }]}>
//         <Image style={styles.avatar} source={require('./sp.jpg')} />
//         <Text style={styles.headerText}>Mornin' Mark</Text>
//         <Text style={styles.subHeaderText}>Ready for a width?</Text>
//         <View style={styles.buttonContainer}>
//           <Pressable style={styles.button}>
//             <Text style={styles.buttonText}>Popular</Text>
//           </Pressable>
//           <Text style={styles.buttonText}>Product design</Text>
//           <Text style={styles.buttonText}>Development</Text>
//         </View>
//       </Animated.View>
//       {/* Use AnimatedFlatList instead of FlatList */}
//       <AnimatedFlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={{ paddingTop: 20 }}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: true }
//         )}
//         scrollEventThrottle={16}
//         ListHeaderComponent={<Text style={styles.sectionTitle}>Popular Quizzes</Text>}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#099058',
//     width: '100%',
//     alignItems: 'flex-start',
//     paddingTop: 20,
//     paddingHorizontal: 10,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 20,
//   },
//   headerText: {
//     fontSize: 60,
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: 10,
//   },
//   subHeaderText: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginTop: 30,
//     justifyContent: 'space-around',
//     width:'100%'
//   },
//   button: {
//     backgroundColor: '#43a67f',
//     width: 100,
//     height: 25,
//     borderRadius: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 3,
//   },
//   sectionTitle: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginLeft: 5,
//     marginTop: 20,
//   },
//   quizContainer: {
//     backgroundColor: '#ffffff',
//     borderWidth: 1,
//     marginHorizontal: 5,
//     borderRadius: 15,
//     marginTop: 20,
//     padding: 10,
//   },
//   quizItem: {
//     marginBottom: 20,
//   },
//   quizItemHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginLeft: 5,
//     marginTop: 6,
//   },
//   quizItemTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   loveIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   quizItemSubtitle: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginLeft: 5,
//   },
//   quizItemAuthor: {
//     flexDirection: 'row',
//     marginTop: 30,
//     marginBottom: 15,
//     marginLeft: 5,
//   },
//   authorAvatar: {
//     width: 30,
//     height: 30,
//   },
//   authorName: {
//     marginTop: 5,
//     marginLeft: 10,
//     fontWeight: 'bold',
//   },
// });

// export default App;


// App.js

import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ExpenseReducer from './src/reducers/ExpenseReducer';
import ExpenseListScreen from './src/screens/ExpenseListScreen';

const rootReducer = combineReducers({
  expenses: ExpenseReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <ExpenseListScreen />
    </Provider>
  );
};

export default App;
