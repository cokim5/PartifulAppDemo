import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BlurView } from '@react-native-community/blur';
import CreatePostBottomButton from './CreatePostBottomButton';
import { useState } from 'react';
import ThemesContainer from './ThemesContainer.js'

const { width, height } = Dimensions.get('window')

// the bottom bar in create post, this includes the publish event button, 
// theme, effect, settings, preview bar, and the themes popup
const CreatePostBottomBar = (props) => {
    // bool to make themes container appear/disappear
    const [showThemes, setShowThemes] = useState(false);

    return (
        <View>
            {showThemes ?
                <ThemesContainer setBackgroundText={props.setBackgroundText} setBackground={props.setBackground} />
                :
                <></>
            }
            <View style={styles.bottomControls}>
                <BlurView
                    blurType="light"
                    blurAmount={10}
                    style={styles.blurContainer}
                >
                    <CreatePostBottomButton label={"THEME"} image={require('../../assets/paintbrush.png')} onPress={() => setShowThemes(!showThemes)} />
                    <CreatePostBottomButton label={"EFFECT"} image={require('../../assets/magic-wand.png')} />
                    <CreatePostBottomButton label={"SETTINGS"} image={require('../../assets/settings.png')} />
                    <CreatePostBottomButton label={"PREVIEW"} image={require('../../assets/eye.png')} />
                </BlurView>
            </View>
            <View style={styles.publishButtonContainer}>
                <TouchableOpacity style={styles.publishButton} onPress={props.onPress}>
                    <Text style={styles.publishButtonText}>PUBLISH EVENT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreatePostBottomBar;

const styles = StyleSheet.create({
    publishButtonContainer: {
        height: height * 0.08,
        bottom: 0,
        position: 'absolute',
        width: width,
        backgroundColor: 'rgb(89, 56, 232)',
    },

    publishButtonText: {
        color: 'white',
        fontWeight: 700,
        fontSize: 18,
    },

    publishButton: {
        height: height * 0.08,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottomControls: {
        position: 'absolute',
        bottom: height * 0.08,
        height: height * 0.10,
        width: width,
        borderTopWidth: 0.2,
        borderTopColor: 'grey'
    },

    blurContainer: {
        height: height * 0.10,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
})