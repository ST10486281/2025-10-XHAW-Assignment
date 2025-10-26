import React, { useState } from 'react';
import { Text } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import { Container, Row, Col } from 'react-native-flex-grid';
import Hero from './Hero';
import Footer from './Footer';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log('Submitted:', { name, email, message });
  };

  const campuses = [
    {
      name: 'Sandown Campus',
      phone: '0987654321',
      email: 'poultry@poultry.com',
      address: '140 West St, Sandown, Sandton, 2031',
    },
    {
      name: 'Rosebank Campus',
      phone: '0987654321',
      email: 'poultry@poultry.com',
      address: '41 Bath Ave, Rosebank, Johannesburg, 2196',
    },
    {
      name: 'Bramfontein Campus',
      phone: '0987654321',
      email: 'poultry@poultry.com',
      address: '27 Klein St, Bramfontein, Johannesburg, 2000',
    },
  ];

  return (
    <>
      <Hero
        name="Contact"
        tagline="Please call for bookings and inquiries!"
        courseLength=""
        image="/images/contact.jpg"
      />

      <Container style={{ maxWidth: 1100, alignSelf: 'center', paddingVertical: 48 }}>
        <Row>
          {/* Contact Form */}
          <Col xs={12}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
              Contact Form
            </Text>
          </Col>
        </Row>

        <Row style={{ marginBottom: 24 }}>
          <Col xs={12} md={4}>
            <TextInput
              label="Full Name"
              value={name}
              onChangeText={setName}
              style={{ marginBottom: 8 }}
            />
          </Col>
          <Col xs={12} md={4}>
            <TextInput
              label="Email address"
              value={email}
              onChangeText={setEmail}
              style={{ marginBottom: 8 }}
            />
          </Col>
          <Col xs={12} md={4}>
            <TextInput
              label="Message"
              value={message}
              onChangeText={setMessage}
              multiline
              style={{ marginBottom: 8 }}
            />
          </Col>
        </Row>

        <Button
          mode="contained"
          onPress={handleSubmit}
          style={{ alignSelf: 'flex-start', marginBottom: 32 }}
        >
          Submit
        </Button>

        {/* Campuses Section */}
        <Row>
          {campuses.map((campus, i) => (
            <Col key={i} xs={12} md={4}>
              <Card style={{ margin: 8, padding: 16 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 6 }}>
                  {campus.name}
                </Text>
                <Text>Phone Number: {campus.phone}</Text>
                <Text>Email: {campus.email}</Text>
                <Text style={{ marginTop: 6 }}>{campus.address}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </>
  );
}
