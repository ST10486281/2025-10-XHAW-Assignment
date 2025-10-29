import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

type Props = {
  active: string;
  setActive: (val: string) => void;
  onClose: () => void;
  navigate: (name: string) => void;
};

export default function DrawerMenuContent({ active, setActive, onClose, navigate }: Props) {
  const menuItems = [
    { label: 'Home', name: 'Home' },
    { label: 'Short Courses', name: 'ShortCourses' },
    { label: 'Long Courses', name: 'LongCourses' },
    { label: 'About', name: 'About' },
    { label: 'Get Quote', name: 'GetQuote' },
    { label: 'Contact', name: 'Contact' },
  ];

  return (
    <View style={{ paddingVertical: 16, gap: 10 }}>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.name}
          onPress={() => {
            setActive(item.name);
            onClose();
            navigate(item.name);
          }}
          style={{
            backgroundColor: active === item.name ? '#5A4FCF' : '#7C6EE4',
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderRadius: 80,
            marginHorizontal: 12,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: active === item.name ? 'bold' : 'normal',
              fontSize: 16,
              textAlign: 'center',
            }}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
