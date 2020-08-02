import React, { useState } from 'react'
import { View } from 'react-native'
import Header from '../../components/Header/Header'
import PlayArea from '../../components/PlayArea/PlayArea'
import ChoiceButtons from '../../components/ChoiceButtons/ChoiceButtons'
import CHOICES from '../../components/ChoiceButtons/choices'
import { getRoundOutcome, randomComputerChoice } from '../../utils/utils' 
import styles from '../../styles/styles'

const Home = () => {
    let userChoice = {
        name: '',
        uri: ''
    }

    let compChoice = {
        name: '',
        uri: ''
    }

    const [choiceState, setChoiceState] = useState({ userChoice })
    const [compChoiceState, setCompChoiceState] = useState({ compChoice })
    const [result, setResult] = useState("Make your choice")

    const onChoicePress = (choice) => {
        userChoice = CHOICES.find(item => item.name === choice)
        compChoice = randomComputerChoice()
        let res = getRoundOutcome(userChoice.name, compChoice.name)
        setResult(res)
        setChoiceState({ userChoice })
        setCompChoiceState({ compChoice })
    }

    return (
        <View style={styles.container}>
            <Header result={result} />
            <PlayArea userChoice={choiceState.userChoice} compChoice={compChoiceState.compChoice} />
            <ChoiceButtons onChoicePress={onChoicePress} />
        </View>
    )
}

export default Home