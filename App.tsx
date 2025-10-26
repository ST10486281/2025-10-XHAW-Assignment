import React, { useRef, useState } from 'react';
import { ScrollView, View, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, IconButton, Portal, Modal, MD3LightTheme, Drawer } from 'react-native-paper';

import BreadcrumbHeader from './BreadcrumbHeader';
import DrawerMenuContent from './DrawerMenuContent';

import HomeScreen from './HomeScreen';
import SampleCourse from './SampleCourse';
import GetQuote from './GetQuote';
import ShortCourses from './ShortCourses';
import LongCourses from './LongCourses';
import Contact from './Contact';
import About from './About';

const Stack = createNativeStackNavigator();

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    background: '#ffffff',
    surface: '#ffffff',
  },
};

export default function App() {
  const navRef = useRef<any>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [active, setActive] = useState('home');
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const linking = {
    prefixes: ['http://localhost:19006', 'https://yourapp.com'],
    config: {
      screens: {
        Home: '',
        SampleCourse: 'course/:slug',
      },
    },
  };

  return (
    <PaperProvider theme={theme}>
      <ScrollView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
        <NavigationContainer ref={navRef} linking={linking}>
          <Stack.Navigator
            screenOptions={({ route, navigation }) => ({
              headerTitle: () => <BreadcrumbHeader route={route} navigation={navigation} />,
              headerLeft: () => null,
              headerRight: () =>
                isDesktop ? (
                  // Desktop horizontal menu
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    {[
                      { label: 'Home', name: 'Home' },
                      { label: 'Short Courses', name: 'ShortCourses' },
                      { label: 'Long Courses', name: 'LongCourses' },
                      { label: 'Get Quote', name: 'GetQuote' },
                      { label: 'Contact', name: 'Contact' },
                      { label: 'About', name: 'About' },
                    ].map((item) => (
                      <Drawer.Item
                        key={item.name}
                        label={item.label}
                        active={active === item.name}
                        onPress={() => {
                          setActive(item.name);
                          navigation.navigate(item.name);
                        }}
                        style={{ marginHorizontal: 2 }}
                      />
                    ))}
                  </View>
                ) : (
                  // Mobile hamburger menu
                  <IconButton icon="menu" onPress={() => setMenuVisible(true)} />
                ),
              contentStyle: { flex: 1 },
            })}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SampleCourse" component={SampleCourse} />
            <Stack.Screen name="GetQuote" component={GetQuote} />
            <Stack.Screen name="ShortCourses" component={ShortCourses} />
            <Stack.Screen name="LongCourses" component={LongCourses} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>

          {/* Drawer Menu (mobile only) */}
          {!isDesktop && (
            <Portal>
              <Modal
                visible={menuVisible}
                onDismiss={() => setMenuVisible(false)}
                contentContainerStyle={{
                  backgroundColor: 'white',
                  width: 300,
                  height: '100%',
                  alignSelf: 'flex-start',
                  paddingTop: 24,
                  justifyContent: 'flex-start',
                  margin: 0,
                }}
              >
                <DrawerMenuContent
                  active={active}
                  setActive={setActive}
                  onClose={() => setMenuVisible(false)}
                  navigate={(name, params) => navRef.current?.navigate(name, params)}
                />
              </Modal>
            </Portal>
          )}
        </NavigationContainer>
      </ScrollView>
    </PaperProvider>
  );
}
