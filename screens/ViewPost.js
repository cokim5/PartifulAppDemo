import { View, ImageBackground, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import ViewPostTitle from '../components/ViewPost/ViewPostTitle';
import ViewPostMetadata from '../components/ViewPost/ViewPostMetadata';
import ViewPostRSVP from '../components/ViewPost/ViewPostRSVP';

const { width, height } = Dimensions.get('window')

// View post screen
const ViewPost = ({ route }) => {
    const { user, post } = route.params;
    let background;

    // sets background of viewpost
    if (post.background === 'Sparkling') {
        background = require('../assets/createSparkling.gif');
    } else if (post.background === 'Pride') {
        background = require('../assets/createPride.gif');
    } else if (post.background === 'Pool') {
        background = require('../assets/createPool.gif');
    }

    return (
        <ImageBackground source={background} style={styles.background}>

            <View style={{ zIndex: 99999 }}>
                <TopBar username={user.username} darkPage={false} />
            </View>
            <ScrollView
                style={styles.containerUnfocused}
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <ViewPostTitle value={post.title} />
                <Image source={require('../assets/post.png')} style={styles.imageContainer} />
                <ViewPostMetadata post={post} />
                <ViewPostRSVP post={post} user={user}/> 
            </ScrollView>
        </ImageBackground>
    )
}

export default ViewPost;

const styles = StyleSheet.create({
    background: {
        height: height,
        width: width,
        paddingLeft: width * 0.03,
        paddingRight: width * 0.03,
    },

    containerUnfocused: {
        marginTop: height * 0.03,
        height: height * 0.8,
    },

    imageContainer: {
        resizeMode: 'contain',
        width: width * 0.85,
        alignSelf: 'center'
    },
})
