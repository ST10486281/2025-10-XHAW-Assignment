import React from 'react';
import { View, Text } from 'react-native';
import data from './data_courses.json';
import Hero from './Hero';

export default function SampleCourse({ route }: any) {
  const { slug } = route.params;
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
          Price: ${course.price}
        </Text>
      </View>
    </View>
  );
}
