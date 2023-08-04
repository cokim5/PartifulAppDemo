import { StyleSheet, Text, View, TouchableOpacity, Image, Animated, Dimensions, Button, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef } from 'react'
import OnboardButton from '../../components/OnboardButton'

const { width, height } = Dimensions.get('window')

// first screen to appear to new user, prompts user for login or signup
const OnboardingScreen = () => {

  const navigation = useNavigation();

  const navToLogin = () => {
    navigation.navigate("Login");
  }

  const navToSignUp = () => {
    navigation.navigate("UsernameAdd");
  }

  return (
    <ImageBackground
      source={require('../../assets/background.gif')} 
      style={styles.backgroundImage}
    >
      {/* logo container */}
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/partifulLogo.png')} style={styles.logo}/>
      </View>

      <Text style={styles.subText}>
        enter the party
      </Text>
      
      <OnboardButton buttonColor="transparent" textColor="white" text="CREATE ACCOUNT" onPress={navToSignUp} />
      <OnboardButton buttonColor="transparent" textColor="white" text="SIGN IN" onPress={navToLogin} />
    </ImageBackground>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  backgroundImage: {
    height: height,
  },

  logoContainer: {
    borderWidth: 1,
    height: height * 0.6,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logo: {
    resizeMode: 'contain',
    width: width * 0.7,
  },

  subText: {
    marginTop: height * 0.15,
    textAlign: 'center',
    fontSize: 20,
    width: width,
    color: 'white',
    marginBottom: height * 0.01,
  },
})