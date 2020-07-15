import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'; 

// function Home() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//         </View>
//     );
// }

function Home({ navigation }) {
    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Contact')}
            />

            {/* <View style={styles.container}>
                <Menu navigate={navigate} />
            </View> */}
        </View>


    );
}

export default Home;



// export class Home extends React.Component {
//     static navigationOptions = {
//         header: null
//     };

//     render() {
//         const { navigate } = this.props.navigation;

//         return (
//             <View style={styles.container}>
//                 <Header message='Press to Login' />
//                 <Hero />
//                 <Menu navigate={navigate} />
//             </View>
//         );
//     }

// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
