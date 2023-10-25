import React, { Component } from "react";
import { View, Text, Image, Button, StyleSheet, TextInput} from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  input:{
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    color: 'black',
    padding: 10,
    fontSize: 30
  },
  texto:{
    fontSize: 40,
    color: 'pink'
  }
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: ""
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    if(texto.length>0){
      this.setState({nome: 'Bem vindo, '+texto});
    } else {
      this.setState({nome: ''});
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          underlineColorAndroid='transparent'
          onChangeText={this.pegaNome}
        />
        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

export default App;

// FLEXBOX
// return (
//   <View style={{
//     flex:1,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center'
//     }}>

//     <View style={{backgroundColor: 'red', height:50, width:50}}></View>
//     <View style={{backgroundColor: 'blue', height:50, width:50}}></View>
//     <View style={{backgroundColor: 'green', height:50, width:50}}></View>
//     <View style={{backgroundColor: 'gray', height:50, width:50}}></View>

//   </View>
// );

// TAMANHOS ***
// return (
  // Utilizamos Flex 1 para o style funcinar no tamanho total da tela
  // Podemos perceber que com as outras views, o fundo não aparece
  // <View style={{flex:1, backgroundColor: 'yellow'}}>

  {/* View 1 e 4 tem tamanhos fixos, já 2 e 3 utilizam o flex para se adequar */}
    {/* <View style={{backgroundColor: 'red', height:30}}>
      <Text style={{color: 'black', fontSize: 25}}>Texto</Text>
      <Text style={{color: 'black', fontSize: 25}}>Texto</Text>
      <Text style={{color: 'black', fontSize: 25}}>Texto</Text>
      <Text style={{color: 'black', fontSize: 25}}>Texto</Text>
      <Text style={{color: 'black', fontSize: 25}}>Texto</Text>
      <Text style={{color: 'black', fontSize: 25}}>Texto</Text>
      <Text style={{color: 'black', fontSize: 25}}>Texto</Text>
      <Text style={{color: 'black', fontSize: 25}}>Texto</Text>
      <Text style={{color: 'black', fontSize: 25}}>Texto</Text>
      <Text style={{color: 'black', fontSize: 25}}>Texto</Text>
    </View>
    <View style={{backgroundColor: 'blue', flex:1}}></View>
    <View style={{backgroundColor: 'green', flex:2}}></View>
    <View style={{backgroundColor: 'gray', height:40}}></View>

  </View> */}


// STYLES****
// const styles = StyleSheet.create({
//   area:{
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   red:{
//     color: 'red'
//   },
//   blue:{
//     color: 'blue'
//   },
//   italic:{
//     fontStyle: 'italic'
//   },
//   t25:{
//     fontSize: 25
//   },
//   black:{
//     color: 'black'
//   },
//   t50:{
//     fontSize: 50
//   }
// })
// render() {

//   return (
//     <View style={styles.area}>

//       <Text style={styles.blue}>Texto 1</Text>
//       <Text style={[styles.italic, styles.black, styles.t50]}>Texto 2</Text>
//       <Text style={styles.red}>Texto 3</Text>
//       <Text style={[styles.blue, styles.t25, styles.italic]}>Texto 4</Text>

//     </View>
// FIM

// VEGGETE + COMPONENTE GUI***
// let nome = 'Veggete';
// let fotoVeggete = 'https://s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/audiopub-episodes/bs/2023/0/m/GuroGmSYSs5SY1wzBLZA/whatsapp-image-2023-10-22-at-22.56.20.jpeg'

// return (
//   <View>
//     <Text>Jesus Cristo é o Senhor hoje e sempre.</Text>
//     <Text>Mais um texto</Text>
//     <Text style={{ color: 'red', fontSize: 30, margin: 15, textAlign: 'center' }}>Vasco da Gama</Text>
//     <Image
//       source={{ uri: fotoVeggete }}
//       style={{
//         width: 270,
//         height: 270
//       }}
//     />
//     <Text style={{ fontSize: 25, color: 'black', textAlign: 'center' }}>{nome}</Text>
//     {/* Aqui temos o component Gui, com seu tamanho enviado por props */}
//     <Gui largura={270} altura={270} fulano='Gui'/>
//   </View>
// );

//COMPONENT GUI****
// class Gui extends Component {
//   render() {

//     let gui = 'https://s2-ge.glbimg.com/8i0w1QsBeaN4XezZqF_9lP51JYQ=/0x0:492x583/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/s/L/F0Jo1NQqGyBeCV2fDk2Q/vasco.jpg.png'

//     return (
//       <View>
//         <Image
//           source={{ uri: gui }}
//           style={{
//             // mandaremos largura, altura e nome da imagem por Props
//             width: this.props.largura,
//             height: this.props.altura
//           }}
//         />
//         <Text style={{ color: 'black', fontSize: 25, textAlign: 'center' }}> {this.props.fulano} </Text>
//       </View>
//     )
//   }
// }

// CONSTRUCTOR **
// constructor(props) {
//   super(props);
//   this.state = {
//     nome: 'Devair'
//   };

//   Utilizamos essa propriedade para a função poder modificar os states
//   this.Entrar = this.Entrar.bind(this)
// }

// Entrar (nome){
//   this.setState({
//     nome: nome,
//   })
// }

// render() {

//   return (
//     <View style={{ alignItems: 'center' }}>

//       <Button title='Entrar' onPress={ ()=> this.Entrar('Pereira')}></Button>
      
//       <Text style={{ color: 'black', fontSize: 25 }}>
//         {this.state.nome}
//       </Text>

//     </View>
//   );
// }

// *********************************
// APP POR FUNÇÃO, SEM COMPONENT
// function App() {
// return (
//   <View>
//     <Text>Jesus Cristo é o Senhor hoje e sempre.</Text>
//     <Text>Mais um texto</Text>
//     <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>Terceiro texto a</Text>
//     <Image
//       source={{ uri: 'https://s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/audiopub-episodes/bs/2023/0/m/GuroGmSYSs5SY1wzBLZA/whatsapp-image-2023-10-22-at-22.56.20.jpeg' }}
//       style={{width: 300, height:300}}
//     />
//   </View>
// );
// }