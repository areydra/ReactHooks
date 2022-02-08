import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import useDarkMode from './utils/useDarkMode';

const CustomHook = () => {
  const [isDarkMode, handleChangeDarkMode] = useDarkMode();
  
  return (
    <View style={{padding: 16}}>
      <Text style={{
        backgroundColor: 'grey',
        padding: 8,
        width: 150,
      }}>
        Dark Mode: {isDarkMode.toString()}
      </Text>
      <TouchableOpacity
        onPress={handleChangeDarkMode}
        style={{
          backgroundColor: 'green',
          padding: 8,
          width: 150,
          alignItems: 'center',
          borderRadius: 4,
          marginTop: 8,
        }}
      >
        <Text>Tap to Change</Text>
      </TouchableOpacity>
    </View>
  );
};

 export default CustomHook;
 