import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginTop: 30,
        marginRight: 30,
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#566475',
        fontSize: 32,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default styles;