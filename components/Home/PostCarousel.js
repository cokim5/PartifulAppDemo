import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import Category from './Category';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'
import CaroselItem from './CaroselItem';

const { width, height } = Dimensions.get('window')

// holds the horizontally scrollable posts on home page
const PostCarousel = (props) => {
    const navigation = useNavigation();
    const [categorySelected, setCategorySelected] = useState('Upcoming');
    const [posts, setPosts] = useState([]);
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const [hostingPosts, setHostingPosts] = useState([]);

    const [loading, setLoading] = useState(true);

    const navToCreate = () => {
        navigation.navigate('CreatePost', { user: props.user });
    }

    // updates the posts arrays
    useEffect(() => {
        // query for posts where user is invited
        const subscriber = firestore()
            .collection('Posts')
            .where('invited', 'array-contains', props.user.username.toUpperCase())
            .onSnapshot(
                (querySnapshot) => {
                    const postsArr = [];
                    // found that on initial load, querySnapshot was not loading, causing posts to not load
                    // fixed by adding refreshTrigger to re-run useEffect if querySnapshot isn't loaded yet
                    if (querySnapshot._changes.length === 0) {
                        setRefreshTrigger(refreshTrigger + 1);
                    }

                    // adds docs to temp postsArr
                    querySnapshot.forEach(documentSnapshot => {
                        let data = documentSnapshot.data();
                        data.id = documentSnapshot.id;
                        if (!postsArr.includes(data)) {
                            postsArr.push(data);
                        }
                    })

                    // update posts useState var if posts are updated
                    props.setEventCount(postsArr.length);
                    postsArr.push({ create: 'create', id: 'id', host: props.user.username });
                    setPosts(postsArr);
                    // gets all of the posts for the hosting category
                    let hostsPosts = [];
                    postsArr.forEach((post) => {
                        if (post.host === props.user.username) {
                            hostsPosts.push(post);
                        }
                    })
                    setHostingPosts(hostsPosts);
                    setLoading(false);

                },
                (error) => {
                    console.log("Error fetching data: ", error);
                    setLoading(false);
                }
            );

        return () => subscriber();
    }, [refreshTrigger]);

    // conditionally renders item in carosel
    const renderItem = ({ item }) => {
        if (item.id === 'id') {
            return (
                <TouchableOpacity onPress={() => navToCreate()} style={styles.createPostContainer}>
                    <Text style={styles.createPostText}>+ NEW EVENT</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <CaroselItem item={item} user={props.user} />
            )
        }
    }

    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <View style={styles.container}>
            <View style={{ marginBottom: height * 0.02 }}>
                <Category onPress={setCategorySelected} selected={categorySelected} />
            </View>

            <View style={styles.horizontalContainer}>
                <FlatList
                    data={categorySelected === 'Hosting' ? hostingPosts : posts}
                    keyExtractor={item => item.id}
                    horizontal
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

export default PostCarousel;

const styles = StyleSheet.create({
    container: {
        height: height * 0.6,
        marginTop: height * 0.03,
    },

    createPostContainer: {
        borderColor: 'grey',
        width: width * 0.7,
        height: width * 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'dashed',
        borderWidth: 2.5
    },

    createPostText: {
        color: 'grey',
        fontWeight: 700,
        fontSize: 16
    },

    horizontalContainer: {
        flexDirection: 'column'
    }
})