import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Checkbox, Card } from 'react-native-paper';
import { Container, Row, Col } from 'react-native-flex-grid';
import data from './data_courses.json';
import Hero from './Hero';
import Footer from './Footer';

export default function GetQuote() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [quote, setQuote] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; courses?: string }>({});

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const toggleCourse = (slug: string) => {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const calculateQuote = () => {
    const newErrors: typeof errors = {};
    if (selected.length === 0) newErrors.courses = 'Please select at least one course to get a quote.';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const selectedCourses = data.filter((c) => selected.includes(c.slug));
    const totalBefore = selectedCourses.reduce((sum, c) => sum + c.price, 0);

    let discountRate = 0;
    if (selected.length === 2) discountRate = 0.05;
    else if (selected.length === 3) discountRate = 0.1;
    else if (selected.length > 3) discountRate = 0.15;

    const discount = totalBefore * discountRate;
    const vat = (totalBefore - discount) * 0.15;
    const total = totalBefore - discount + vat;
    setQuote({ totalBefore, discount, vat, total, discountRate });
  };

  const handleSubmit = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = 'Please enter your full name.';
    if (!phone.trim()) newErrors.phone = 'Please enter your phone number.';
    if (!email.trim()) newErrors.email = 'Please enter your email address.';
    else if (!validateEmail(email)) newErrors.email = 'Please enter a valid email address.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitted(true);
    setName('');
    setPhone('');
    setEmail('');
  };


  return (
    <View>
      <Hero
        name="Get a Quote"
        tagline="Select a Course To Enrol"
        courseLength=""
        image="/images/quote.jpg"
      />

      <Container style={{ maxWidth: 1000, alignSelf: 'center', paddingVertical: 32 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Select Your Course</Text>

        <Row>
          {data.map((course) => (
            <Col key={course.slug} xs={12} md={6}>
              <Checkbox.Item
                label={`${course.name.replace('Course', '')} (${
                  course['course length'] === 'long' ? '6 Months' : '6 Weeks'
                })`}
                status={selected.includes(course.slug) ? 'checked' : 'unchecked'}
                onPress={() => toggleCourse(course.slug)}
              />
            </Col>
          ))}
        </Row>
        {errors.courses && <Text style={{ color: 'red', fontSize: 12, marginBottom: 10 }}>{errors.courses}</Text>}

        <Button mode="contained" onPress={calculateQuote} style={{ marginTop: 16 }}>
          Calculate Quote
        </Button>

        {quote && (
          <Row style={{ marginTop: 32 }}>
            <Col xs={12} md={8}>
              <Card style={{ padding: 20, borderRadius: 12 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>Your Quote</Text>
                <Text>Total Before Discount: R{quote.totalBefore.toFixed(2)}</Text>
                <Text>
                  Discount Applied ({quote.discountRate * 100}%): -R{quote.discount.toFixed(2)}
                </Text>
                <Text>VAT (15%): R{quote.vat.toFixed(2)}</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 8 }}>
                  Your Total: R{quote.total.toFixed(2)}
                </Text>

                {/* Contact info shown after quote */}
                <View style={{ marginTop: 24 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
                    Please provide your contact details
                  </Text>

                  <Row style={{ marginBottom: 12 }}>
                    <Col xs={12} md={4}>
                      <TextInput
                        label="Full Name"
                        value={name}
                        onChangeText={setName}
                        error={!!errors.name}
                        style={{ marginBottom: 4 }}
                      />
                      {errors.name && (
                        <Text style={{ color: 'red', fontSize: 12, marginTop: 6, marginBottom: 6 }}>
                          {errors.name}
                        </Text>
                      )}
                    </Col>
                    <Col xs={12} md={4}>
                      <TextInput
                        label="Phone"
                        value={phone}
                        onChangeText={setPhone}
                        error={!!errors.phone}
                        style={{ marginBottom: 4 }}
                      />
                      {errors.phone && (
                        <Text style={{ color: 'red', fontSize: 12, marginTop: 6, marginBottom: 6 }}>
                          {errors.phone}
                        </Text>
                      )}
                    </Col>
                    <Col xs={12} md={4}>
                      <TextInput
                        label="Email address"
                        value={email}
                        onChangeText={setEmail}
                        error={!!errors.email}
                        style={{ marginBottom: 4 }}
                      />
                      {errors.email && (
                        <Text style={{ color: 'red', fontSize: 12, marginTop: 6, marginBottom: 6 }}>
                          {errors.email}
                        </Text>
                      )}
                    </Col>
                  </Row>

                  <Button mode="contained" onPress={handleSubmit} style={{ marginTop: 8 }}>
                    Submit Request
                  </Button>

                  {submitted && (
                    <Text style={{ color: 'green', marginTop: 16 }}>
                      ✅ Thank you! Your request has been received. A consultant will contact you within 4 business days.
                    </Text>
                  )}
                </View>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
      <Footer />
    </View>
  );
}
