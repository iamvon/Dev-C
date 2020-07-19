import React from 'react';
import { View } from 'react-native';
import Avatar from './Avatar/Avatar'
import UserInfo from './UserInfo/UserInfo'
import styles from './styles'

export default function Header() {
    return (
        <View style={styles.header}>
            <Avatar />
            <UserInfo />
        </View>
    )
}