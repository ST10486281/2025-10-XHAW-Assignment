import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';
import { Container, Row, Col } from 'react-native-flex-grid';
import { useNavigation } from '@react-navigation/native';
import Hero from './Hero';
import data from './data_courses.json';
import Footer from './Footer';

export default function ShortCourses() {
  const navigation = useNavigation();
  const shortCourses = data.filter((c) => c['course length'] === 'short');

  return (
    <>
      <Hero
        name="Short Courses"
        tagline="Explore Our 6 Week Practical Course"
        courseLength=""
        image="/images/short_courses.jpg"
      />

      <Container style={{ maxWidth: 1100, alignSelf: 'center', paddingVertical: 48 }}>
        <Row>
          {shortCourses.map((course) => (
            <Col key={course.slug} xs={12} sm={6} md={4}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SampleCourse', { slug: course.slug })}
              >
                <Card style={{ margin: 12, overflow: 'hidden' }}>
                  <ImageBackground
                    source={{ uri: course.image }}
                    style={{
                      height: 180,
                    }}
                    imageStyle={{ opacity: 0.85 }}
                  >
                    <View style={{ backgroundColor: 'rgba(0,0,0, 0.30)', padding: 10,
                          borderRadius: 4, height: '100%', 
                      justifyContent: 'flex-end',}}>

                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: '#fff',
                          paddingHorizontal: 6,
                          borderRadius: 4,
                          textAlign: 'center'
                        }}
                      >
                        {course.name.replace('Course', '')}
                      </Text>
                      
                      <Card.Content style={{ padding: 12 }}>
                        <Text style={{ fontWeight: 'bold', color: '#fff', 
                          textAlign: 'center' }}>
                          R{course.price.toFixed(2)}
                        </Text>
                        <Text style={{ fontSize: 14, marginBottom: 6, 
                          color: '#fff',
                          textAlign: 'center' }}>
                          {course.tagline}
                        </Text>
                      </Card.Content>
                    </View>
                  </ImageBackground>

                </Card>
              </TouchableOpacity>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </>
  );
}
