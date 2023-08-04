import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ViewPostSubcategory from './ViewPostSubcategory';

const { width, height } = Dimensions.get('window')

// container for metadata: date, host, location, description for viewing post
const ViewPostMetadata = (props) => {
    const { post } = props;

    return (
        <View style={styles.infoContainer}>
            <Text style={styles.date}>{post.date}</Text>
            <ViewPostSubcategory
                type={'host'}
                text={"Hosted by "}
                host={post.host}
                image={require('../../assets/crown.png')}
            />
            <ViewPostSubcategory
                type={'location'}
                text={post.address}
                image={require('../../assets/location.png')}
            />
            <Text style={styles.description}>{post.description}</Text>
        </View>
    )
}

export default ViewPostMetadata;

const styles = StyleSheet.create({
    infoContainer: {
        width: width * 0.85,
        alignSelf: 'center',
    },

    date: {
        fontSize: width * 0.08,
    },

    description: {
        opacity: 0.4,
        marginTop: height * 0.02,
        fontSize: width * 0.05,
    },
})
