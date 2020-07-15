import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/screens/home/home';
import DetailsScreen from './app/screens/details/details';  
import CreatePostScreen from './app/screens/post/CreatePost';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Create Post" component={CreatePostScreen}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;