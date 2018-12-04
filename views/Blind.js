import React from 'react'
import { StyleSheet, Platform, Image, Text, View ,TouchableOpacity} from 'react-native'
export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                <TouchableOpacity title="Outdoor navigation" style={styles.button}>
                    <Text>Outdoor navigation</Text>  
                </TouchableOpacity>       
                <TouchableOpacity title="Indoor navigation" onPress={() =>this.props.navigation.navigate('Indoor')} style={styles.button}>
                    <Text>Indoor navigation</Text>  
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