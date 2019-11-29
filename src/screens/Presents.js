import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

class PresentsSecret extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.presents}
          keyExtractpr={item => `${item.id}`}
          renderItem={({item}) => (
            <Text>
              {item.name}
              {item.suggestion}
            </Text>
          )}
        />
        <ActionButton
          buttonColor="#1abc9c"
          title="All Tasks"
          onPress={() => {}}>
          <Icon name="md-done-all" style={styles.actionButtonIcon} />
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({presents}) => {
  return {
    presents: presents.presents,
  };
};

export default connect(mapStateToProps)(PresentsSecret);
