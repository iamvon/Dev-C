import React from 'react';
import { View, Text } from 'react-native'
import FollowButton from '../FollowButton/FollowButton'
import SendButton from '../SendButton/SendButton'
import styles from './styles'

export default function UserInfo() {
    return (
        <View style={styles.userInfo}>
            <Text>Pham Minh Tuan</Text>
            <Text>Developer</Text>
            <View style={styles.btnWrapper}>
                <FollowButton />
                <SendButton />
            </View>
        </View>
    )
}