import React, { Component } from 'react';
import { Button } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    users: [],
  };

  handleNavigate = user => {
    this.props.navigation.navigate('User', { user });
  };

  render() {
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
          />
          <SubmitButton>
            <Icon name="add" size={20} color="#FFF" />
          </SubmitButton>
        </Form>
        <Button
          title="Acessar página Users"
          onPress={() => handleNavigate({ id: 1, name: 'Marcelo' })}
        />
      </Container>
    );
  }
}
