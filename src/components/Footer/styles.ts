import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DCE4F0',
        flexDirection:'row',
        justifyContent:'space-between', 
        height: 170,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    itemTitle: {
        color: '#222222'
    },
    total: {
        color: '#9DADB8',
        fontSize: 25,
        padding: 25
    },
    currency: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
    amount: {
        fontWeight: 'bold',
        marginLeft: 5,
        fontSize: 30
    },
    itemPrice: {
        marginTop: 20,
        marginLeft: 20,
        padding: 10,
        flexDirection:"row",
    },
});

export default styles;