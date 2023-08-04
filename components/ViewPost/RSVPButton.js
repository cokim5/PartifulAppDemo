import { Text, View, Pressable, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')

// the clickable i'm going or can't go buttons in ViewPost
const RSVPButton = (props) => {
    const { onPress, icon, text, pressed } = props;

    return (
        <View style={styles.container}>
            {pressed ?
                <View style={styles.buttonPressed}>
                    <Text style={styles.buttonIcon}>{icon}</Text>
                </View>
                :
                <Pressable
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? '#5938e8' : 'rgba(52, 52, 52, 0.2)' },
                        styles.button,
                    ]}
                    onPress={() => onPress()}>
                    <Text style={styles.buttonIcon}>{icon}</Text>
                </Pressable>
            }
            <Text style={styles.buttonLabel}>{text}</Text>
        </View>
    )
}

export default RSVPButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    button: {
        height: height * 0.12,
        width: height * 0.12,
        borderRadius: 100,
        marginBottom: height * 0.01,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonIcon: {
        fontSize: height * 0.05
    },

    buttonLabel: {
        color: 'grey'
    },

    buttonPressed: {
        height: height * 0.13,
        width: height * 0.13,
        borderRadius: 100,
        marginBottom: height * 0.01,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5938e8',
        borderWidth: height * 0.01,
        borderColor: '#dfddfe'
    }
})