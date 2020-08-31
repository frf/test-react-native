import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
    const { navigate } = useNavigation();

    function handleNavigareToRefundPage() {
        navigate('Refund');
    }
    
    return ( 
        <View style={styles.container} >
            <TouchableOpacity onPress={() => { handleNavigareToRefundPage() }}>
                <View style={styles.dateSpendList} >
                    <Text style={styles.numberDay}>{spending.numberDay}</Text>    
                    <Text style={styles.weekDay}>{spending.weekDay}</Text>    
                </View>   

                {children}
            </TouchableOpacity>
        </View>
    );
}

export default Spending;