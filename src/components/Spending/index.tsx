import React from 'react';
import { View, Text } from 'react-native';
import {ISpendingItem} from '../SpendingItem';

import styles from './styles';

export interface ISpending {
    spending_itens: Array<ISpendingItem>;
    numberDay: string;
    weekDay: string;
    id: number;
}

interface SpendingProps {
    spending: ISpending;
}

const Spending: React.FC<SpendingProps> = ({spending, children}) => {
 
    return ( 
        <View style={styles.container} >
                <View style={styles.dateSpendList} >
                    <Text style={styles.numberDay}>{spending.numberDay}</Text>    
                    <Text style={styles.weekDay}>{spending.weekDay}</Text>    
                </View>   

                {children}
    
        </View>
    );
}

export default Spending;