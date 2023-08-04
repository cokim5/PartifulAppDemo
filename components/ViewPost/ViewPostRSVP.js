import { View, StyleSheet, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import RSVPButton from "./RSVPButton";
import ViewPostAccepted from "./ViewPostAccepted";

const { width, height } = Dimensions.get('window')

// the clickable i'm going or can't go buttons in ViewPost
const ViewPostRSVP = (props) => {
    const { post, user } = props;
    const [vote, setVote] = useState('');

    useEffect(() => {
        if (post.rejected.includes(user.username)) {
            setVote('rejected');
        }
        if (post.accepted.includes(user.username)) {
            setVote('accepted');
        }
    }, [])

    // adds user to accepted in firebase and sets vote state var
    const goingButtonPressed = () => {
        setVote('accepted');
        firestore().collection('Posts').doc(post.id).update({ accepted: firestore.FieldValue.arrayUnion(user.username) });
    }

    // adds user to rejected in firebase and sets vote state var
    const cantGoButtonPressed = () => {
        setVote('rejected');
        firestore().collection('Posts').doc(post.id).update({ rejected: firestore.FieldValue.arrayUnion(user.username) });
    }

    if (vote === 'accepted') {
        return (<ViewPostAccepted post={post} />)
    }

    if (vote === 'rejected') {
        return (
            <View style={styles.container}>
                <RSVPButton onPress={() => { }} icon={"😢"} text={"Can't Go"} pressed={true} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <RSVPButton onPress={() => goingButtonPressed()} icon={"👍"} text={"I'm Going"} pressed={false} />
            <RSVPButton onPress={() => cantGoButtonPressed()} icon={"😢"} text={"Can't Go"} pressed={false} />
        </View>
    )
}

export default ViewPostRSVP;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: height * 0.3,
        marginTop: height * 0.03,
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: height * 0.03,
    },
})