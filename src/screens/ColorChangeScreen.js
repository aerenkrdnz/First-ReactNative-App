import { StyleSheet, Text, View, Button } from 'react-native'
import React,{useReducer} from 'react'
import ColorChange from '../../components/ColorChange'

const reducer = (state, action)=>{
  sw
}

export default function ColorChangeScreen() {
  const [state, dispatch] = useReducer(reducer, {red:0,green:0,blue:0})
  return (
    <View>

      <ColorChange color="Kırmızı" onIncrease={()=>dispatch({type:'changeRed', payload:20})} onDecrease={()=>dispatch({type:'changeRed', payload:-20}) }/>    

      <ColorChange color="Mavi" onIncrease={()=>dispatch({type:'changeBlue', payload:20})} onDecrease={()=>dispatch({type:'changeBlue', payload:-20}) }/>   

      <ColorChange color="Yeşil" onIncrease={()=>dispatch({type:'changeGreen', payload:20})} onDecrease={()=>dispatch({type:'changeGreen', payload:-20}) }/>    
           
    </View>
  )
}

const styles = StyleSheet.create({})