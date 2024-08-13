import React from 'react';
import {ActivityIndicator} from 'react-native';

function LoadingComponent({isLoading}) {
  return (
    <ActivityIndicator size={'large'} color={'#b35c00'} animating={isLoading} />
  );
}

export default LoadingComponent;
