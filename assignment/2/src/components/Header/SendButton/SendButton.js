import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import userInfoStyle from '../UserInfo/styles'
import { Feather } from '@expo/vector-icons'

export default function SendButton() {
    return (
        <TouchableOpacity>
            <View style={[userInfoStyle.btn, styles.sendBtn]}>
                <Feather name="send" size={24} color="black" />
            </View>
        </TouchableOpacity>
    )
}