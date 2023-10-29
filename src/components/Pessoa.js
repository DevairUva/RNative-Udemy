import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";

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

export default Pessoa;

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