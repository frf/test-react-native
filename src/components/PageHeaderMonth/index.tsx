import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles'; 
import backIcon from '../../assets/images/icons/back.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
}

const PageHeaderMonth: React.FC<PageHeaderProps> = ({title, children, headerRight}) => {

    const {navigate} = useNavigation();

    function handleGoBack() {
        navigate('SpendingPage');
    }

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>

            {children}
        </View>
    );
}

export default PageHeaderMonth;