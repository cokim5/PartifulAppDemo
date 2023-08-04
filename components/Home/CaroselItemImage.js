import { StyleSheet, Text, Dimensions, View, ImageBackground } from "react-native";

const { width, height } = Dimensions.get('window')

// the image part of a carosel item
const CaroselItemImage = (props) => {
    return (
        <ImageBackground
            resizeMode='cover'
            source={require('../../assets/post.png')}
            style={styles.container}>
            <View style={styles.dateContainer}>
                <Text style={{ fontWeight: 600 }}>{props.item.date}</Text>
            </View>

            {props.isHost ?
                <View style={styles.hostingContainer}>
                    <Text style={styles.hostingText}>👑 HOSTING</Text>
                </View>
                :
                <></>
            }
        </ImageBackground>
    )
}

export default CaroselItemImage;

const styles = StyleSheet.create({
    container: {
        width: width * 0.7,
        height: width * 0.7,
    },

    dateContainer: {
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        padding: '2%',
        marginLeft: width * 0.03,
        marginTop: width * 0.03,
        borderRadius: 50
    },

    hostingContainer: {
        alignSelf: 'flex-end',
        marginTop: width * 0.48,
        backgroundColor: '#061729',
        height: width * 0.12,
        width: width * 0.33,
        justifyContent: 'center',
        alignItems: 'center',
    },

    hostingText: {
        color: 'white',
        fontWeight: 600,
        fontSize: width * 0.04
    }
})

