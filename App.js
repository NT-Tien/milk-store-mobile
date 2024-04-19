import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import TabNavigator from './TabNavigation'; // Assuming TabNavigator is imported from another file

export default function App() {
  return (
    <ImageBackground 
      source={{uri : 'https://png.pngtree.com/thumb_back/fh260/background/20210307/pngtree-celebration-background-for-baby-baptism-image_579382.jpg'}} // Replace 'yourBackgroundImage.jpg' with the path to your background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <TabNavigator />
      </View>
     </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Additional styling for your container if needed
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    // Other background styles can be added here
  },
});
