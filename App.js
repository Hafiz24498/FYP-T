import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DoctorLogin from './DoctorAuthScreen/DoctorLogin';
import DoctorRegister from './DoctorAuthScreen/DoctorRegister';
import DoctorRoute from './DoctorScreen/DoctorRoute';

const Stack = createNativeStackNavigator();

const Auth =() => {
  return (
    <Stack.Navigator initialRouteName="DoctorLogin">
        <Stack.Screen name="Login" component={DoctorLogin} 
          options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={DoctorRegister} 
          options={{ headerShown: false}}/>
      </Stack.Navigator>
  
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DoctorRoute"
          component={DoctorRoute}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}