import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native'

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log(counter)
  return (
    <ScrollView>
    <View style={styles.parentStyle}>
      <Text style={styles.header}>COUNTER</Text>
      <View style={[styles.commonStyle,styles.counterView]}>
        <Text style={styles.counterStyle}>{counter}</Text>
      </View>


      <View style={[styles.commonStyle, styles.buttonStyle]}>

        <TouchableOpacity style={styles.touchableOpacityStyle} onPress={() => { setCounter(counter + 1) }}>
          <Text style={styles.textStyle}>INCREMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.touchableOpacityStyle,styles.button]} onPress={() => { counter>0?setCounter(counter - 1):setCounter(counter) }}>
          <Text style={styles.textStyle}>DECREMENT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.commonStyle}>


      </View>
      <View style={[styles.commonStyle,styles.buttonStyle]}>

        <TouchableOpacity style={styles.touchableOpacityStyle} onPress={() => {
          setCounter(0)
        }}>
          <Text style={[styles.textStyle]}>RESET</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>DEVELOPED BY : ASAD ALI KHAN</Text>

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header:{
    fontSize:40,
    fontWeight:'bold',
  },
  button:{
marginLeft:10
  },
  counterView:{
    borderWidth:3,
    // borderRadius:100,
    alignItems:'center',
    // marginHorizontal:45,
    borderRadius:200/2,
    height:200,
    width:200,
    justifyContent:'center',
  },
  counterStyle:{
    // textAlign:'center',
    fontSize:100,
    
  },
  parentStyle:{
    borderWidth:3,
    paddingTop:50,
    paddingBottom:50,
    marginTop:10,
    marginBottom:5,
    // marginTop:5,
    width:'90%',
    flex: 1,
    // height:'100%',
    marginLeft:'5%',
    borderRadius:5,
    alignItems:'center',

  },
  commonStyle: {
    marginTop: 30

  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center'
  },
  buttonStyle: {
    flexDirection:'row',
    // justifyContent:'space-around',
    alignItems:'center',
    
  },
  touchableOpacityStyle:{
    borderWidth:2,
    padding:10,
    borderRadius:10,
    minWidth:140
  },
  footer:{
    marginTop:70
  },
})

export default App;