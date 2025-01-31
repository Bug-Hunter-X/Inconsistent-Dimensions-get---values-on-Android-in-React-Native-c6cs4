import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Text, LayoutAnimation } from 'react-native';

const DimensionsBugSolution = () => {
  const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setScreenDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View style={[styles.container, { width: screenDimensions.width, height: screenDimensions.height }]}>
      <Text>Screen Width: {screenDimensions.width}</Text>
      <Text>Screen Height: {screenDimensions.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DimensionsBugSolution;