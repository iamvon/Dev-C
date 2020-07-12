import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

export default function CountArea() {
    return (
        <View style={styles.countArea}>
            <View>
                <Text style={styles.countText}>210</Text>
                <Text style={styles.countLabelText}>Photos</Text>
            </View>
            <View>
                <Text style={styles.countText}>15K</Text>
                <Text style={styles.countLabelText}>Followers</Text>
            </View>
            <View>
                <Text style={styles.countText}>605</Text>
                <Text style={styles.countLabelText}>Following</Text>
            </View>
        </View>
    )
}