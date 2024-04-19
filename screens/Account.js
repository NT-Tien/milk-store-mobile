import * as React from 'react';  
import { ScrollView, Text } from 'react-native';

export default function Account() {
    return (
      <ScrollView style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
        <Text style={{ padding: 40, fontSize: 20, color: 'black' }}>
          Account
        </Text>
      </ScrollView>
    );
}
