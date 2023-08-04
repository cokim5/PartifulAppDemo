import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ThemeButton from './ThemeButton';

const { width, height } = Dimensions.get('window')

// popup that allows user to switch between themes
const ThemesContainer = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Theme</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <ThemeButton
                    link='https://assets.getpartiful.com/backgrounds/champagne/thumbnail.png'
                    setBackground={props.setBackground}
                    setBackgroundText={props.setBackgroundText}
                    filePath={require('../../assets/createSparkling.gif')}
                    text={'Sparkling'}
                />

                <ThemeButton
                    link='https://assets.getpartiful.com/backgrounds/starburst/thumbnail.png'
                    setBackground={props.setBackground}
                    setBackgroundText={props.setBackgroundText}
                    filePath={require('../../assets/createPride.gif')}
                    text={'Pride'}
                />

                <ThemeButton
                    link='https://assets.getpartiful.com/backgrounds/pool/thumbnail.png'
                    setBackground={props.setBackground}
                    setBackgroundText={props.setBackgroundText}
                    filePath={require('../../assets/createPool.gif')}
                    text={'Pool'}
                />
            </View>
        </View>
    )
}

export default ThemesContainer;

const styles = StyleSheet.create({
    container: {
        height: height * 0.25,
        width: width,
        position: 'absolute',
        bottom: height * 0.08,
        backgroundColor: 'white',
        paddingLeft: width * 0.05,
    },

    labelContainer: {
        width: width,
        height: height * 0.04,
        fontWeight: 700,
        justifyContent: 'flex-end'
    },

    labelText: {
        fontWeight: 700,
        fontSize: 16
    }
})

