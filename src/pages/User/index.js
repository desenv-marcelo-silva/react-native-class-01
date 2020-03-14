import React from 'react';
import { View, Text, Button } from 'react-native';
// import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function User({ navigation }) {
  return (
    <View>
      <Text>Usuário</Text>
      <Button title="Main" onPress={() => navigation.navigate('Main')} />
      <Button title="Usando voltar" onPress={() => navigation.goBack()} />
      <Button
        title="Ir para a primeira página"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
