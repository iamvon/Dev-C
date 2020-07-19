import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {   
        flex: 0.15,
        backgroundColor: 'red'
    },
})
