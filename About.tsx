import React from 'react';
import { Text } from 'react-native';
import { Container, Row, Col } from 'react-native-flex-grid';
import Hero from './Hero';

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget 
              imperdiet orci. In euismod ante vitae orci egestas, et pharetra purus 
              dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et 
              ultrices posuere cubilia curae; Duis quis libero sit amet nunc ultricies 
              ultricies sed non elit. Nullam vel diam nec augue convallis cursus sit 
              amet vitae sapien.
            </Text>
            <Text
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
            </Text>
          </Col>
        </Row>
      </Container>
    </>
  );
}
