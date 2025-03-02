import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const TopMenu = ({text_top}) => {
    return (
        <View>
            <Text>
                {text_top}
            </Text>
        </View>
    )
}

export default TopMenu;