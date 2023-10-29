import React, { Component } from "react";
import { Text, View, Image, Button, StyleSheet, ScrollView, FlatList, ViewComponent } from "react-native";

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

class Pessoa extends Component {
  render() {
    return (
      <View>
        <View style={styles.fundo}>
          <Text style={styles.pessoa}> {this.props.propriedade.nome} </Text>
          {/* antes se utilizava this.state, que mudou para this.props.propriedade.nome */}
          <Text style={styles.pessoa}> {this.props.propriedade.idade} </Text>
          <Text style={styles.pessoa}> {this.props.propriedade.time}</Text>
          {/* <Text style={styles.text}>********</Text> */}
        </View>
        {/* <View style={styles.fundo}>
          <Text style={styles.pessoa}> {this.props.propriedade.idade} </Text>
        </View> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  text: {
    color: 'white'
  },
  fundo: {
    backgroundColor: 'red',
    height: 250,
    marginBottom: 15
  },
  pessoa: {
    color: 'white',
    fontSize: 20
  }
})