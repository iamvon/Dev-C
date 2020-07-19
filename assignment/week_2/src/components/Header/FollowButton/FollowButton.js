import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import userInfoStyle from '../UserInfo/styles'

export default function FollowButton() {
    return (
        <TouchableOpacity>
            <View style={[userInfoStyle.btn, styles.followBtn]}>
                <Text style={userInfoStyle.btnLabel}>
                    Following
            </Text>
            </View>
        </TouchableOpacity>
    )
}