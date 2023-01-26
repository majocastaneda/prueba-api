import { Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, { useState, useContext } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthContext';

const RegisterScreen =({navigation}) =>{
    const [name, setName] = useState(null);
    const [lastname, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [phone, setPhone] = useState(null);
    const [identification, setIdentification] = useState(null);
    const [adress, setAdress] = useState(null);
    const [gender, setGender] = useState(null);
    const [birthday, setBirthday] = useState(null);

    const val = useContext(AuthContext);


    return(
        <View>
        <View>
            <Text>{val}</Text>
            <TextInput placeholder='Nombre' value={name} onChangeText={text => setName(text)}/>
            <TextInput placeholder='Apellido' value={lastname} onChangeText={text => setLastName(text)}/>
            <TextInput placeholder='Email' value={email} onChangeText={text => setEmail(text)}/> 
            <TextInput placeholder='Pass'  value={pass} onChangeText={text => setPass(text)} secureTextEntry />
            <TextInput placeholder='Phone' value={phone} onChangeText={text => setPhone(text)}/>
            <TextInput placeholder='Identification' value={identification} onChangeText={text => setIdentification(text)}/>
            <TextInput placeholder='Direccion' value={adress} onChangeText={text => setAdress(text)}/>
            <TextInput placeholder='Genero' value={gender} onChangeText={text => setGender(text)}/>
            <TextInput placeholder='Fecha de Nacimiento' value={birthday} onChangeText={text => setBirthday(text)}/>

            <Button title="Register"></Button>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({})