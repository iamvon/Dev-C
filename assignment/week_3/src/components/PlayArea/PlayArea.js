import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import ChoiceCard from './ChoiceCard'

export default function PlayArea(props) {
    const {userChoice, compChoice} = props

    return (
        <View style={styles.playArea}>
            <View style={styles.choicesContainer}>
                <ChoiceCard
                    playerName="You"
                    choice={userChoice}
                />
                <Text> VS </Text>
                <ChoiceCard 
                    playerName="Comp"
                    choice={compChoice}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    playArea: {
        flex: 0.55,
        // backgroundColor: 'yellow'
    },

    choicesContainer: {
        margin: 10,
        borderWidth: 2,
        paddingTop: 100,
        shadowRadius: 5,
        paddingBottom: 100,
        borderColor: 'grey',
        shadowOpacity: 0.90,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: { height: 5, width: 5 },
    }
})
