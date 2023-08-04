import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const UserIcon = (props) => {
    const { colors, onPress, initial, dimension } = props;

    return (
        <View>
            <LinearGradient
                colors={colors}
                style={{
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: dimension,
                    height: dimension,
                }}
                start={{ x: 0.7, y: 0 }}
            >
                <TouchableOpacity onPress={() => onPress()} style={styles.buttonContainer}>
                    <Text style={{ color: '#5A5A5A' }}>{initial}</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

export default UserIcon;

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})


