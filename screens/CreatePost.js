import { View, ImageBackground, StyleSheet, Dimensions, ScrollView, Image, Alert } from 'react-native';
import CreatePostBottomBar from '../components/CreatePost/CreatePostBottomBar';
import { useState } from 'react';
import TopBar from '../components/TopBar/TopBar';
import CreatePostInput from '../components/CreatePost/CreatePostInput';
import CreatePostTitle from '../components/CreatePost/CreatePostTitle';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const { width, height } = Dimensions.get('window')

// create post page
const CreatePost = ({ route }) => {
    const navigation = useNavigation();
    
    // useState vars for post fields
    const [background, setBackground] = useState(require('../assets/createSparkling.gif'));
    const [backgroundText, setBackgroundText] = useState('Sparkling');
    const { user } = route.params;
    const [title, setTitle] = useState('Untitled Event');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [titleFocused, setTitleFocused] = useState(false);
    const [invited, setInvited] = useState('');

    // sends post to firebase
    const postEvent = () => {
        if (date !== '' && address !== '' && description !== '') {
            // convert invite string to array of capitalized names
            let invitedCapitalized = invited.toUpperCase();
            let inviteArray = invitedCapitalized.split(',');
            inviteArray.unshift(user.username.toUpperCase());
            // send post to firestore
            firestore().collection('Posts').add({
                title: title,
                date: date,
                address: address,
                description: description,
                background: backgroundText,
                host: user.username,
                invited: inviteArray,
                accepted: [],
                rejected: [],
            }).then(() => {
                setTitle('Untitled Event');
                setDate('');
                setAddress('');
                setDescription('');
                navigation.navigate('Home');
            })
        } else {
            Alert.alert("Please be sure to fill out all fields!");
        }
    }

    return (
        <ImageBackground source={background} style={styles.background}>

            <View style={{ zIndex: 99999 }}>
                <TopBar username={user.username} darkPage={false} />
            </View>

            <KeyboardAvoidingView style={styles.avoidingView} behavior='position' enabled>
                <ScrollView style={titleFocused ? styles.containerFocused : styles.containerUnfocused } contentContainerStyle={{ flexGrow: 1 }}>
                    <CreatePostTitle value={title} onChange={setTitle} onFocus={setTitleFocused}/>
                    <Image source={require('../assets/post.png')} style={styles.imageContainer} />
                    <CreatePostInput value={date} onChange={setDate} height={0.05} fontSize={30} placeholder={'Date & Time TBD'} />
                    <CreatePostInput value={address} onChange={setAddress} height={0.05} fontSize={20} placeholder={'Place name, address'} />
                    <CreatePostInput value={description} onChange={setDescription} height={0.05} fontSize={20} placeholder={'Add a description of your event'} />
                    <CreatePostInput value={invited} onChange={setInvited} height={0.1} fontSize={20} placeholder={'Enter the list of usernames that you would like to invite in a comma-separated list with no spaces'} />
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={{ position: 'absolute', bottom: 0 }}>
                <CreatePostBottomBar setBackground={setBackground} setBackgroundText={setBackgroundText} onPress={() => postEvent()} />
            </View>

        </ImageBackground>
    )
}

export default CreatePost;

const styles = StyleSheet.create({
    background: {
        height: height,
        width: width,
        paddingLeft: width * 0.03,
        paddingRight: width * 0.03,
    },

    containerUnfocused: {
        marginTop: height * 0.03,
        height: height * 0.68,
    },

    containerFocused: {
        marginTop: height * 0.03,
        height: height * 0.47,
    },

    imageContainer: {
        resizeMode: 'contain',
        marginTop: height * 0.02,
        width: width * 0.85,
        alignSelf: 'center'
    },

})
