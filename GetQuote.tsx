import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, useWindowDimensions } from 'react-native';
import { TextInput, Button, Checkbox, Card } from 'react-native-paper';
import data from './data_courses.json';
import Hero from './Hero';

export default function GetQuote() {
  const { width } = useWindowDimensions();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [quote, setQuote] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleCourse = (slug: string) => {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const calculateQuote = () => {
    const selectedCourses = data.filter((c) => selected.includes(c.slug));
    const totalBefore = selectedCourses.reduce((sum, c) => sum + c.price, 0);

    let discountRate = 0;
    if (selected.length === 2) discountRate = 0.05;
    else if (selected.length === 3) discountRate = 0.1;
    else if (selected.length > 3) discountRate = 0.15;

    const discount = totalBefore * discountRate;
    const vat = (totalBefore - discount) * 0.15;
    const total = totalBefore - discount + vat;

    setQuote({
      totalBefore,
      discount,
      vat,
      total,
      discountRate,
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Hero */}
      <Hero
        name="Get a Quote"
        tagline="Select a Course To Enrol"
        courseLength=""
        image="/images/quote.jpg"
      />

      {/* Centered Container */}
      <View
        style={{
          width: '100%',
          maxWidth: 1000,
          alignSelf: 'center',
          paddingHorizontal: 24,
          paddingVertical: 32,
        }}
      >
        {/* Form */}
        <View
          style={{
            flexDirection: width > 768 ? 'row' : 'column',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <TextInput
            label="Full Name"
            value={name}
            onChangeText={setName}
            style={{ flex: 1 }}
          />
          <TextInput
            label="Phone"
            value={phone}
            onChangeText={setPhone}
            style={{ flex: 1 }}
          />
          <TextInput
            label="Email address"
            value={email}
            onChangeText={setEmail}
            style={{ flex: 1 }}
          />
        </View>

        {/* Courses */}
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Select Your Course
        </Text>

        <View
          style={{
            flexDirection: width > 768 ? 'row' : 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {data.map((course) => (
            <View key={course.slug} style={{ width: width > 768 ? '48%' : '100%' }}>
              <Checkbox.Item
                label={`${course.name.replace('Course', '')} (${
                  course['course length'] === 'long' ? '6 Months' : '6 Weeks'
                })`}
                status={selected.includes(course.slug) ? 'checked' : 'unchecked'}
                onPress={() => toggleCourse(course.slug)}
              />
            </View>
          ))}
        </View>

        <Button
          mode="contained"
          onPress={calculateQuote}
          style={{ marginTop: 16, alignSelf: 'flex-start' }}
        >
          Calculate Quote
        </Button>

        {/* Quote and Thank You Layout */}
        {quote && (
          <View
            style={{
              flexDirection: width > 768 ? 'row' : 'column',
              justifyContent: 'space-between',
              gap: 16,
              marginTop: 32,
            }}
          >
            <Card style={{ flex: 1, padding: 16 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>
                Your Quote
              </Text>
              <Text>Total Before Discount: R{quote.totalBefore.toFixed(2)}</Text>
              <Text>
                Discount Applied ({quote.discountRate * 100}%): -R
                {quote.discount.toFixed(2)}
              </Text>
              <Text>VAT (15%): R{quote.vat.toFixed(2)}</Text>
              <Text style={{ fontWeight: 'bold', marginTop: 8 }}>
                Your Total: R{quote.total.toFixed(2)}
              </Text>

              <Button
                mode="contained"
                style={{ marginTop: 16 }}
                onPress={handleSubmit}
              >
                Submit Request
              </Button>
            </Card>

            {submitted && (
              <Card style={{ flex: 1, padding: 16 }}>
                <Text>
                  Thank you! Your request has been received. A consultant will
                  contact you within 4 business days.
                </Text>
              </Card>
            )}
          </View>
        )}
      </View>
    </View>
  );
}
