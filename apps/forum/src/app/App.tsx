import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Tab = createBottomTabNavigator()

function myTabs() {
  return (<Tab.Navigator>
    <Tab.Screen name={"Home"}></Tab.Screen>
    <Tab.Screen name={"About"}></Tab.Screen>
  </Tab.Navigator>);
}

export const App = () => {
  return (
    <>
      <View style={styles.actionbarStyle}>
        <Text style={styles.actionbarHeading}>Hello</Text>
      </View>
      <View style={styles.bodyContainer}></View>
    </>
  );
};
const styles = StyleSheet.create({
  actionbarStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  actionbarHeading: {
    alignSelf:'center'
  },
  bodyContainer: {
    flex: 1,
  },
});

export default App;
