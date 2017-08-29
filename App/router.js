import React from 'react';
import { StyleSheet, StatusBar, View, Platform } from 'react-native';
import {
  Scene,
  Router,
  Tabs,
  Stack,
} from 'react-native-router-flux';
import { PowerScreen, PowerIcon } from './Screens/Power';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#333',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

export const App = () => (
  <View style={{ flex: 1 }}>
    <StatusBar
      backgroundColor="blue"
      barStyle="light-content"
    />
    <Router
      hideNavBar
      tintColor="white"
      navigationBarStyle={{ backgroundColor: '#0a3678' }}
    >
      <Stack key="root" hideNavBar hideTabBar>
        <Tabs
          hideNavBar
          key="tabbar"
          gestureEnabled={false}
          showLabel={Platform.OS === 'android'}
          tabs
          tabBarStyle={styles.tabBarStyle}
          activeBackgroundColor="white"
          inactiveBackgroundColor="red"
        >
          <Scene
            hideTabBar
            hideNavBar
            tabBarLabel="TAB #1"
            initial
            key="tab1"
            component={PowerScreen}
            title="Tab #1"
            icon={PowerIcon}
          />
          <Scene
            key="tab2"
            hideNavBar
            tabBarLabel="TAB #1"
            component={PowerScreen}
            title="Tab #2"
            icon={PowerIcon}
          />
          <Scene
            tabBarLabel="TAB #1"
            key="tab3"
            hideNavBar
            component={PowerScreen}
            title="Tab #3"
            icon={PowerIcon}
          />
        </Tabs>
      </Stack>
    </Router>
  </View>
);
export default App;
