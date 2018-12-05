import React from 'react'
import { StyleSheet, Platform, Image, Text, View ,Button} from 'react-native'
import firebase from 'react-native-firebase'
export default class Guardian extends React.Component {
    state = { currentUser: null }
    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }
    handleLogout = () => {
        firebase.auth().signOut()
        
    }
    render() {
        const { currentUser } = this.state
        return (
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                <Button title="Logout" onPress={this.handleLogout} />
                <Button title="open map" onPress={() =>this.props.navigation.navigate('MapView')} />
                <Button title="Home" onPress={() =>this.props.navigation.navigate('Navigation')} />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})