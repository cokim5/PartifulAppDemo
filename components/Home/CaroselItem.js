import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CaroselItemImage from "./CaroselItemImage";
import CaroselItemMetadata from "./CaroselItemMetadata";

const { width, height } = Dimensions.get('window')

// individual, clickable item in the post carosel
const CaroselItem = (props) => {
    const navigation = useNavigation();

    // checks if user is the host, if true triggers the hosting label to appear
    let isHost = false;
    if (props.item.host === props.user.username) {
        isHost = true;
    }

    const navToPost = () => {
        console.log('pressed');
        navigation.navigate('ViewPost', { user: props.user, post: props.item })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => navToPost()}>
            <CaroselItemImage isHost={isHost} item={props.item}/>
            <CaroselItemMetadata item={props.item}/>
        </TouchableOpacity>
    )
}

export default CaroselItem;

const styles = StyleSheet.create({
    container: {
        width: width * 0.7,
        height: height * 0.5,
        marginRight: width * 0.05,
    },

    title: {
        color: 'white',
        fontWeight: 700,
        fontSize: 20
    },

    subDataContainerTop: {
        height: width * 0.09,
        justifyContent: 'flex-end',
    },

    subDataContainerBottom: {
        height: width * 0.06,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height * 0.01
    },
})

