import React from 'react';
import { View, Text } from 'react-native';
import { Container } from 'react-native-flex-grid';

export default function Footer() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderTopColor: '#eee',
        borderTopWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginTop: 40,
      }}
    >
      <Container
        style={{
          maxWidth: 1200,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Text style={{ fontSize: 12, color: '#888' }}>
          © Empowering the Nation {new Date().getFullYear()}. All rights reserved.
        </Text>
      </Container>
    </View>
  );
}
