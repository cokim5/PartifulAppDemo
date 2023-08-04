import { StyleSheet, Dimensions, TextInput } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const { width, height } = Dimensions.get('window')

// textInputs for date, place, description, and invites in create post page
const CreatePostInput = (props) => {
    return (
        <BlurView
            blurType="light"
            blurAmount={30}
            style={styles.blurContainer}>
            <TextInput
                style={{
                    textAlign: 'center',
                    fontSize: props.fontSize,
                    height: height * props.height,
                }}
                multiline
                placeholderTextColor={'grey'}
                value={props.value}
                onChangeText={(input) => props.onChange(input)}
                placeholder={props.placeholder}
                textAlign='left'
                textAlignVertical='center'
            />
        </BlurView>
    )
}

export default CreatePostInput;

const styles = StyleSheet.create({
    titleInput: {
        textAlign: 'center',
        fontSize: 40,
        height: height * 0.12,
    },

    blurContainer: {
        width: width * 0.94,
        marginTop: height * 0.01,
    },
})