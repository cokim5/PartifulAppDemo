import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import DropdownSection from './DropdownSection';
import { useContext } from 'react';
import { AuthContext } from '../../navigation/AuthProvider';
import UserIcon from '../UserIcon';
import { BlurView } from '@react-native-community/blur';

const { width, height } = Dimensions.get('window')

// dropdown that appears from profile component
const Dropdown = (props) => {
    const { logout } = useContext(AuthContext);
    const { darkPage } = props;
    const blurType = darkPage ? "dark" : "light";

    return (
        <View style={styles.dropdownContainer}>
            <BlurView
                blurType={blurType}
                blurAmount={40}
            >
                <TouchableOpacity>
                    <View style={styles.profileContainer}>

                        <UserIcon
                            colors={['#6fdc99', '#9aaabc', '#e0e9a2']}
                            initial={props.firstChar}
                            dimension={height * 0.08}
                            onPress={() => {}}
                        />

                        <View style={styles.userContainer}>
                            <Text style={darkPage ?
                                [{ color: 'white' }, styles.usernameText]
                                :
                                [{ color: 'black' }, styles.usernameText]}>
                                {props.username}
                            </Text>
                            <Text style={{ color: 'grey' }}>See your profile</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <DropdownSection category={'Mutuals'} darkPage={darkPage} />
                <DropdownSection category={'Log Out'} onPress={logout} darkPage={darkPage}/>
            </BlurView>
        </View>
    )
}

const styles = StyleSheet.create({
    dropdownContainer: {
        position: 'absolute',
        height: height * 0.3,
        width: width * 0.8,
    },

    profileContainer: {
        height: height * 0.11,
        borderBottomWidth: 0.5,
        marginHorizontal: width * 0.05,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
    },

    userContainer: {
        marginLeft: width * 0.05,
    },

    usernameText: {
        fontWeight: 600,
        fontSize: width * 0.04,
        marginBottom: 4,
    },
})

export default Dropdown;