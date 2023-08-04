import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window')

// the individual theme, effect, settings, and preview button in the bottom bar of create post
const CreatePostBottomButton = (props) => {

    return (
        <TouchableOpacity style={styles.controlContainer} onPress={props.onPress}>
            <View style={{ alignItems: 'center' }}>
                <Image source={props.image} style={styles.icon} />
            </View>
            <Text style={styles.buttonText}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default CreatePostBottomButton;

const styles = StyleSheet.create({
    controlContainer: {
        height: height * 0.08,
        width: width * 0.25,
        borderRightWidth: 0.5,
        borderRightColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontWeight: 700,
        color: '#5A5A5A',
        fontSize: 12,
    },

    icon: {
        tintColor: 'grey',
        resizeMode: 'contain',
        width: width * 0.08,
        height: width * 0.08,
        marginBottom: height * 0.005
    },
})