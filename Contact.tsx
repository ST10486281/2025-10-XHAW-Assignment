import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import { Container, Row, Col } from 'react-native-flex-grid';
import Hero from './Hero';
import Footer from './Footer';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) newErrors.name = 'Please enter your full name.';
    if (!email.trim()) newErrors.email = 'Please enter your email address.';
    else if (!validateEmail(email)) newErrors.email = 'Please enter a valid email address.';
    if (!message.trim()) newErrors.message = 'Please enter your message.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 4000);
    }
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

      <Container style={{ maxWidth: 900, alignSelf: 'center', paddingVertical: 48 }}>
        <Row>
          <Col xs={12}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
              Contact Form
            </Text>
          </Col>
        </Row>

        <Card style={{ padding: 20, marginBottom: 32, borderRadius: 12, backgroundColor: '#fafafa' }}>
          <Row style={{ rowGap: 12 }}>
            <Col xs={12} md={4}>
              <TextInput
                mode="outlined"
                label="Full Name"
                value={name}
                onChangeText={setName}
                error={!!errors.name}
              />
              {errors.name && <Text style={{ color: '#c62828', fontSize: 12, marginTop: 4 }}>{errors.name}</Text>}
            </Col>

            <Col xs={12} md={4}>
              <TextInput
                mode="outlined"
                label="Email Address"
                value={email}
                onChangeText={setEmail}
                error={!!errors.email}
              />
              {errors.email && <Text style={{ color: '#c62828', fontSize: 12, marginTop: 4 }}>{errors.email}</Text>}
            </Col>

            <Col xs={12} md={4}>
              <TextInput
                mode="outlined"
                label="Message"
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={3}
                error={!!errors.message}
              />
              {errors.message && <Text style={{ color: '#c62828', fontSize: 12, marginTop: 4 }}>{errors.message}</Text>}
            </Col>
          </Row>

          <Button
            mode="contained"
            onPress={handleSubmit}
            style={{
              alignSelf: 'flex-start',
              marginTop: 20,
              backgroundColor: '#5e35b1',
              borderRadius: 25,
              paddingHorizontal: 20,
            }}
          >
            Submit
          </Button>

          {submitted && (
            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text style={{ color: 'green', fontSize: 14 }}>
                ✅ Thank you! Your message has been sent successfully.
              </Text>
            </View>
          )}
        </Card>

        <Row>
          {campuses.map((campus, i) => (
            <Col key={i} xs={12} md={4}>
              <Card style={{ margin: 8, padding: 16, borderRadius: 12 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 6 }}>{campus.name}</Text>
                <Text>📞 {campus.phone}</Text>
                <Text>✉️ {campus.email}</Text>
                <Text style={{ marginTop: 6, color: '#555' }}>{campus.address}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
}
