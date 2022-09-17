import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

function Loading() {
  return (
    <AnimatedLottieView
      source={require('../../Assets/musicListLoading.json')}
      autoPlay
    />
  );
}

export default Loading;