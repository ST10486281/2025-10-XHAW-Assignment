import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Surface } from 'react-native-paper';

type HeroProps = {
  name: string;
  tagline: string;
  courseLength: string;
  image: string;
};

const Hero: React.FC<HeroProps> = ({ name, tagline, courseLength, image }) => (
  <ImageBackground
    source={{ uri: image }}
    style={{
      height: 300,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    imageStyle={{ opacity: 0.6 }}
  >
    <Surface
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
      }}
      elevation={4}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        {name}
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: '#eee',
          textAlign: 'center',
          marginTop: 6,
        }}
      >
        {tagline}
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: '#ddd',
          textAlign: 'center',
          marginTop: 4,
        }}
      >
        {courseLength} Course
      </Text>
    </Surface>
  </ImageBackground>
);

export default Hero;
