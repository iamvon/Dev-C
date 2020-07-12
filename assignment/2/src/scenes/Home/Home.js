import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header/Header'
import CountArea from '../../components/CountArea/CountArea'
import ImageArea from '../../components/ImageArea/ImageArea'
import styles from './styles'

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <CountArea />
            <ImageArea />
        </View>
    )
}