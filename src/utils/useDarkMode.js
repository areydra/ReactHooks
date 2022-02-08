import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useDarkMode(){
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    AsyncStorage.getItem('dark_mode').then((result) => {
        const parseResult = result ? JSON.parse(result) : false;
  
        if (parseResult === isDarkMode) {
            return;
        }
  
        setIsDarkMode(parseResult);
    });
  }, []);

  const handleChangeDarkMode = () => {
    AsyncStorage.setItem('dark_mode', JSON.stringify(!isDarkMode)).then(() => {
      setIsDarkMode(!isDarkMode)
    });
  };
  
  return [isDarkMode, handleChangeDarkMode];
};
 