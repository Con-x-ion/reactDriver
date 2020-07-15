import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, Button } from 'react-native';
import { State } from 'react-native-gesture-handler';

function Contact({ navigation }) {
   
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Your on Contact pages"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default Contact;

// export class Contact extends React.Component {
//     static navigationOptions = {
//         header: null
//     };
//     constructor(props) {
//         super(props);
//         this.state = {
//             msg: 'Enter Message',
//             name: 'Enter Name',
//             email: 'Enter your Email Address'
//         }
//     }

//     clearFields = () => this.setState({ name: '', msg: '', email: '' });

//     sendMessage = () => {
//         Alert.alert(this.state.name, this.state.msg);
//         this.props.navigation.goBack();
//     };


//     render() {
//         const { navigate } = this.props.navigation;
//         return (

//         );
//     }
// };



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10
    },
    multiInput: {
        flex: 2,
        width: '90%',
        paddingTop: 20
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    }
});



