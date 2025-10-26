import React from 'react';
import { ImageBackground, TouchableOpacity, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Container, Row, Col } from 'react-native-flex-grid';
import Hero from './Hero';
import Footer from './Footer';

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
              onPress={() => navigation.navigate('ShortCourses')}
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
                >
                  <Text
                    style={{
                      fontSize: 26,
                      fontWeight: 'bold',
                      color: '#fff',
                      textAlign: 'center',
                       backgroundColor: 'rgba(0,0,0, 0.30)', padding: 10,
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
              onPress={() => navigation.navigate('LongCourses')}
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
                >
                  <Text
                    style={{
                      fontSize: 26,
                      fontWeight: 'bold',
                      color: '#fff',
                      textAlign: 'center',
                       backgroundColor: 'rgba(0,0,0, 0.30)', padding: 10,
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
      <Footer/>
    </View>
  );
}
