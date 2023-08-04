import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

// animated ellipsis
const AnimatedEllipsis = () => {
  const dot1Opacity = useRef(new Animated.Value(0)).current;
  const dot2Opacity = useRef(new Animated.Value(0)).current;
  const dot3Opacity = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.sequence([
      Animated.timing(dot1Opacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
      
      Animated.timing(dot2Opacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
      
      Animated.timing(dot3Opacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(dot1Opacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(dot2Opacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(dot3Opacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(animate);
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <View style={{ flexDirection: 'row' }}>
      <Animated.Text style={{ opacity: dot1Opacity, color: 'white' }}>.</Animated.Text>
      <Animated.Text style={{ opacity: dot2Opacity, color: 'white' }}>.</Animated.Text>
      <Animated.Text style={{ opacity: dot3Opacity, color: 'white' }}>.</Animated.Text>
    </View>
  );
};

export default AnimatedEllipsis;
