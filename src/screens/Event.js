import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Tabs from '../components/Tabs';

import Participants from './Participants';
import PresentsChai from './PresentsChai';
import Chat from './Chat';
import PresentsSecret from './Presents';

class Event extends Component {
  constructor() {
    super();
    this.state = {
      body: <Participants />,
    };
    this.updateBody = this.updateBody.bind(this);
  }

  updateBody(body) {
    this.setState({body});
  }

  render() {
    const params = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.title}>{params.title}</Text>
          <Text style={styles.text}>{params.text}</Text>
          <Text style={styles.dateTitle}>
            Data: <Text style={styles.dateText}>{params.date}</Text>
          </Text>
          <Text style={styles.createdByTitle}>
            Criado Por:{' '}
            <Text style={styles.createdByText}>{params.createdBy}</Text>
          </Text>
        </View>
        <View style={styles.body}>
          <Tabs />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    flex: 1,
    backgroundColor: '#66c2ff',
    margin: 5,
    padding: 15,
    borderRadius: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  text: {
    fontSize: 18,
  },
  dateTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  dateText: {
    fontWeight: 'normal',
  },
  createdByTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  createdByText: {
    fontWeight: 'normal',
    fontSize: 15,
  },
  body: {
    flex: 4,
  },
  tabNavigator: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    height: 30,
  },
});

export default Event;
