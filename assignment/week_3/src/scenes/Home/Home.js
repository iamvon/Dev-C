import React from 'react'
import { View } from 'react-native'
import Header from '../../components/Header/Header'
import PlayArea from '../../components/PlayArea/PlayArea'
import ChoiceButtons from '../../components/ChoiceButtons/ChoiceButtons'
import styles from '../../styles/styles'

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <PlayArea />
            <ChoiceButtons />
        </View>
    )
}

