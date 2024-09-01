import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Feather} from '@expo/vector-icons'

import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';
import Login from '../screens/Login';
import NovoItem from '../screens/NovoItem';
import Perfil from '../screens/Perfil';
import RecuperacaoSenha from '../screens/RecuperacaoSenha';
import Registro from '../screens/Registro';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name='dashboard' component={Dashboard} options={{tabBarIcon: () => <Feather name='grid'/>}}/>

            <Tab.Screen name='home' component={Home} options={{tabBarIcon: () => <Feather name='home'/>}}/>

            <Tab.Screen name='login' component={Login} options={{tabBarIcon: () => <Feather name='log-in'/>}}/>

            <Tab.Screen name='novoitem' component={NovoItem} options={{tabBarIcon: () => <Feather name='plus'/>}}/>

            <Tab.Screen name='perfil' component={Perfil} options={{tabBarIcon: () => <Feather name='user'/>}}/>

            <Tab.Screen name='recuperacaosenha' component={RecuperacaoSenha} options={{tabBarIcon: () => <Feather name='lock'/>}}/>

            <Tab.Screen name='registro' component={Registro} options={{tabBarIcon: () => <Feather name='edit'/>}}/>

            <Tab.Screen name='settings' component={Settings} options={{tabBarIcon: () => <Feather name='settings'/>}}/>
        </Tab.Navigator>
    )
}