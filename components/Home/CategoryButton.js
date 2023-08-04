import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window')

// individual category button component
const CategoryButton = (props) => {
    const { type, selected, onPress } = props;

    return (
        <View style={selected === type ? styles.buttonSelectedContainer : styles.buttonContainer}>
            <TouchableOpacity onPress={() => onPress()}>
                <Text style={styles.labelText}>{type}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        height: height * 0.04,
        marginRight: width * 0.07,
        paddingHorizontal: width * 0.02,
        justifyContent: 'center',
        opacity: 0.7,
    },

    labelText: {
        color: 'white',
        fontSize: 18,
    },

    buttonSelectedContainer: {
        height: height * 0.04,
        marginRight: width * 0.07,
        backgroundColor: 'grey',
        borderRadius: 20,
        paddingHorizontal: width * 0.02,
        justifyContent: 'center',
        opacity: 0.7,
    }
})