import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

// top bar feedback and events button
const TopBarButton = (props) => {
    const { onPress, text, darkPage } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onPress()}>
                <Text style={darkPage ? styles.textLight : styles.textDark}>{text}</Text>
            </TouchableOpacity>
        </View>

    )
}

export default TopBarButton;

const styles = StyleSheet.create({
    container: {
        width: width * 0.23,
        marginLeft: width * 0.04
    },

    textLight: {
        color: 'white',
        fontWeight: 'bold',
    },

    textDark: {
        color: 'black',
        fontWeight: 'bold',
    },

})

