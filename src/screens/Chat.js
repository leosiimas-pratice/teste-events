import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Chat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.messages}
          keyExtractpr={item => `${item.id}`}
          renderItem={({item}) => (
            <Text>
              {item.name}
              {item.message}
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({messages}) => {
  return {
    messages: messages.messages,
  };
};

export default connect(mapStateToProps)(Chat);
