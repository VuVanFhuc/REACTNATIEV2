import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface PropsBottom {
  text?: string;
  style?: ViewStyle;
  styletext?: TextStyle;
  onPress?: (item: any) => void;
}

const CustomBottom = (props: PropsBottom) => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={[
          {
            backgroundColor: '#D17842',
            height: 50,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          },
          props.style,
        ]}>
        <Text style={{color: 'white'}}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomBottom;

const styles = StyleSheet.create({});
