import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './screens/Home';
import Progress from './screens/Progress';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: MaterialIcons,
    name: 'home',
  },
  Progress: {
    lib: MaterialIcons,
    name: 'insert-chart',
  },
  Files: {
    lib: MaterialIcons,
    name: 'folder',
  },
  Settings: {
    lib: MaterialIcons,
    name: 'settings',
  },
};

export default function Navigation(){
  return(
    // percore tab por tab e coloca as propriedades no route
    <Tab.Navigator
      tabBarOptions={{
        showLabel:false,
        style: {
          backgroundColor:'#18192e',
          borderTopColor: '#18192e'
        },
        activeTintColor: '#14a1fb',
        inactiveTintColor: '#4a4d76',
      }}

      screenOptions={({ route })=>({
        tabBarIcon: ({ color }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={30} color={color} />
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Files" component={Progress} />
      <Tab.Screen name="Settings" component={Progress} />
    </Tab.Navigator>
  );
}