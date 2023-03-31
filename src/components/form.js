import { LinearGradient } from "expo-linear-gradient";
import * as React from 'react';
import { TextInput, Text, TouchableOpacity, View } from 'react-native';
import styles from "../estilo/estilo.js";

export default function Form(){
    return(
        <View style={styles.box}>
            <TextInput style={styles.inputs} placeholder= 'e-mail' />
            
            <TextInput style={styles.inputs}   placeholder= 'senha' />

            <TouchableOpacity style={{width:'80%'}}> 
                <LinearGradient
                // Background Linear Gradient
                colors={['#D2691E','#FF4500']}
                style={styles.button}
                >
                    <Text style={{fontWeight:'bold',color:'white'}}>LOGAR</Text>
                </LinearGradient>
            </TouchableOpacity>

        </View>

    );

}
