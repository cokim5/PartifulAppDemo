import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity, View, Image, TouchableWithoutFeedback, Keyboard, Animated } from 'react-native'
import React, { useState, useContext, useRef, useEffect } from 'react'
import { AuthContext } from '../../navigation/AuthProvider'
import { useNavigation } from '@react-navigation/native'
import DismissKeyBoard from '../../components/DissmisskeyBoard'
import OnboardButton from '../../components/OnboardButton'
import PageBackButton from '../../components/PageBackButton'

const { width, height } = Dimensions.get('window')

// screen to handle user logging in
const LoginScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();
  const { login, google, apple } = useContext(AuthContext);

  // use effect to manage the fade animation after clicking create account
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const navBack = () => {
    navigation.navigate("Onboarding");
  }

  return (
    <DismissKeyBoard>
      <Animated.View style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: fadeAnim
      }}
      >
        <KeyboardAvoidingView style={styles.avoidingView} behavior="padding" enabled>

          <View style={styles.backButtonContainer}>
            <PageBackButton onPress={navBack} />
          </View>

          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Sign In</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="email"
              value={email}
              onChangeText={text => { setEmail(text) }}
              style={styles.input}
              placeholderTextColor='#ADADAD'
            />

            <TextInput
              placeholder="password"
              value={password}
              onChangeText={text => { setPassword(text) }}
              style={styles.input}
              secureTextEntry
              placeholderTextColor='#ADADAD'
            />

          </View>

          <View style={{width: width}}>
            <OnboardButton
              buttonColor="transparent"
              textColor="#FFFFFF"
              text="SIGN IN"
              onPress={() => login(email, password)}
            />
          </View>

        </KeyboardAvoidingView>

      </Animated.View>
    </DismissKeyBoard>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  inputContainer: {
    width: width * 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: height * 0.035,
    marginTop: height * 0.012
  },

  labelContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: width * 0.76,
    marginBottom: height * 0.0005,
  },

  socialContainer: {
    marginBottom: height * 0.024
  },

  input: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: height * 0.005,
    marginBottom: width * 0.014,
    width: width * 0.77,
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 1,
    color: 'white'
  },

  labelText: {
    marginBottom: height * 0.01,
    fontSize: 30,
    fontWeight: '800',
    color: 'white',
  },

  backButtonContainer: {
    marginTop: height * 0.08,
    marginBottom: height * 0.03,
    width: width * 0.78
  },

  avoidingView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
})