import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles'; 
import backIcon from '../../assets/images/icons/back.png';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

interface PageHeaderProps {
    amount: string;
    currency: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({amount, currency}) => {

    const {navigate} = useNavigation();

    function handleGoBack() {
        navigate('SpendingPage');
    }

    return (
        <View style={styles.container} >
           <View style={styles.topBar} >
                <BorderlessButton style={styles.back} onPress={handleGoBack}>
                    <Feather name="arrow-left" size={25} color="#566475" />
                </BorderlessButton>
                <BorderlessButton style={styles.back} onPress={handleGoBack}>
                    <Feather name="edit-2" size={25} color="#566475" />
                </BorderlessButton>
           </View>

           <View style={styles.itemPrice} >
                <Text style={styles.currency}>{currency}</Text>    
                <Text style={styles.amount}>{amount}</Text>    
            </View> 
        </View>
    );
}

export default PageHeader;