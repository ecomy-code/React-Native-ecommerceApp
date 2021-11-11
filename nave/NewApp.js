import React from 'react';
import HomeStack from './HomeStack'


import { createStackNavigator } from "@react-navigation/stack";

import { Restaurant, OrderDelivery } from '../foodapp/screens'

const Stack = createStackNavigator();

const App = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: true
                }}
                initialRouteName={'Homex'}
            >
                <Stack.Screen options={{title:"ecomycr™"}} name="Homex" component={HomeStack} />
                <Stack.Screen options={{title:"Agregar productos"}} name="Restaurant" component={Restaurant} />
                <Stack.Screen options={{title:"Solicitar pedido"}}  name="OrderDelivery" component={OrderDelivery} />
            </Stack.Navigator>
    )
}

export default App;



