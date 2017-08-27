import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
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
    backgroundColor: '#eee',
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
      tintColor="white"
      navigationBarStyle={{ backgroundColor: '#0a3678' }}
    >
      <Stack key="root" hideNavBar>
        <Tabs
          initial
          hideNavBar
          key="tabbar"
          gestureEnabled={false}
          showLabel={false}
          tabs
          tabBarStyle={styles.tabBarStyle}
          activeBackgroundColor="white"
          inactiveBackgroundColor="white"
        >
          <Scene initial key="tab1" component={PowerScreen} title="Tab #1" icon={PowerIcon} />
          <Scene key="tab2" component={PowerScreen} title="Tab #2" icon={PowerIcon} />
          <Scene key="tab3" component={PowerScreen} title="Tab #3" icon={PowerIcon} />
        </Tabs>
      </Stack>
    </Router>
  </View>
);
export default App;
