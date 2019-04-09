/**
 * The LoginForm component is a form to logiIn the user. Has a method to call
 * Firebase configurations, a State to get email, password or error message to show
 * and a Render two inputText and one Submit Button 
 */

import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { configurationFirebase, authEmailAndPassword } from '../configurations/FirebaseConf';
import styles from '../styles/Style';
import { ValidationLogIn } from '../utilities/ValidationForm';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        /*set the State with the datas needed.
        email and passowrd will value with the input text
        and errorMessage only if will have errors validations*/
        this.state = {
            email: '',
            password: '',
            errorMessage: null
        };
    }

    /**This Method has empty argument and its call when Onpress 
     * the submit Button's Login. 
     * Call configurationFirebase() to signin the Firebase account. 
     * Get the email and password from value of TextInput
     * Check if ValidationLogIn() return true. If does call authEmailAndPassword()
     * to render in Farebase Database
     * If not add to errorMessage an massage error key
     */
    handleLogin = () => {
        configurationFirebase();
        const email = this.state.email;
        const password = this.state.password;
        if (ValidationLogIn(email, password) === true)
            authEmailAndPassword(email, password);
        else
            this.setState({ errorMessage: ValidationLogIn(email, password) });
    }

    /**Render the View of the Login Form with two TextInput for the Email and Password
     * and a submit Button that with an Onpress call the handleLogin() function.
     */
    render() {
        return (
            <View style={styles.containerLogin}>
                {
                    this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>
                }
                <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <View style={styles.submit}>
                    <Button
                        color="#05BAC3"
                        title="INICIAR SESìON"
                        onPress={this.handleLogin} />
                </View>
            </View>
        );
    }
}