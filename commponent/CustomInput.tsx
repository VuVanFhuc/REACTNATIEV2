import {
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface PropsInput {
  title?: string;
  hint?: string;
  styleTitle?: TextStyle;
  style?: ViewStyle;
  value?: string;
  onChangeText?: (txt: any) => void;
}

const CustomInput = (props: PropsInput) => {
  return (
    <View>
      <Text style={{color: '#242424', fontWeight: '500', fontSize: 16}}>
        {props.title}
      </Text>
      <TextInput
        placeholder={props.hint}
        style={[
          {
            elevation: 5,
            borderRadius: 8,
            backgroundColor: 'white',
            padding: 15,
            marginTop: 3,
            marginBottom: 10,
          },
          props.style,
        ]}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
