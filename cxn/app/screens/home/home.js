import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation, route }) {
    React.useEffect(() => {
        if (route.params?.post) { 
            // console.log(route.params?.post);
        }
    }, [route.params?.post]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Create post" onPress={() => navigation.navigate('Create Post')} />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
        </View>
    );
}

export default HomeScreen;