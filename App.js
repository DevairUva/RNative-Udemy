import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      pizza: 0,
      pizzas:[
        {key: 1, nome: 'frango', preco: 30},
        {key: 2, nome: 'carne', preco: 40},
        {key: 2, nome: 'calabresa', preco: 50},
      ]
    }
  }

  render(){

    let pizzasItem = this.state.pizzas.map( (v, k) =>{
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Menu Pizza</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={ (itemValue, itemIndex )=> this.setState({pizza: itemValue})}
        >
          {pizzasItem}
        </Picker>

        <Text style={styles.textos}>Pizza: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.textos}>R$ {this.state.pizzas[this.state.pizza].preco.toFixed(2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 45,
    color: 'black',
    textAlign: 'center'
  },
  textos:{
    fontSize: 30,
    color: 'black',
    textAlign: 'center'
  }
})