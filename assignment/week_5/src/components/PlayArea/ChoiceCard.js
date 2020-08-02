import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Image } from 'react-native'

const ChoiceCard = (props) => {
    const { choiceContainer, choiceCardTitle, choiceImage, choiceDescription } = styles
    return (
        <View style={choiceContainer}>
            <Text style={choiceDescription}>{props.playerName}</Text>
            <Image style={choiceImage} source={{ uri: props.choice.uri }} />
            <Text style={choiceCardTitle}>{props.choice.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    choiceContainer: {
        flex: 1,
        alignItems: 'center',
    },

    choiceDescription: {
        fontSize: 25,
        color: '#250902',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },

    choiceCardTitle: {
        fontSize: 30,
        color: '#250902'
    },

    choiceImage: {
        width: 170,
        height: 100,
        padding: 10    }
})


export default ChoiceCard