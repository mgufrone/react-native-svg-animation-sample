import React from 'react';
import { StyleSheet, StatusBar, View, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundIcon from './Components/RoundIcon';
import {
  Scene,
  Router,
  Overlay,
  Tabs,
  Stack,
} from 'react-native-router-flux';
import { PowerScreen, PowerIcon } from './Screens/Power';
import { TemperatureScreen } from './Screens/Temperature';
import { IndicatorScreen } from './Screens/Indicator';

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
      backgroundColor="#333"
      barStyle="light-content"
    />
    <Router
      hideNavBar
      tintColor="white"
      navigationBarStyle={{ backgroundColor: '#0a3678' }}
    >
      <Overlay>
        <Stack key="root" hideNavBar hideTabBar>
          <Scene
            key="tab1"
            initial
            title=""
            component={TemperatureScreen}
            iconName={'cog'}
            renderRightButton={() => (<TouchableOpacity style={{ marginRight: 10 }} onPress={() => console.log('something')}>
              <Icon name="cog" size={25} color="#fff" />
            </TouchableOpacity>)}
          />
        </Stack>
      </Overlay>
    </Router>
  </View>
);
export default App;
