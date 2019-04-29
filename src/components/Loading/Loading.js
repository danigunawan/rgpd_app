import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const loading = () => (
    <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator />
    </View>
);

export default loading;