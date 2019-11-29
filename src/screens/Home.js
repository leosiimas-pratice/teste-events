import React, {Component} from 'react';
import {StyleSheet, FlatList, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import {fetchEvents} from '../store/actions/events';

import DisplayEvent from '../components/DisplayEvent';
import Header from '../components/Header';

class Home extends Component {
  componentDidMount = () => {
    console.log('Iniciando o FETCH EVENTS');
    this.props.onFetchEvents(this.props.user);
  };

  render() {
    console.log(this.props.events);

    return (
      <View style={styles.container}>
        <Header user={this.props.user} navigation={this.props.navigation} />
        <FlatList
          data={this.props.events}
          keyExtractpr={item => `${item.id}`}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Event', {...item})
              }>
              <DisplayEvent key={item.id} {...item} />
            </TouchableOpacity>
          )}
        />
        <ActionButton
          buttonColor="#1abc9c"
          title="All Tasks"
          onPress={() => {
            this.props.navigation.navigate('AddEvent', this.props.user);
          }}>
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

const mapStateToProps = ({events, user}) => {
  return {
    events: events.events,
    user: user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchEvents: user => dispatch(fetchEvents(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
