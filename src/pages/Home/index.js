import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance/Index';
import Movements from '../../components/Movements/Index';
import Actions from '../../components/Actions/Index';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,50',
    date: '17/09/2022',
    type: 0, // despesas
  },
  {
    id: 2,
    label: 'PIX Cliente x',
    value: '300,50',
    date: '23/02/2022',
    type: 1, // receita / entradas
  },
  {
    id: 3,
    label: 'salário',
    value: '60.000,00',
    date: '13/03/2022',
    type: 1, // receita / entradas
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Header name="Arthur Silvestre de Mello Moreira" />

      <Balance saldo="9.250,90" gastos="-527,00" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },

  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
