import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';


const ErrorComponent = () => {
  React.useEffect(() => {
    throw new Error('This is Error Component with error message: could find undefined value');
  }, []);

  return null;
}

const FallbackComponent = ({error, resetError}) => (
  <>
    <Text style={{margin: 16, fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>THE SCENE IS UNDER MAINTENANCE</Text>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginTop: 16}}>Error Message:</Text>
      <Text style={{marginTop: 8, color: 'red'}}>{JSON.stringify(error)}</Text>
    </View>
  </>
);

const ErrorBoundaryScene = () => {
  const [isShowErrorComponent, setIsShowErrorComponent] = React. useState(false);
  
  const handleShowErrorComponent = () => setIsShowErrorComponent(true);

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <View style={{padding: 16}}>
        {isShowErrorComponent && (<ErrorComponent/>)}
        <Text style={{
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 16,
        }}>
          Tap button below to show ErrorComponent
        </Text>
        <TouchableOpacity
          onPress={handleShowErrorComponent}
          style={{
            backgroundColor: 'green',
            padding: 8,
            width: 150,
            alignItems: 'center',
            borderRadius: 4,
            marginTop: 8,
            alignSelf: 'center'
          }}
        >
          <Text style={{color: 'white'}}>SHOW</Text>
        </TouchableOpacity>
      </View>
    </ErrorBoundary>
  );
};

 export default ErrorBoundaryScene;
 