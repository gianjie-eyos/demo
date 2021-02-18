import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LandingScreen from '../containers/landingScreen';
import OtpScreen from '../containers/otpScreen';
import SalesScreen from '../containers/salesScreen';
import SalesAccount from '../containers/salesAccount';
import ModalScreen from '../containers/modalScreen';
import {CardStyleInterpolators} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function Index() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={RootTabNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen name="MyModal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Index;

const RootTabNavigator = () => {
  const getTabBarVisibility = (route) => {
    const routeIndex = route.state ? route.state.index : 0;
    return routeIndex === 0 ? true : false;
  };

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LandingScreen} />
      <Tab.Screen
        name="Sales"
        component={SalesStackNavigator}
        options={({route}) => ({tabBarVisible: getTabBarVisibility(route)})}
      />
      <Tab.Screen name="OTP" component={OtpScreen} />
      <Tab.Screen name="OTP1" component={OtpScreen} />
    </Tab.Navigator>
  );
};

const SalesStackNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Sale"
        component={SalesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SalesAccount"
        component={SalesAccount}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};
