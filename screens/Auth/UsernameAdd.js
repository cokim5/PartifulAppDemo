import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity, View, Image, TouchableWithoutFeedback, Keyboard, Animated, Alert } from 'react-native'
import React, { useState, useContext, useRef, useEffect } from 'react'
import { AuthContext } from '../../navigation/AuthProvider'
import { useNavigation } from '@react-navigation/native'
import DismissKeyBoard from '../../components/DissmisskeyBoard'
import OnboardButton from '../../components/OnboardButton'
import PageBackButton from '../../components/PageBackButton'
import firestore from '@react-native-firebase/firestore';

const { width, height } = Dimensions.get('window')

// first screen of signup sequence
// takes name and username, verifies that username is unique
const UsernameAdd = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const navigation = useNavigation();
  const { register } = useContext(AuthContext);

  // use effect to handle fading animation
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

  // nav user to signup page, ensure fields are filled out correclty
  const navSignup = () => {
    if (username != '' && name != '') {
      checkUsernameUnique();
    } else {
      Alert.alert("Please be sure to fill out name and username!");
    }
  }

  // method to ensure that username is unique
  const checkUsernameUnique = async () => {
    var unique = true;
    await firestore()
      .collection('Users')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          if (documentSnapshot.data().username.toUpperCase() == username.toUpperCase()) {
            if (unique) {
              Alert.alert("Username is taken");
            }
            unique = false;
          }
        });
      }).then(() => {
        if (unique) {
          navigation.navigate("Signup", {
            username: username,
            name: name,
          });
        }
      })
  }

  return (
    <DismissKeyBoard>
      <Animated.View style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: fadeAnim
      }}>
        {/* moves content on keyboard appearing */}
        <KeyboardAvoidingView style={{ width: '100%', alignItems: 'center', }}>

          <View style={styles.backButtonContainer}>
            <PageBackButton onPress={navBack} />
          </View>

          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>My name is</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="John Doe"
              value={name}
              onChangeText={text => { setName(text) }}
              style={styles.input}
              placeholderTextColor='#ADADAD'
            />
          </View>

          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>My username is</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="john_doe"
              value={username}
              onChangeText={text => { setUsername(text) }}
              style={styles.input}
              placeholderTextColor='#ADADAD'
            />
          </View>

          <View style={{ width: width }}>
            <OnboardButton buttonColor="transparent" textColor="#FFFFFF" text="CONTINUE" onPress={navSignup} />
          </View>

        </KeyboardAvoidingView>
      </Animated.View>
    </DismissKeyBoard>
  )
}

export default UsernameAdd

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  inputContainer: {
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.055,
  },

  labelContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: width * 0.75,
  },

  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: width * 0.75,
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 1,
    borderColor: 'black',
    color: 'white'
  },

  labelText: {
    marginBottom: height * 0.02,
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
    marginLeft: 0
  },

  backButtonContainer: {
    marginTop: height * 0.08,
    marginBottom: height * 0.05,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: width * 0.78
  }
})