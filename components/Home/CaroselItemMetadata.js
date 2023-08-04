import { StyleSheet, Text, Dimensions, View } from "react-native";
import UserIcon from "../UserIcon";

const { width, height } = Dimensions.get('window')

// the metadata below a carosel item
const CaroselItemMetadata = (props) => {
    return (
            <View>
                <View style={styles.containerTop}>
                    <Text style={styles.title}>{props.item.title}</Text>
                </View>
                <View style={styles.containerBottom}>
                    <Text style={{ color: 'white' }}>Hosted by </Text>
                    <UserIcon
                        colors={["#e69d9b", "#c0d0ee", "#d7a2bf"]}
                        initial={props.item.host.charAt(0).toUpperCase()}
                        dimension={width * 0.07}
                        onPress={() => { }}
                    />
                    <Text style={{color: 'white'}}> {props.item.host}</Text>
                </View>
            </View>
    )
}

export default CaroselItemMetadata;

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontWeight: 700,
        fontSize: 20
    },

    containerTop: {
        height: width * 0.09,
        justifyContent: 'flex-end',
    },

    containerBottom: {
        height: width * 0.06,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height * 0.01
    },
})

