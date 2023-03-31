import * as React from 'react';
import {View,Image,TouchableOpacity,Text,TextInput} from 'react-native';
import styles from './src/estilo/estilo';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './src/components/header';
import Form from './src/components/form';
import Rodape from './src/components/rodape';


export default function App() {
  return (
    <View style={styles.container}>

    <Header></Header>

    <Form></Form>
    
    <Rodape></Rodape>
  
       
      
    </View>
  );
}

