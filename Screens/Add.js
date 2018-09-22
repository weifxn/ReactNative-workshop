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
      title: '',
      desc: '',
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

  onAdd = () => {
    if(this.state.listItems.title !== '') {
      this.props.navigation.state.params.addItem(this.state.listItems);
    }
    this.props.navigation.navigate('Main');
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View>
            <Text style={styles.appTitle}>Add</Text>
            <CardInput
              style={styles.input}
              placeholder="Title"
              changeText={this.onChangeTitle}
              value={this.state.listItems.title}
            />

            <CardInput
              style={styles.inputDesc}
              placeholder="Description"
              changeText={this.onChangeDesc}
              value={this.state.listItems.desc}
              multiline="true"
            />
          </View>

          <View>
            <CardButton
              name="Done"
              style={styles.cardButton}
              func={this.onAdd}
            />
            <View style={{ padding: 10 }} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
