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
        label="Details"
        icon="information-outline"
        active={active === 'details'}
        onPress={() => {
          setActive('details');
          onClose();
          navigate('Details');
        }}
      />
      <Drawer.Item
        label="First Aid"
        icon="information-outline"
        active={active === 'first-aid'}
        onPress={() => {
          setActive('first-aid');
          onClose();
          navigate('SampleCourse', { slug: 'first-aid' });
        }}
      />

      <Drawer.Item
        label="Sewing"
        icon='information-outline'
        active={active === 'sewing'}
        onPress={() => {
          setActive('sewing');
          onClose();
          navigate('SampleCourse', { slug: 'sewing' });
        }}
      />


      {/* add more Drawer.Item here if needed */}
    </Drawer.Section>
  );
}
