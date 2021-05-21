import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Login = (props) => {
  const [state, setstate] = useState({userID: '', password: ''});
  return (
    <View style={styles.container}>
      <Text>Login - Detox</Text>
      <TextInput
        testID="userID"
        placeholder="Enter user name"
        onChangeText={text => setstate({...state, userID: text})}
      />
      <TextInput
        testID="passID"
        placeholder="Enter user password"
        secureTextEntry={true}
        onChangeText={text => setstate({...state, password: text})}
      />
      <Button
        testID="loginBtnID"
        title="Login"
        onPress={() => props.navigation.navigate('NewScreen')}
      />
    </View>
  );
};

const NewScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>New Screen</Text>
    </View>
  );
};
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Login}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NewScreen" component={NewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
