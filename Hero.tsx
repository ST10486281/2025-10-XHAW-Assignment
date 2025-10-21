import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

type HeroProps = {
  name: string;
  tagline: string;
  courseLength: string;
  image: string;
};

const Hero: React.FC<HeroProps> = ({ name, tagline, courseLength, image }) => {
  const lengthLabel =
    courseLength.toLowerCase() === 'long'
      ? 'Long Course (6 Months)'
      : courseLength.toLowerCase() === 'short'
      ? 'Short Course (6 Weeks)'
      : courseLength;

  return (
    <ImageBackground
      source={{ uri: image }}
      style={{
        width: '100%',
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ alignItems: 'center', paddingHorizontal: 16 }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          {name}
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            textAlign: 'center',
            marginTop: 8,
            maxWidth: 500,
          }}
        >
          {tagline}
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: '#fff',
            textAlign: 'center',
            marginTop: 8,
            fontStyle: 'italic',
          }}
        >
          {lengthLabel}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Hero;
