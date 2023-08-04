import { View, StyleSheet, Dimensions } from 'react-native';
import CategoryButton from './CategoryButton';

const { width, height } = Dimensions.get('window')

// upcoming and hosting buttons on home page
const Category = (props) => {
    return (
        <View style={styles.categoryContainer}>
            <CategoryButton onPress={() => props.onPress('Upcoming')} type={'Upcoming'} selected={props.selected} />
            <CategoryButton onPress={() => props.onPress('Hosting')} type={'Hosting'} selected={props.selected} />
        </View>
    )
}

export default Category;

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        height: height * 0.04,
    },

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