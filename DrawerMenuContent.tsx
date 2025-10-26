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
    <Drawer.Section title="" showDivider={false}>
      <Drawer.Item
        label="Short Courses"
        active={active === 'ShortCourses'}
        onPress={() => {
          setActive('ShortCourses');
          onClose();
          navigate('ShortCourses');
        }}
      />
      <Drawer.Item
        label="Long Courses"
        active={active === 'LongCourses'}
        onPress={() => {
          setActive('LongCourses');
          onClose();
          navigate('LongCourses');
        }}
      />

      <Drawer.Item
        label="About"
        active={active === 'About'}
        onPress={() => {
          setActive('About');
          onClose();
          navigate('About');
        }}
      />

      <Drawer.Item
        label="Get Quote"
        active={active === 'GetQuote'}
        onPress={() => {
          setActive('GetQuote');
          onClose();
          navigate('GetQuote');
        }}
      />

      <Drawer.Item
        label="Contact"
        active={active === 'Contact'}
        onPress={() => {
          setActive('Contact');
          onClose();
          navigate('Contact');
        }}
      />



      {/* add more Drawer.Item here if needed */}
    </Drawer.Section>
  );
}
