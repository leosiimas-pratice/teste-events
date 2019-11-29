import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../store/actions/user';

import {StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native';

class Header extends Component {
  logout = () => {
    this.props.onLogout();
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.logout}>
          <Text>Sair</Text>
        </TouchableOpacity>
        <Text>{this.props.user.name}</Text>
        <Text>{this.props.user.email}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>Eventos</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    height: 35,
    fontSize: 28,
  },
});

const mapStateToProps = ({user}) => {
  return {
    email: user.email,
    name: user.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
