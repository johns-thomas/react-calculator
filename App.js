/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View,TouchableOpacity} from 'react-native';




export default class App extends Component{
  constructor(){
    super();
    this.state={
      result:"",
      final:"0"
    }
    this.op=["Del",'+','-','*','/']
    this.num = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
  }
  calculate(){
    const lastchar = this.state.result.split('').pop()
    if(lastchar)
    this.setState({
      final:eval(this.state.result)
    })

  }
  valid(){
    const text=this.state.result.slice(-1)
    switch(text){
    case '+':
    case '-':
    case '*':
    case '/':
        return false;
    }
    return true;
  }

  Buttonpress(bn){
    if(bn == '='){
     return this.valid() && this.calculate();
    }else{

    this.setState({
    result:this.state.result+bn
      });
    }
  }

  operate(op){
  switch(op){
    case "Del":
      let text=this.state.result.split('')
      text.pop()

      this.setState({
        result:text.join('')
      });
      this.setState({
        final:""
      });
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      const lastchar = this.state.result.split('').pop()
      if(this.op.indexOf(lastchar)>0)return
      if(this.state.result == '') return
      this.setState({
        result:this.state.result +op
      })
  }
  }


  render() {
    let elem = []
    let num = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    for(let i=0; i<4; i++){
      let rows=[]
      for(let j=0 ; j<4;  j++){
        rows.push(<TouchableOpacity key={this.num[i][j]} onPress={() => this.Buttonpress(this.num[i][j])} style={styles.btn}>
           <Text style={styles.btntext}> {this.num[i][j]} </Text>
           </TouchableOpacity>);
      }
      elem.push(<View style={styles.row}> {rows} </View>);
    }
    let ops=[]

    for(let i=0;i<5;i++){
      ops.push(<TouchableOpacity onPress={() => this.operate(this.op[i])} style={styles.btn}> <Text style={styles.btntext}>{this.op[i]}</Text></TouchableOpacity>)
    }
    return (
      <View style={styles.container}>
        <View style={styles.display}>
        <Text style={styles.dis}>{this.state.final}</Text>
        </View>
        <View style={styles.cal}>
          <Text style={styles.caldis}>{this.state.result}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {elem}
          </View>
          <View style={styles.operations}>
          {ops}
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
    backgroundColor:'#ffffff'
  },
  dis:{
    fontSize:40
  },
    caldis:{
    fontSize:70
  },
  cal:{
    flex:2,
    fontSize:70,
    justifyContent:'center',
    alignItems:'flex-end',
    backgroundColor:'#d3e9ef'
  },
  row:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },

  buttons: {
    flex:7,
    flexDirection:'row'
  },
  numbers: {
    flex:2,
    justifyContent:'center',
    backgroundColor:'#a2a2a2',
    alignSelf:'stretch'
  },
  operations: {
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
    backgroundColor:'#61c4a8'
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'stretch'
  },
  btntext:{
    fontSize:40,
    color:'#fefefe'
  }
});
