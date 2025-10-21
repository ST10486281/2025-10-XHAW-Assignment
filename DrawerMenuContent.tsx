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
        icon="information-outline"
        active={active === 'sewing'}
        onPress={() => {
          setActive('sewing');
          onClose();
          navigate('SampleCourse', { slug: 'sewing' });
        }}
      />

      <Drawer.Item
        label="Landscaping"
        icon="information-outline"
        active={active === 'landscaping'}
        onPress={() => {
          setActive('landscaping');
          onClose();
          navigate('SampleCourse', { slug: 'landscaping' });
        }}
      />

      <Drawer.Item
        label="Life Skills"
        icon="information-outline"
        active={active === 'life-skills'}
        onPress={() => {
          setActive('life-skills');
          onClose();
          navigate('SampleCourse', { slug: 'life-skills' });
        }}
      />

      <Drawer.Item
        label="Child Minding"
        icon="information-outline"
        active={active === 'child-minding'}
        onPress={() => {
          setActive('child-minding');
          onClose();
          navigate('SampleCourse', { slug: 'child-minding' });
        }}
      />

      <Drawer.Item
        label="Cooking"
        icon="information-outline"
        active={active === 'cooking'}
        onPress={() => {
          setActive('cooking');
          onClose();
          navigate('SampleCourse', { slug: 'cooking' });
        }}
      />

      <Drawer.Item
        label="Garden Maintenance"
        icon="information-outline"
        active={active === 'garden-maintenance'}
        onPress={() => {
          setActive('garden-maintenance');
          onClose();
          navigate('SampleCourse', { slug: 'garden-maintenance' });
        }}
      />



      {/* add more Drawer.Item here if needed */}
    </Drawer.Section>
  );
}
