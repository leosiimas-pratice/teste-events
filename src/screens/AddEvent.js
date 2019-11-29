import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {addEvent} from '../store/actions/events';

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      title: '',
      text: '',
      type: '',
      date: '',
      createdBy: '',
    };
  };

  save = async () => {
    this.props.onAddEvent({
      title: this.state.title,
      text: this.state.text,
      type: this.state.type,
      date: this.state.date,
      createdBy: this.props.id,
      state: 'open',
    });

    this.setState = this.getInitialState();
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            placeholder="Titulo"
            style={styles.input}
            value={this.state.title}
            onChangeText={title => this.setState({title})}
          />
          <TextInput
            placeholder="Texto"
            style={styles.input}
            value={this.state.text}
            onChangeText={text => this.setState({text})}
            // eslint-disable-next-line react/jsx-no-comment-textnodes
          />
          // TODO alterar para que seja de selecionar
          <Text>Apenas chai ou friend</Text>
          <TextInput
            placeholder="Tipo"
            style={styles.input}
            value={this.state.type}
            onChangeText={type => this.setState({type})}
          />
          <TextInput
            placeholder="Data do Evento"
            style={styles.input}
            value={this.state.date}
            onChangeText={date => this.setState({date})}
          />
          <TouchableOpacity
            onPress={this.save}
            style={[
              styles.buttom,
              this.props.loading ? styles.buttonDisabled : null,
            ]}
            disable={this.props.loading}>
            <Text style={styles.buttomText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#DDD',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width / 2,
    resizeMode: 'center',
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  buttomText: {
    fontSize: 20,
    color: '#FFF',
  },
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  noUser: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#AAA',
  },
});

const mapStateToProps = ({user}) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddEvent: event => dispatch(addEvent(event)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddEvent);
