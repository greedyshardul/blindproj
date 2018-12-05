import React from 'react'
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import firebase from 'react-native-firebase'

export default class Login extends React.Component {
    state = { email: '', password: '', errorMessage: null, userInfo:'' }
    handleLogin = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Guardian'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }
    handleBlind=()=>{
        
    }
    //google signin for another day. libraries are loaded already.
   
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="email" 
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}/>
                        </Item>
                        <Item last>
                            <Input placeholder="Password" 
                            secureTextEntry
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}/>
                        </Item>
                        <Button onPress={this.handleLogin}>
                            <Text>Login</Text>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text>Sign up</Text>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Navigation')}>
                            <Text>Home</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>

        )
    }
}
/*import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
            <View style={styles.container}>
                <Text>Login</Text>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <Button title="Login" onPress={this.handleLogin} />
                <Button
                    title="Don't have an account? Sign Up"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />
                <Button title="Home" onPress={() =>this.props.navigation.navigate('Home')} />
            </View>


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
})
*/