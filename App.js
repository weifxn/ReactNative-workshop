import React from 'react';
import main from 'Screens/Main';
import edit from 'Screens/Edit';
import add from 'Screens/Add';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Main: main,
    Add: add,
    Edit: edit
  },
  {
    initialRouteName: 'Main',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}