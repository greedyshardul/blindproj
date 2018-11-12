import React from 'react'
import { StyleSheet, Platform, Image, Text, View ,TouchableOpacity} from 'react-native'
import firebase from 'react-native-firebase'
export default class Main extends React.Component {
    clickGuardian = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Guardian' : 'Login')
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                <TouchableOpacity title="Guardian" onPress={this.clickGuardian} style={styles.button}>
                    <Text>Guardian</Text>  
                </TouchableOpacity>       
                <TouchableOpacity title="Blind" style={styles.button}>
                    <Text>Blind</Text>  
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        flex: 1, flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black'
        
        
    },
    button:{
        width:'50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black'
        //height:'100%'
    }
})