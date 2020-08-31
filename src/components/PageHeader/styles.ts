import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#DCE4F0',
        height: 190,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 4.46,
        elevation: 9,
    },
    back: {
        marginTop: 50,
        padding: 10,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemPrice: {
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    currency: {
        marginBottom: 10,
        fontSize: 20,
        color: '#566475',
        marginRight: 5,
        fontWeight: 'bold',
    },
    amount: {
        fontSize: 50,
        color: '#566475',
        fontWeight: 'bold',
        lineHeight: 65
    }
});

export default styles;