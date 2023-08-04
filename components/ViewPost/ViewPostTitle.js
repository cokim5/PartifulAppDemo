import { Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

// displays title for ViewPost
const ViewPostTitle = (props) => {
    return (
        <Text
            style={styles.title}
            numberOfLines={2}
            multiline>
            {props.value}
        </Text>
    )
}

export default ViewPostTitle;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 40,
        height: height * 0.07,
        fontWeight: 600,
    },
})