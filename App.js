import React, { Component } from "react";
import { Text, View, Image, Button, StyleSheet, ScrollView, FlatList, ViewComponent } from "react-native";
import Pessoa from "./src/components/Pessoa";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { nome: 'Devair', idade: 30, time: 'Vasco' },
        { nome: 'Isabela', idade: 27, time: 'florminenC' },
        { nome: 'Lucas', idade: 30, time: 'framengo' },
        { nome: 'Vitor', idade: 24, time: 'bostafogo' },
        { nome: 'André', idade: 34, time: 'São Paulo' },
      ]
    };
  }

  render() {

    return (
      <View style={styles.main}>

        <FlatList
          data={this.state.feed}
          renderItem={({ item }) => <Pessoa propriedade={item} />}
          showsVerticalScrollIndicator={false}
        />

      </View>
    );
  }

}

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  text: {
    color: 'white'
  }
})