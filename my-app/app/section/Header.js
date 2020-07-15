import React from "react";
import { StyleSheet, Text, View, Platform, Image } from "react-native";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      theVersion: Platform.Version
    };
  }

  toggleUser = () => {
    this.setState((previousState) => {
      return { isLoggedIn: !previousState.isLoggedIn };
    });
  }

  render() {
    let display = this.state.isLoggedIn ? "Sample User" : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Image style={styles.logoStyle} source={require('./img/Globo_logo_REV.png')}></Image>
        <Text style={styles.headText} onPress={this.toggleUser}>{display}</Text> 
      </View>
    )
  }
}


const styles = StyleSheet.create({
  headText: {
      textAlign: 'right',
      color: '#ffffff',
      fontSize: 20,
      flex: 1
  },
  headStyle: {
      paddingTop: 30,
      paddingRight: 10,
      backgroundColor: '#35605a',
      flex: 1,
      flexDirection: 'row',
      borderBottomWidth: 2,
      borderColor: '#000000' 
  },
  logoStyle:{
      flex: 1,
      width: undefined,
      height:undefined,
  }
});

// const styles = StyleSheet.create({
//   logoStyle: {
//     flex: 1,
//     width: undefined,
//     height: undefined
//   },
//   headText: {
//     textAlign: 'right',
//     color: '#fff',
//     fontSize: 20
//   },
//   headStyle: {
//     paddingTop: 30,
//     paddingBottom: 10,
//     paddingRight: 10,
//     flex: 1,
//     flexDirection: "row",
//     ...Platform.select({
//       ios: {
//         backgroundColor: '#35605a',
//       },
//       android: { backgroundColor: '#35605a' }
//     }),
//     // backgroundColor: Platform.OS === 'android' ? '#35605a' : '#35605a',
//   }
// });