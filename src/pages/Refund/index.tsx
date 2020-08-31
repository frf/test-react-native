import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import PageHeader from '../../components/PageHeader';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import TicketImg from '../../assets/images/ticket.png';

function Refund() {
    const [spending, setSpending] = useState({
        id: 1,
        title: 'Almoço Restaurante',
        type: 'Alimentação',
        amount: '26,00',
        currency: 'R$',
        date: '14/09/19',
        status: 1,
        isRefund: 1,
        companyRefund: 'Contele Filial de Santos - SP ',
        dateTimeRefund: '14/09/19 - 13:50',
    });

    return ( 
        <View style={styles.container} >
            <PageHeader amount={spending.amount} currency={spending.currency} />

            <View style={styles.containerLine} >
                <View  >
                    <Feather name="calendar" size={30} color="#9DADB8" />
                </View>
                <View style={styles.titleLine}>
                    <Text style={styles.dateTitleText}>{spending.date}</Text>
                </View>
            </View>

            <View style={styles.containerLine} >
                <View style={styles.itemTitle} >
                    <Text style={styles.itemTitleTitle}>{spending.title}</Text>    
                    <View style={styles.itemTitleSub} >
                        <Text style={styles.itemTitleIcon}>
                            <Feather name="coffee" size={23} color="#9DADB8" />
                        </Text>    
                        <Text style={styles.itemTitleSubTitle}>{spending.type}</Text>    
                    </View>
                </View>
            </View>

            { spending.isRefund == 1 && (
            <View style={styles.containerLine} >
                <View style={styles.refreshIcon} >
                    <Feather name="refresh-ccw" size={20} color="#09D261" />   
                </View>
                <View style={styles.titleLine}>
                    <Text style={styles.dateTitleTextRefund}>
                        Reembolsavel
                    </Text>
                </View>
            </View>
                )
            }

            <View style={styles.containerLineBox} >
                <View style={styles.itemTitle} >
                    <View style={styles.itemTitleSub} >
                        <Text style={styles.itemIconBox}>
                            <Feather name="calendar" size={33} color="#9DADB8" />
                        </Text> 
                        <View style={{flexDirection: 'column'}} >
                            <Text style={[styles.itemTitleSubTitle,styles.itemTitleSubTitleOverride]}>{spending.companyRefund}</Text>    
                            <Text style={styles.itemSubTitleIcon}>{spending.dateTimeRefund}</Text>    
                        </View>   
                    </View>
                </View>
            </View>

            <View style={styles.containerLineImage} >
                <View>
                    <Image style={styles.image} source={TicketImg}/>
                </View>
            </View>
        </View>
    );
}

export default Refund;