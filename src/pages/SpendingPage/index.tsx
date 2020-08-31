import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Spendig, {ISpending} from '../../components/Spending';
import SpendingItem, {ISpendingItem} from '../../components/SpendingItem';
import Footer from '../../components/Footer';
import DataJson from '../../assets/data.json';
import PageHeaderMonth from '../../components/PageHeaderMonth';
import styles from './styles';

function SpendingPage() {
  const { navigate } = useNavigation();
  const [spendings, setSpending] = useState(DataJson);

  function loadingSpending() {
    // api.get('connections')
    // .then(response => {
    //   const { total } = response.data;
    //   setTotalSpending(total);
    // })
    console.log(spendings);
  }

  useFocusEffect(() => {
    loadingSpending();
  })

  function handleNavigareToRefundPage() {
    navigate('Refund');
  }


  return (
    <View style={styles.container} >
      <PageHeaderMonth title="Setembro" 
        headerRight={(
            <BorderlessButton >
                <Feather name="search" size={26} color="#566475" />
            </BorderlessButton>
        )}>
      </PageHeaderMonth>
      <ScrollView>
            {spendings.map((spending: ISpending) => {
              return (
                  <Spendig key={spending.id} spending={spending}>
                    {
                      spending.spending_itens.map((spendItem: ISpendingItem) => {
                        return (
                          <SpendingItem spending={spendItem} />
                        )
                      })
                    }
                  </Spendig>
                )
              })
            }     
        </ScrollView>
        <Footer total={'490,00'} currency={'R$'}/>
    </View>
  );
}

export default SpendingPage;