import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')

// back button used everywhere
const PageBackButton = (props) => {
  return (
    <TouchableOpacity onPress={() => { props.onPress() }}>
      <Image source={require('../assets/back.png')} style={styles.button} />
      <View style={styles.touchableArea} />
    </TouchableOpacity>
  )
}

export default PageBackButton

const styles = StyleSheet.create({
  button: {
    height: height * 0.05,
    resizeMode: 'contain',
    width: width * 0.07,
    tintColor: 'white'
  },

  touchableArea: {
    position: 'absolute',
    top: -height * 0.01,
    left: -width * 0.035,
    right: -width * 0.035,
    bottom: -height * 0.01,
    zIndex: 2,
    opacity: 0,
  }
})

