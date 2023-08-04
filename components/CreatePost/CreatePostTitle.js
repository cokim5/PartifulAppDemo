import { StyleSheet, Dimensions, TextInput } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const { width, height } = Dimensions.get('window')

// title input for create post page
const CreatePostTitle = (props) => {
    return (
        <BlurView
            blurType="light"
            blurAmount={30}
            style={styles.blurContainer}>
            <TextInput
                style={styles.titleInput}
                numberOfLines={2}
                multiline
                placeholderTextColor={'black'}
                value={props.value}
                onChangeText={(input) => props.onChange(input)}
                onFocus={() => props.onFocus(true)}
                onBlur={() => props.onFocus(false)}
            />
        </BlurView>
    )
}

export default CreatePostTitle;

const styles = StyleSheet.create({
    titleInput: {
        textAlign: 'center',
        fontSize: 40,
        height: height * 0.12,
    },

    blurContainer: {
        width: width * 0.94,
    },
})