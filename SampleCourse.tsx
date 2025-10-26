import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import data from './data_courses.json';
import Hero from './Hero';
import Footer from './Footer';

export default function SampleCourse({ route }: any) {
  const { slug } = route.params;
  const navigation = useNavigation();
  const course = data.find((c) => c.slug === slug);

  if (!course) {
    return (
      <View style={{ alignItems: 'center', padding: 40 }}>
        <Text style={{ fontSize: 18, color: '#444' }}>Course not found.</Text>
      </View>
    );
  }

  return (
    <View>
      <Hero
        name={course.name}
        tagline={course.tagline}
        courseLength={course['course length']}
        image={course.image}
      />

      <View style={{ alignItems: 'center', padding: 24 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>
          Topics Covered
        </Text>

        {course['topics covered'].map((topic: string, i: number) => (
          <Text key={i} style={{ fontSize: 16, color: '#444', marginVertical: 3 }}>
            • {topic}
          </Text>
        ))}

        <Text style={{ marginTop: 20, fontSize: 18, fontWeight: '600', color: '#3f51b5' }}>
          Price: R{course.price}
        </Text>

        {/* Action Buttons */}
        <View style={{ flexDirection: 'row', gap: 12, marginTop: 30 }}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('GetQuote', { slug: course.slug })}
          >
            Get a Quote
          </Button>


          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Contact')}
          >
            Contact Us
          </Button>
        </View>
      </View>
      <Footer/>
    </View>
  );
}
