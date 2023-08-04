import { Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window')

// circular theme buttons to choose theme in theme popup
const ThemeButton = (props) => {
    // sets theme in parent
    const updateTheme = () => {
        props.setBackground(props.filePath);
        props.setBackgroundText(props.text)
    }

    return (
        <TouchableOpacity onPress={() => { updateTheme() }}>
            <Image source={{ uri: props.link }}
                style={styles.image} />
        </TouchableOpacity>
    )
}

export default ThemeButton;

const styles = StyleSheet.create({
    image: {
        width: height * 0.08,
        resizeMode: 'contain',
        height: height * 0.08,
        marginTop: height * 0.01,
        marginRight: width * 0.05,
    },

})

