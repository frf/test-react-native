import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },
    containerLine: {
        flexDirection:"row",
        marginTop: 20,
        marginLeft: 32,
    },  
    containerLineBox: {
        flexDirection:"row",
        marginTop: 20,
        marginLeft: 32,
        marginRight: 32,
        justifyContent:'flex-start', 
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#CCD6E5",
        borderRadius: 8,
        padding: 20
    },
    titleLine: {
        marginTop: 3,
        marginLeft: 10
    }, 
    subTitle: {
        marginTop: 3,
        marginLeft: 10,
    },
    dateTitleText: {
        fontSize: 22,
        fontWeight: 'bold',
        color:'#566475'
    },  
    dateTitleTextRefund: {
        fontSize: 22,
        fontWeight: 'bold',
        color:'#09D261'
    },
    itemTitle: {
        marginBottom: 10,
        color: '#222222',
    }, 
    itemTitleTitle: {
        color: '#222222',
        fontSize: 25,
    },
    itemTitleSub: {
        flexDirection: 'row',
    },
    itemTitleSubTitle: {
        color: '#0F3A57',
        fontSize: 20,
        marginTop: 5
    },
    itemTitleSubTitleOverride: {
        fontWeight: 'bold'
    },
    itemTitleIcon: {
        color: '#9DADB8',
        fontSize: 15,
        marginTop: 5,
        marginRight: 10
    },
    itemIconBox: {
        color: '#9DADB8',
        fontSize: 15,
        marginTop: 10,
        marginRight: 10,
    },
    itemTitleIconBox: {
        color: '#9DADB8',
        fontSize: 15,
        marginTop: 20,
        marginRight: 10
    },
    refreshIcon: {
        marginTop: 5
    },
    itemSubTitleIcon: {
        color: '#566475',
        fontSize: 15,
        marginTop: 5,
    },
    column: {
        flexDirection: 'column',
    },
    containerLineImage: {
        flexDirection:"row",
        marginTop: 20,
        marginLeft: 32,
        marginRight: 32,
        justifyContent: 'center', 
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#CCD6E5",
        borderRadius: 8,
        padding: 20,
           
    }, 
    image: {
        borderRadius: 8,
        resizeMode: 'contain',
    }
});

export default styles;
