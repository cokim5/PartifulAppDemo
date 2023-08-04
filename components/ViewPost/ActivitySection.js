import { Text, View, StyleSheet, Dimensions } from "react-native";
import UserIcon from "../UserIcon";

const { width, height } = Dimensions.get('window');

// activity section of viewPost screen
const ActivitySection = (props) => {
    const { user } = props;
    return (
        <View style={styles.container}>
            <UserIcon
                colors={["#e69d9b", "#c0d0ee", "#d7a2bf"]}
                initial={user.charAt(0).toUpperCase()}
                dimension={width * 0.11}
                onPress={() => { }}
            />
            <Text style={styles.username}>{user} </Text>
            <Text style={styles.rsvped}> rsvped </Text>
            <Text style={{fontSize: width * 0.04}}>Going 👍</Text>
        </View>
    )
}

export default ActivitySection;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.01
    },

    username: {
        color: '#5938e8',
        marginLeft: width * 0.03,
        fontSize: width * 0.04,
    },

    rsvped: {
        color: '#5A5A5A',
        fontSize: width * 0.04,
    }
})