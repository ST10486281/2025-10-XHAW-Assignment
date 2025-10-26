import React from 'react';
import { Drawer } from 'react-native-paper';

type Props = {
  active: string;
  setActive: (val: string) => void;
  onClose: () => void;
  navigate: (name: string) => void;
};

export default function DrawerMenuContent({ active, setActive, onClose, navigate }: Props) {
  return (
    <Drawer.Section title="Menu" showDivider={false}>
      <Drawer.Item
        label="Home"
        icon="home"
        active={active === 'home'}
        onPress={() => {
          setActive('home');
          onClose();
          navigate('Home');
        }}
      />
      <Drawer.Item
        label="Get Quote"
        icon="information-outline"
        active={active === 'GetQuote'}
        onPress={() => {
          setActive('GetQuote');
          onClose();
          navigate('GetQuote');
        }}
      />
      <Drawer.Item
        label="Short Courses"
        icon="information-outline"
        active={active === 'ShortCourses'}
        onPress={() => {
          setActive('ShortCourses');
          onClose();
          navigate('ShortCourses');
        }}
      />

      <Drawer.Item
        label="Long Courses"
        icon="information-outline"
        active={active === 'LongCourses'}
        onPress={() => {
          setActive('LongCourses');
          onClose();
          navigate('LongCourses');
        }}
      />

      <Drawer.Item
        label="Contact"
        icon="information-outline"
        active={active === 'Contact'}
        onPress={() => {
          setActive('Contact');
          onClose();
          navigate('Contact');
        }}
      />

      <Drawer.Item
        label="About"
        icon="information-outline"
        active={active === 'About'}
        onPress={() => {
          setActive('About');
          onClose();
          navigate('About');
        }}
      />



      {/* add more Drawer.Item here if needed */}
    </Drawer.Section>
  );
}
