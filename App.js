import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NoteInfo from "./NoteInfo"
import AppHeader from "./AppHeader"
import Notes from './Notes';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <AppHeader/>
        <NoteInfo />
        <Notes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flex: 1
  },
});
