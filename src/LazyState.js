import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const getLazyState = () => {
  console.log('lazy called');
  return 0;
}

const getNotLazyState = () => {
  console.log('not lazy called');
  return 0;
};

const LazyState = () => {
  const [number, setNumber] = React.useState(0);
  const [lazyState, setLazyState] = React.useState(getLazyState);
  const [notLazyState, setNotLazyState] = React.useState(getNotLazyState())

  const handleIncrementNumber = () => {
    setNumber(number+1)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textNumber}>
        {number}
      </Text>
      <TouchableOpacity
        onPress={handleIncrementNumber}
        style={styles.buttonIncrementNumber}
      >
        <Text>Increment Number</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    textNumber: {
        backgroundColor: 'grey',
        padding: 8,
        width: 36,
        textAlign: 'center',
    },
    buttonIncrementNumber: {
        backgroundColor: 'green',
        padding: 8,
        width: 150,
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 8,
    },
});
 
 export default LazyState;
 