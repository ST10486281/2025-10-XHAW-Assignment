import React from 'react';
import { Text } from 'react-native';
import { Container, Row, Col } from 'react-native-flex-grid';
import Hero from './Hero';
import Footer from './Footer';

export default function About() {
  return (
    <>
      <Hero
        name="About"
        tagline="We Aim To Provide Excellent Service!"
        courseLength=""
        image="/images/about.jpg"
      />

      <Container style={{ maxWidth: 900, alignSelf: 'center', paddingVertical: 48 }}>
        <Row>
          <Col xs={12}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                color: '#444',
                textAlign: 'center',
                marginBottom: 12,
              }}
            >
                We are a training center that provides skills training to domestic workers and gardeners.
                Our mission is community empowerment through skills training.
                We offer 6 week and 6 month programs.
                We have had an impact on thousands of students.

            </Text>
            {/* <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                color: '#444',
                textAlign: 'center',
                marginBottom: 12,
              }}
            >
              Morbi ut tincidunt magna. Curabitur ac elementum lacus. Aliquam erat 
              volutpat. Donec pulvinar porttitor justo, nec suscipit ex. Donec euismod 
              magna non nunc congue, vel condimentum libero porttitor. Ut ultricies 
              fermentum facilisis. 
            </Text>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                color: '#444',
                textAlign: 'center',
              }}
            >
              Phasellus eget justo nec lorem cursus laoreet. Integer at diam ac leo 
              tincidunt pharetra. In auctor metus at elit vulputate, vel dictum nibh 
              efficitur. Suspendisse gravida, mi ut congue dapibus, lorem lorem 
              malesuada ligula, nec commodo felis felis sit amet magna.
            </Text> */}
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}
