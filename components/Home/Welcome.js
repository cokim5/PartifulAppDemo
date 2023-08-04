import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

// displays/toggles between different welcome texts on home screen
const Welcome = (props) => {
    const navigation = useNavigation();
    const navToCreate = () => {
        navigation.navigate('CreatePost', { user: props.user });
    }
    return (

        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={2}
                    style={styles.welcomeText}>
                    Welcome back, {props.user.username}
                </Text>
            </View>

            <View style={styles.welcomeCaptionContainer}>
                {props.eventCount === 0
                    ?
                    <View>
                        <Text
                            style={styles.welcomeCaptionText}
                            adjustsFontSizeToFit={true}
                            numberOfLines={2}>
                            You don't have any upcoming events right now. <Text onPress={() => navToCreate()} style={styles.clickableText}>Host one!</Text>
                        </Text>
                    </View>
                    :
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.welcomeCaptionText}
                            adjustsFontSizeToFit={true}
                            numberOfLines={1}>
                            {"You have "}
                        </Text>
                        <Text style={styles.welcomeCaptionTextBold}
                            adjustsFontSizeToFit={true}
                            numberOfLines={1}>
                            {props.eventCount} upcoming event{props.eventCount === 1 ? '' : 's'}
                        </Text>
                    </View>
                }
            </View>
        </View>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 0.2,
    },

    welcomeContainer: {
        width: width * 0.7,
        height: height * 0.15,
    },

    welcomeText: {
        color: 'white',
        fontSize: 50,
    },

    welcomeCaptionContainer: {
        width: width * 0.7,
        height: height * 0.05,
    },

    welcomeCaptionText: {
        color: 'white',
        fontSize: 20,
    },

    welcomeCaptionTextBold: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    clickableText: {
        color: 'rgb(171, 118, 246)',
        fontSize: 20,
    },
})

