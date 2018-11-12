import React from 'react'
import { StyleSheet, Platform, Image, Text, View ,TouchableOpacity} from 'react-native'
export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                <TouchableOpacity title="Navigation" onPress={() =>this.props.navigation.navigate('Navigation')} style={styles.button}>
                    <Text>Navigation</Text>  
                </TouchableOpacity>       
                <TouchableOpacity title="Camera" onPress={() =>this.props.navigation.navigate('Camera')} style={styles.button}>
                    <Text>Camera</Text>  
                </TouchableOpacity>
                </View>
                <View style={styles.row}>
                <TouchableOpacity title="SOS" style={styles.button}>
                    <Text>SOS</Text>  
                </TouchableOpacity>
                <TouchableOpacity title="Caller" onPress={() =>this.props.navigation.navigate('Caller')} style={styles.button}> 
                    <Text>Caller</Text>  
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

/*
<TouchableOpacity title="Navigation" onPress={() =>this.props.navigation.navigate('Loading')}/>
<TouchableOpacity title="Camera" onPress={() =>this.props.navigation.navigate('Camera')}/>

<TouchableOpacity title="SOS" onPress={() =>this.props.navigation.navigate('SOS')}/>
<TouchableOpacity title="Caller" onPress={() =>this.props.navigation.navigate('Caller')}/>
*/
