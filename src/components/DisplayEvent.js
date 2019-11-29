import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class DisplayEvent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.text}>{this.props.text}</Text>
        <Text style={styles.dateTitle}>
          Data: <Text style={styles.dateText}>{this.props.date}</Text>
        </Text>
        <Text style={styles.createdByTitle}>
          Criado Por:{' '}
          <Text style={styles.createdByText}>{this.props.createdBy}</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
});

export default DisplayEvent;
