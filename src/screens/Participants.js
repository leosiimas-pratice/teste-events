import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

class Participants extends Component {
  render() {
    let params = this.props.params;
    let participants = [];

    if (params !== undefined) {
      participants = (
        <FlatList
          data={this.props.params}
          keyExtractpr={item => `${item.id}`}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      );
    } else {
      participants = <Text>Não existe participantes para esse evento</Text>;
    }

    return <View style={styles.container}>{participants}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Participants;
