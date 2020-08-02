import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import CHOICES from './choices'

const ChoiceButtons = (props) => {
    return (
        <View style={styles.choiceButtons}>
            {
                CHOICES.map(choice => {
                    return (
                        <TouchableOpacity style={styles.buttonStyle} key={choice.name} onPress={()=> props.onChoicePress(choice.name)}>
                            <Text style={styles.buttonText}>{choice.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    choiceButtons: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        width: 200,
        margin: 10,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#640D14',
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
})


export default ChoiceButtons