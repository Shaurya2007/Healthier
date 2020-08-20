import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import MyHeader from '../Component/MyHeader'

export default class MealScreen extends Component{
    render(){
        return(
            <View>
             <MyHeader title="Meal"></MyHeader>  
            </View>
        )
    }
}