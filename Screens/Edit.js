import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './Styles';
import CardButton from '../Components/CardButton';
import CardInput from '../Components/CardInput';

export default class Add extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    listItems: {
      title: this.props.navigation.getParam('data').title,
      desc: this.props.navigation.getParam('data').desc,
    },
  };

  onChangeTitle = text => {
    this.setState({
      listItems: {
        title: text,
        desc: this.state.listItems.desc,
      },
    });
  };
  onChangeDesc = text => {
    this.setState({
      listItems: {
        title: this.state.listItems.title,
        desc: text,
      },
    });
  };

  onEdit = () => {
    this.props.navigation.state.params.editItem(
      this.state.listItems,
      this.props.navigation.getParam('indexNo')
    );
    this.props.navigation.navigate('Main');
  };
  onDelete = () => {
    this.props.navigation.state.params.deleteItem(
      this.props.navigation.getParam('indexNo')
    );
    this.props.navigation.navigate('Main');
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View>
            <Text style={styles.appTitle}>Edit</Text>

            <CardInput
              style={styles.input}
              changeText={this.onChangeTitle}
              value={this.state.listItems.title}
            />
            <CardInput
              placeholder="Description"
              style={styles.inputDesc}
              changeText={this.onChangeDesc}
              value={this.state.listItems.desc}
              multiline="true"
            />
          </View>

          <View>
            <CardButton
              name="Delete"
              style={styles.cardButtonDelete}
              func={this.onDelete}
            />
            <CardButton
              name="Done"
              style={styles.cardButton}
              func={this.onEdit}
            />
            <View style={{ padding: 10 }} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
