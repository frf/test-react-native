import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles'; 

interface IProp {
    total: string;
    currency: string;
}

const Footer: React.FC<IProp> = ({total}) => {
    return (
        <View style={styles.container} >
            <View style={styles.itemTitle} >
                <Text style={styles.total}>TOTAL</Text>    
            </View> 
            <View style={styles.itemPrice} >
                <Text style={styles.currency}>R$</Text>    
                <Text style={styles.amount}>490,00</Text>    
            </View> 
        </View>
    );
}

export default Footer;