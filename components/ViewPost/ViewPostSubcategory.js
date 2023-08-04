import { StyleSheet } from "react-native";
import { View, Image, Text, Dimensions } from "react-native";
import UserIcon from "../UserIcon";

const { width, height } = Dimensions.get('window')

// individual host or location displays in ViewPost
const ViewPostSubcategory = (props) => {

    return (
        <View style={styles.metadataContainer}>
            <Image source={props.image} style={styles.iconContainer} />
            <Text style={styles.lowOpacityText}>{props.text}</Text>
            {props.type === 'host' ?
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <UserIcon
                        colors={["#e69d9b", "#c0d0ee", "#d7a2bf"]}
                        initial={props.host.charAt(0)}
                        dimension={width * 0.12}
                        onPress={() => { }} />
                    <Image source={require('../../assets/crownSolid.png')}
                        style={styles.hostCrown} />
                    <Text style={styles.hostText}>{props.host}</Text>
                </View>
                :
                <></>
            }
        </View>
    )
}

export default ViewPostSubcategory;

const styles = StyleSheet.create({
    iconContainer: {
        width: width * 0.05,
        resizeMode: 'contain',
        height: width * 0.05,
        tintColor: 'black',
        opacity: 0.3
    },

    metadataContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 0.02
    },

    lowOpacityText: {
        opacity: 0.4,
        marginLeft: width * 0.03,
        fontSize: width * 0.05
    },

    hostText: {
        fontSize: width * 0.05,
        fontWeight: 500,
        marginLeft: width * 0.02
    },

    hostCrown: {
        width: width * 0.06,
        height: width * 0.06,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        tintColor: '#5938e8',
        marginLeft: width * -0.05,
        marginBottom: width * -0.01,
    }
})