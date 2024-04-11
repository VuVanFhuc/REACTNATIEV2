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

const CusInput = (props: PropsInput) => {
  return (
    <View>
      <Text style={[{color: 'black', fontWeight: 'bold'}, props.styleTitle]}>
        {props.title}
      </Text>
      <TextInput
        placeholder={props.hint}
        onChangeText={props.onChangeText}
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
        value={props.value}
      />
    </View>
  );
};

export default CusInput;

const styles = StyleSheet.create({});
