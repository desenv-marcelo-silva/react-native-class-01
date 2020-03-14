import React from 'react';
import { Text, Button } from 'react-native';

import { Container } from './styles';

export default function Main({ navigation }) {
  function handleNavigate(user) {
    navigation.navigate('User', { user });
  }

  return (
    <Container>
      <Text>Primeira página</Text>
      <Button
        title="Acessar página Users"
        onPress={() => handleNavigate({ id: 1, name: 'Marcelo' })}
      />
    </Container>
  );
}
