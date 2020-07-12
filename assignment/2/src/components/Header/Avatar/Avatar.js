import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles'

export default function Avatar() {
    return (
        <View style={styles.avatarWrapper}>  
            <Image
            // source={require('./avatar.jpg')}
            source={{ uri: "https://lh3.googleusercontent.com/ogw/ADGmqu8ZIvKwI5IO-yy-1jnPZvRXvfyyAlnE32Y00-v3=s83-c-mo" }}
            style={styles.avatar}
        />
        </View>
    )
}