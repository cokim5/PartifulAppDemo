import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { firebase } from "@react-native-firebase/auth";
import TopBar from '../components/TopBar/TopBar';
import Welcome from '../components/Home/Welcome';
import PostCarousel from '../components/Home/PostCarousel';

const { width, height } = Dimensions.get('window')

// main screen of app
const Home = () => {
    const [user, setUser] = useState({ name: '', username: '' });
    const [eventCount, setEventCount] = useState(0);

    useEffect(() => {
        setUserInfo();

    }, [])

    // fetches user info from firebase
    const setUserInfo = () => {
        const userId = firebase.auth().currentUser.uid;
        const userRef = firebase.firestore().collection('Users').doc(userId);
        const unsubscribe = userRef.onSnapshot((doc) => {
            if (doc.exists) {
                const { name, username } = doc.data();
                if (user.name === '' && user.username === '') {
                    setUser({ name, username });
                }
            }
        });
        return () => unsubscribe();
    }

    return (
        <ImageBackground
            source={require('../assets/homeBackground.gif')}
            style={styles.background}
            imageStyle={styles.backgroundImage}
        >
            <View style={{ zIndex: 99999 }}>
                <TopBar username={user.username} darkPage={true}/>
            </View>
            <Welcome user={user} eventCount={eventCount}/>
            <PostCarousel user={user} setEventCount={setEventCount}/>
        </ImageBackground>
    )
}

export default Home;

const styles = StyleSheet.create({
    background: {
        height: height,
        resizeMode: 'contain',
        paddingLeft: width * 0.03,
        paddingRight: width * 0.03,
    },

    backgroundImage: {
        resizeMode: 'cover',
        height: height,
    },

})