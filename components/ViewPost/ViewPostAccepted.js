import { Text, View, StyleSheet, Dimensions } from "react-native";
import RSVPButton from "./RSVPButton";
import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from "react";
import UserIcon from "../UserIcon";
import ActivitySection from "./ActivitySection";

const { width, height } = Dimensions.get('window')

// user display after accepting invite
const ViewPostAccepted = (props) => {
    const { post } = props;
    const [postUpdated, setPostUpdated] = useState({ accepted: [] });
    useEffect(() => {
        setPostUpdated(post);
        firestore()
            .collection('Posts')
            .doc(post.id)
            .get()
            .then((documentSnapshot) => {
                setPostUpdated(documentSnapshot.data());
            })
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.goingLabel}>{postUpdated.accepted.length} Going</Text>
            <View style={styles.iconsContainer}>
                {postUpdated.accepted.map((user, index) => {
                    return (
                        <View style={{ marginRight: width * 0.02 }} key={index}>
                            <UserIcon
                                colors={["#e69d9b", "#c0d0ee", "#d7a2bf"]}
                                initial={user.charAt(0).toUpperCase()}
                                dimension={width * 0.11}
                                onPress={() => { }}
                            />
                        </View>
                    )
                })}
            </View>
            <RSVPButton onPress={() => { }} icon={"👍"} text={"You're Going!"} pressed={true} />
            <Text style={styles.activityLabel}>Activity</Text>
            {postUpdated.accepted.map((user, index) => {
                return (
                    <ActivitySection user={user} key={index}/>
                )
            })}
        </View>
    )

}

export default ViewPostAccepted;

const styles = StyleSheet.create({
    container: {
        paddingTop: height * 0.04,
        paddingBottom: height * 0.1,
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
    },

    activityLabel: {
        fontSize: width * 0.05,
        marginTop: height * 0.05,
        fontWeight: 600,
        letterSpacing: 0.5,
        marginBottom: height * 0.02
    },

    goingLabel: {
        fontSize: width * 0.04,
    },

    iconsContainer: {
        flexDirection: 'row',
        marginBottom: height * 0.05,
        paddingTop: height * 0.01,
    }
})