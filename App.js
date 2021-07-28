import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends React.Component {

  constructor(){
    super();
    this.state={
      text:"",
      displayText:'',
    }
  }



  render() {
    return (
      <SafeAreaProvider style={styles.container}>
          <Header
            backgroundColor="#ffffff"
            centerComponent={{text:"Reader App"}}
          >
          </Header>

          <TextInput
            onChangeText={(text)=>{this.setState({text:text});}}
            value={this.state.text}
            style={styles.input}
          />

        <TouchableOpacity style={styles.display} onPress={()=>{
          this.setState({displayText:this.state.text})
        }}>
          <Text style={styles.text}>GO</Text>
        </TouchableOpacity>
        
        <Text style={styles.disp}>{this.state.displayText}</Text>
          
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    backgroundColor: '#212121',
  },
  input:{
    borderWidth:2,
    borderColor:'#ffffff',
    alignSelf:'center',
    justifyContent:'center',
    marginTop:10,
    textAlign:'center',
    backgroundColor:'#ffffff',
  },
  display:{
    borderWidth:1,
    backgroundColor:'#f2f2f2',
    marginTop:10,
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:20,
  },
  text:{
    color:"#000000",
    textAlign:'center',
    padding:10,
  },
  disp:{
    color:"#ffffff",
    textAlign:'center',
    marginTop:20,
  }
});
