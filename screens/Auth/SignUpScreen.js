import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Alert, Dimensions, View, Keyboard, Animated } from 'react-native'
import React, { useState, useContext, useRef, useEffect } from 'react'
import { AuthContext } from '../../navigation/AuthProvider'
import { useNavigation } from '@react-navigation/native'
import DismissKeyBoard from '../../components/DissmisskeyBoard'
import OnboardButton from '../../components/OnboardButton'
import PageBackButton from '../../components/PageBackButton'
import AnimatedEllipsis from '../../components/AnimatedEllipsis';

const { width, height } = Dimensions.get('window')

// second screen of signup sequence
// screen that runs firebase auth, takes email and password and registers users to db
const SignupScreen = ({ route }) => {
  const { username, name } = route.params;
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigation = useNavigation();
  const { register } = useContext(AuthContext);

  const navBack = () => {
    navigation.navigate("Onboarding");
  }

  // method to ensure passwords match
  const passwordMatchCheck = () => {
    if (password !== confirmPassword) {
      Alert.alert("passwords do not match");
    } else {
      register(email, password, name, username);
    }
  }

  return (
    <DismissKeyBoard>
      <View style={{ backgroundColor: 'black', height: height }}>
        <KeyboardAvoidingView style={{ width: '100%', alignItems: 'center' }}>

          <View style={styles.backButtonContainer}>
            <PageBackButton onPress={navBack} />
          </View>

          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Sign Up</Text>
          </View>

          <View style={styles.captionContainer}>
            <Text style={styles.caption}>
              party loading
              <AnimatedEllipsis />
              </Text>
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
            <TextInput
              placeholder="confirm password"
              value={confirmPassword}
              onChangeText={text => { setConfirmPassword(text) }}
              style={styles.input}
              secureTextEntry
              placeholderTextColor='#ADADAD'
            />
          </View>

          <View style={{ width: width }}>
            <OnboardButton buttonColor="transparent" textColor="#FFFFFF" text="START THE PARTY" onPress={() => passwordMatchCheck()} />
          </View>

        </KeyboardAvoidingView>
      </View>
    </DismissKeyBoard>
  )
}

export default SignupScreen

const styles = StyleSheet.create({

  inputContainer: {
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },

  labelContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: width * 0.76,
    borderWith: 1,
    borderColor: 'red',
    height: height * 0.1,
  },

  input: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: height * 0.014,
    width: width * 0.77,
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 1,
    color: 'white',
  },

  labelText: {
    marginBottom: height * 0.025,
    marginTop: -height * 0.03,
    fontSize: 30,
    fontWeight: '800',
    color: 'white',
    marginLeft: 0
  },

  backButtonContainer: {
    marginTop: height * 0.07,
    marginBottom: height * 0.04,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: width * 0.78,
  },

  caption: {
    color: 'white',
  },

  captionContainer: {
    height: height * 0.15,
  }

})