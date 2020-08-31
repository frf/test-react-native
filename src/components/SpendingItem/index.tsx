import React, { useState } from 'react';
import { View, Image, Text, Linking} from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export interface ISpendingItem {
    id: number;
    title: string;
    type: string;
    amount: string;
    currency: string;
    date: string;
    status: number;
    isRefund: number;
    companyRefund: string;
    dateTimeRefund: string;
}

interface SpendingItemProps {
    spending: ISpendingItem;
}

const SpendingItem: React.FC<SpendingItemProps> = ({spending}) => {

    const disableStyle = function(options: any, type: string) {
        if (type == 'price')
            return (spending.status == 1) ? options : styles.itemPriceDisabled
        if (type == 'title')
            return (spending.status == 1) ? options : [styles.itemPriceDisabled, styles.textLineThrough]
    }

    return ( 
        <View style={styles.container} >
            <View style={styles.itemTitle} >
                <Text style={disableStyle(styles.itemTitleTitle, 'title')}>{spending.title}</Text>    
                <View style={styles.itemTitleSub} >
                    <Text style={styles.itemTitleIcon}>
                        <Feather name="coffee" size={20} color="#9DADB8" />
                    </Text>    
                    <Text style={styles.itemTitleSubTitle}>{spending.type} </Text>    
                </View>
            </View>
            <View style={styles.itemPrice}>
                <Text style={styles.itemPriceIcon}>
                    <Feather name="refresh-ccw" size={20} color={(spending.status == 1) ? '#09D261' : '#9DADB8'} />    
                </Text>    
                <Text style={disableStyle(styles.itemPriceValue, 'price')}>{spending.amount}</Text>    
            </View> 
        </View>
    );
}

export default SpendingItem;