import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const val = useContext(AuthContext);

    return(
        <View>
        <View>
        <Text>{val}</Text>
            <TextInput placeholder='Email' value={email} onChangeText={text => setEmail(text)}/> 
            <TextInput placeholder='Pass'  value={pass} onChangeText={text => setPass(text)} secureTextEntry />

            <Button title="Login"></Button>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )  
}

export default LoginScreen;