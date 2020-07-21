import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'

export default function Header(props) {
    let textColor = props.result === 'Victory!' ? 'green' : 'red'

    return (
        <View style={styles.headerWrapper}>
            <Text style={[styles.headerText, { color: textColor }]}>{props.result}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})
