import { Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')

// button used to nav forward in onboarding screens
const OnboardButton = (props) => {
  return (
    <TouchableOpacity style={
      {
        backgroundColor: props.buttonColor,
        width: width * 0.75,
        marginLeft: width * 0.125,
        padding: width * 0.038,
        borderRadius: 40,
        alignItems: 'center',
        marginBottom: height * 0.01,
        borderColor: 'white',
        borderWidth: 0.5,
      }
    }
      onPress={() => { props.onPress() }}
    >
      <Text style={
        {
          color: props.textColor,
          fontWeight: 'bold'
        }
      }>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default OnboardButton