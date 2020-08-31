import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Spendig, {ISpending} from '../../components/Spending';
import SpendingItem, {ISpendingItem} from '../../components/SpendingItem';
import Footer from '../../components/Footer';
import DataJson from '../../assets/data.json';
import PageHeaderMonth from '../../components/PageHeaderMonth';
import api from '../../services/api';

import styles from './styles';

function SpendingPage() {
  const [spendings, setSpending] = useState(DataJson);

  function loadingSpending() {
    api.get('api/spendings')
    .then(response => {
      setSpending(response.data);
    })
  }

  useFocusEffect(() => {
    loadingSpending(); //
  })

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
                          <SpendingItem key={spendItem.id + spending.id}  spending={spendItem} />
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