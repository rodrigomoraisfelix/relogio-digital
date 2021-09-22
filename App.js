import React from "react";
import{View,StyleSheet,Text} from 'react-native';
import Moment from 'react-moment';


export default function App(){
  return(
    <View style={styles.container}>
      <View style={styles.time}>
        <Moment format="hh:mm:ss" interval={1000}/>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',
    
  },
  time:{
    color:'#c1f6c4',
    fontSize:70,
    margin:10,
    textShadowColor:'#83d38d',
    textShadowOffset:{  
      height:5,
      width:5
    },
    textShadowRadius:50
    
  }

});