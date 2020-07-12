import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import styles from './styles'

export default function ImageArea() {
    const imgData = [
        { id: 1, imgSource: require('../../assets/1.jpg') },
        { id: 2, imgSource: require('../../assets/2.jpg') },
        { id: 3, imgSource: require('../../assets/3.jpg') },
        { id: 4, imgSource: require('../../assets/4.jpg') },
        { id: 5, imgSource: require('../../assets/5.jpg') },
        { id: 6, imgSource: require('../../assets/6.jpg') },
        { id: 7, imgSource: require('../../assets/1.jpg') },
        { id: 8, imgSource: require('../../assets/2.jpg') },
    ]

    const centerImgData = Math.floor(imgData.length / 2)

    return (
        <ScrollView contentContainerStyle={styles.imageArea}>
            <View>
                {imgData.slice(0, centerImgData).map(item => {
                    return <Image source={item.imgSource} style={styles.image} key={item.id} />
                })}
            </View>
            <View >
                {imgData.slice(centerImgData).map(item => {
                    return <Image source={item.imgSource} style={styles.image} key={item.id} />
                })}
            </View>
        </ScrollView>
    )
}