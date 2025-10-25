import React from 'react';
import { ImageBackground, TouchableOpacity, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Container, Row, Col } from 'react-native-flex-grid';
import Hero from './Hero';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Hero */}
      <Hero
        name="Empowering the Nation"
        tagline="Providing Skills Training for Domestic Workers"
        courseLength=""
        image="/images/home.jpg"
      />

      <Container style={{ maxWidth: 1000, alignSelf: 'center', paddingVertical: 48 }}>
        <Row style={{ justifyContent: 'center' }}>
          {/* Short Courses */}
          <Col xs={12} md={6}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SampleCourse', { slug: 'child-minding' })}
            >
              <Card >
                <ImageBackground
                  source={{ uri: '/images/short_courses.jpg' }}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 12, paddingTop: 120,paddingBottom: 120, overflow: 'hidden'
                  }}
                  imageStyle={{ opacity: 0.7 }}
                >
                  <Text
                    style={{
                      fontSize: 26,
                      fontWeight: 'bold',
                      color: '#fff',
                      textAlign: 'center',
                    }}
                  >
                    See Short Courses
                  </Text>
                </ImageBackground>
              </Card>
            </TouchableOpacity>
          </Col>

          {/* Long Courses */}
          <Col xs={12} md={6}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SampleCourse', { slug: 'first-aid' })}
            >
              <Card >
                <ImageBackground
                  source={{ uri: '/images/long_courses.jpg' }}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 12, paddingTop: 120,paddingBottom: 120, overflow: 'hidden'
                  }}
                  imageStyle={{ opacity: 0.7 }}
                >
                  <Text
                    style={{
                      fontSize: 26,
                      fontWeight: 'bold',
                      color: '#fff',
                      textAlign: 'center',
                    }}
                  >
                    See Long Courses
                  </Text>
                </ImageBackground>
              </Card>
            </TouchableOpacity>
          </Col>
        </Row>
      </Container>
    </View>
  );
}
