import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  ListView,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import CardButton from '../Components/CardButton';
import styles from './Styles';

export default class Main extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    listData: [],
  };

  componentDidMount = () => {
    AsyncStorage.getItem('storage').then(itemsJSON => {
      if (itemsJSON !== null) {
        this.setState({
          listData: JSON.parse(itemsJSON),
        });
      }
    });
  };
  save = item => {
    AsyncStorage.setItem('storage', JSON.stringify(item));
  };

  addItem = data => {
    const arr = [data, ...this.state.listData];
    this.setState({
      listData: arr,
    });
    this.save(arr);
  };
  deleteItem = index => {
    this.state.listData.splice(index, 1);
    this.setState({
      listData: [...this.state.listData],
    });
    this.save(this.state.listData);
  };
  editItem = (data, index) => {
    const arr = this.state.listData;
    arr[index] = data;
    this.setState({
      listData: arr,
    });
    this.save(arr);
  };

  onPressAdd = () => {
    this.props.navigation.navigate('Add', {
      addItem: this.addItem,
    });
  };
  onPressEdit = index => {
    this.props.navigation.navigate('Edit', {
      editItem: this.editItem,
      deleteItem: this.deleteItem,
      data: this.state.listData[index],
      indexNo: index,
    });
  };

  renderList = ({ item, index }) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => this.onPressEdit(index)}>
        <View style={styles.item}>
          <Text style={[styles.itemText]}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.appTitle}>To Do List</Text>

        <FlatList
          extraData={this.state}
          data={this.state.listData}
          renderItem={this.renderList}
        />

        <CardButton
          name="Add"
          style={styles.cardButton}
          func={this.onPressAdd}
        />

        <View style={{ padding: 10 }} />
      </View>
    );
  }
}
