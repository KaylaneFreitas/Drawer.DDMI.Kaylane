import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';

function TelaInicio({ navigation }) {
    return (
        <View>
            <Button
            title="Ir para configurações"
            onPress={ () => navigation.navigate('Configurações')} 
            />
        </View>
    );
}

function Configurações({ navigation }) {
    return (
        <View>
            <Button
            title="Voltar para o início"
            onPress={ () => navigation.navigate('Configurações')} 
            />
        </View>
    );
}
