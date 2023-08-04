import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

// wrapper to make entire screen dismiss keyboard
const DismissKeyBoard = ({ children }) => {
    return (  
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
    )
  }

export default DismissKeyBoard

const styles = StyleSheet.create({})