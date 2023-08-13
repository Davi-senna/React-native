import React, {useState} from "react";
import {View, Text,TextInput, Button} from "react-native";
import ResultImc from "../ResultImc";

export default function Form(){

    const [heigth, setHeigth]= useState(null);
    const [weigth, setWeigth]= useState(null);
    const [messageImc, setMessageImc]= useState("Preencha o peso e altura");
    const [imc, setImc]= useState(null);
    const [textButton, setTextButton]= useState("Calcular");

    function imcCalculator(){
        return setImc((weigth/(heigth*heigth)).toFixed(2))
    }

    function validationImc(){
        if(weigth != null && heigth != null){
            imcCalculator()
            setHeigth(null)
            setWeigth(null)
            setMessageImc("Seu imc é igual a: ")
            setTextButton("Calcular novamente")
            return
        }else{
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e altura")
        }
    }

    return(
        <View>
            <View>
                <Text>Altura:</Text>
                <TextInput onChangeText={setHeigth} value={heigth} placeholder="Ex: 1.77" keyboardType = "numeric" />
                <Text>Peso:</Text>
                <TextInput onChangeText={setWeigth} value={weigth} placeholder="Ex: 73.45" keyboardType = "numeric" />
                <Button onPress={() => validationImc()} title={textButton}/>
            </View>
            <ResultImc messageResultImc = {messageImc} resultImc={imc}/>
        </View>
    );
}