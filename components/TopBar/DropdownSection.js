import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window')

// mutuals, and logout section of dropdown menu
const DropdownSection = (props) => {
    var src = props.category === 'Mutuals'
        ? require('../../assets/user.png')
        : require('../../assets/logout.png');

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.iconContainer}>
                <View style={props.darkPage ?
                    [{ backgroundColor: 'rgba(230, 230, 231, 0.1)' }, styles.iconCircle] :
                    [{ backgroundColor: 'rgba(0, 0, 0, 0.06)' }, styles.iconCircle]}>
                    <Image
                        source={src}
                        style={props.darkPage ?
                            [{ tintColor: 'grey' }, styles.imageContainer]
                            :
                            [{ opacity: 0.5 }, styles.imageContainer]} />
                </View>
            </View>
            <View style={styles.labelContainer}>
                <Text style={props.darkPage ?
                    [{ color: 'white' }, styles.labelText] :
                    [{ color: 'black' }, styles.labelText]}>
                    {props.category}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default DropdownSection;

const styles = StyleSheet.create({
    container: {
        width: width * 0.8,
        height: height * 0.095,
        flexDirection: 'row'
    },

    iconContainer: {
        width: width * 0.23,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageContainer: {
        resizeMode: 'contain',
        width: width * 0.08,
        height: width * 0.08,
    },

    iconCircle: {
        borderRadius: 50,
        width: width * 0.14,
        height: width * 0.14,
        justifyContent: 'center',
        alignItems: 'center',
    },

    labelText: {
        fontWeight: 600,
        fontSize: width * 0.04,
    },

    labelContainer: {
        justifyContent: 'center',
    },
})