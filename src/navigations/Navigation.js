import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import StackKinesiologist from './StackKinesiologist';
import StackNutricionist from './StackNutricionist';
import StackPhysicalTrainer from './StackPhysicalTrainer';
import StackTrainer from './StackTrainer';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, Icon} from '@rneui/base';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ResetPassword from '../screens/auth/ResetPassword';
import MyProfile from '../screens/auth/personalInformation/MyProfile';
import ChangePassword from '../screens/auth/personalInformation/ChangePassword';
import UpdateProfile from '../screens/auth/personalInformation/UpdateProfile';
import StackAdministrator from './StackAdministrator';
import StackSportman from './StackSportman';
import StackDeportologist from './StackDeportologist';



const Stack = createStackNavigator();

const AllStacks = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        options={({navigation}) => {
          return {
            title: 'Ingresar',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Register')}
                type="clear"
                icon={<Icon name="add" size={30} color="black" />}
              />
            ),
          };
        }}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{
          title: 'Registrarme',
        }}
        component={Register}
      />
      <Stack.Screen
        name="ResetPassword"
        options={{
          title: 'Restaurar',
        }}
        component={ResetPassword}
      />

      <Stack.Screen name="Nutricionist" component={StackNutricionist} options={{ headerShown: false }}/>
      <Stack.Screen name="Kinesiologist" component={StackKinesiologist} options={{ headerShown: false }}/>
      <Stack.Screen name="PhysicalTrainer" component={StackPhysicalTrainer} options={{ headerShown: false }}/>
      <Stack.Screen name="Trainer" component={StackTrainer} options={{ headerShown: false }}/>
      <Stack.Screen name="Administrator" component={StackAdministrator} options={{ headerShown: false }}/>
      <Stack.Screen name="Sportman" component={StackSportman} options={{ headerShown: false }}/>
      <Stack.Screen name="Deportologist" component={StackDeportologist} options={{ headerShown: false }}/>

  
    
      <Stack.Screen
        name="Profile"
        options={{
          title: 'Mi perfil',
        }}
        component={MyProfile}
      />
      <Stack.Screen
        name="UpdateProfile"
        options={{
          title: 'Actualizar perfil',
        }}
        component={UpdateProfile}
      />
      
      <Stack.Screen
        name="ChangePassword"
        options={{
          title: 'Cambiar contraseña',
        }}
        component={ChangePassword}
      />
     

    
    </Stack.Navigator>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#faf',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <AllStacks />
    </NavigationContainer>
  );
}
