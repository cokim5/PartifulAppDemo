import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Dimensions, Image, Linking } from 'react-native';
import { useState } from 'react';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import Dropdown from './Dropdown';
import UserIcon from '../UserIcon';
import TopBarButton from './TopBarButton';

const { width, height } = Dimensions.get('window')

// top bar component of all screens
const TopBar = (props) => {
    const navigation = useNavigation();
    const firstChar = props.username.charAt(0).toUpperCase();
    const [showDropdown, setShowDropdown] = useState(false);
    const { darkPage } = props;

    // method to open feedback browser
    const feedbackButton = async () => {
        try {
            const isAvailable = await InAppBrowser.isAvailable()
            const url = 'https://form.typeform.com/to/GNl4o8Mb?typeform-embed-id=07249934666778013&typeform-embed=popup-drawer&typeform-source=partiful.com&typeform-medium=embed-sdk&typeform-medium-version=next#fullstory_session_url=none&user_id=IfVlaBN1RAa4o3evTPol658M6qj2'
            if (isAvailable) {
                InAppBrowser.open(url, {
                    dismissButtonStyle: 'cancel',
                    preferredBarTintColor: 'white',
                    preferredControlTintColor: '#5938e8',
                });
            } else {
                Linking.openURL(url)
            }
        } catch (error) {
            Alert.alert(error.message)
        }
    }

    const profileButtonClicked = () => {
        setShowDropdown(!showDropdown);
    }

    const navHome = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.topBar}>
            <Image
                style={darkPage ? styles.logo : [{tintColor: 'black'}, styles.logo]}
                source={require('../../assets/partifulP.png')}
            />
            <TopBarButton onPress={() => feedbackButton()} text={"+FEEDBACK"} darkPage={darkPage} />
            <TopBarButton onPress={() => navHome()} text={"EVENTS"} darkPage={darkPage} />
            <UserIcon
                colors={['#6fdc99', '#9aaabc', '#e0e9a2']}
                onPress={() => profileButtonClicked()}
                initial={firstChar}
                dimension={height * 0.05}
            />
            {showDropdown ?
                <View style={styles.dropdownContainer}>
                    <Dropdown username={props.username} firstChar={firstChar} darkPage={darkPage}/>
                </View>
                :
                <></>
            }
        </View>
    )
}

export default TopBar;

const styles = StyleSheet.create({
    topBar: {
        width: width,
        height: height * 0.06,
        marginTop: height * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: width * -0.03, // offsets the padding on each page

    },

    logo: {
        resizeMode: 'contain',
        height: height * 0.04,
        width: height * 0.04,
        justifyContent: 'flex-start',
    },

    dropdownContainer: {
        position: 'absolute',
        height: height * 0.3,
        width: width * 0.8,
        right: width * 0.02,
        top: height * 0.06,
    },

})

