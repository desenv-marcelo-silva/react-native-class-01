import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Avatar, Name, Bio } from './styles';

import api from '../../services/api';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: [],
    };
  }

  async componentDidMount() {
    const user = this.getUserDataFromRoute();

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data });
  }

  getUserDataFromRoute() {
    const { route } = this.props;
    const { user } = route.params;
    return user;
  }

  render() {
    const { stars } = this.state;
    const user = this.getUserDataFromRoute();

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
      </Container>
    );
  }
}

User.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.shape().isRequired,
    }).isRequired,
  }).isRequired,
};
