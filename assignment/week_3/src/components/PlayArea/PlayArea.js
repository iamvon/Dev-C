import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

export default function PlayArea() {
    return (
        <View style={styles.playArea}>
        </View>
    )
}

const styles = StyleSheet.create({
    playArea: {
        flex: 0.55,
        backgroundColor: 'yellow'
    },
})
