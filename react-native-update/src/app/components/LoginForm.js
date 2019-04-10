/**
 * The LoginForm component is a form to logiIn the user. Has a method to call
 * Firebase configurations, a State to get email, password or error message to show
 * and a Render two inputText and one Submit Button 
 */

import React from 'react';
import { Text, Image, View, Button } from 'react-native';
import { configurationFirebase, authEmailAndPassword } from '../configurations/FirebaseConf';
import styles from '../styles/Style';
import { ValidationEmail, ValidationPassword } from '../utilities/ValidationForm';
import FloatingLabel from 'react-native-floating-labels';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        /*set the State with the datas needed.
        email and passowrd will value with the input text
        and errorMessage only if will have errors validations*/
        this.state = {
            email: '',
            password: '',
            errorMessageEmail: null,
            errorMessagePassword: null
        };
    }

    /**This Method has empty argument and its call when Onpress 
     * the submit Button's Login. 
     * Call configurationFirebase() to signin the Firebase account. 
     * Get the email and password from value of TextInput
     * Check if ValidationEmail() and ValidationPassword() return true. 
     * If does call authEmailAndPassword() to render in Farebase Database
     * If not add to errorMessage an massage error key
     */
    handleLogin = () => {
        configurationFirebase();
        const email = this.state.email;
        const password = this.state.password;
        if (ValidationEmail(email) === true && ValidationPassword(password) === true)
            authEmailAndPassword(email, password);
        else if (ValidationEmail(email) !== true) {
            this.setState({ errorMessageEmail: ValidationEmail(email) });
            this.setState({ errorMessagePassword: null });
        }
        else if (ValidationEmail(password) !== true) {
            this.setState({ errorMessagePassword: ValidationPassword(password) });
            this.setState({ errorMessageEmail: null });
        }
    }

    /**Render the View of the Login Form with two TextInput for the Email and Password
     * and a submit Button that with an Onpress call the handleLogin() function.
     */
    render() {
        return (            
            <View style={styles.containerLogin}>
                {/* Text error showed when Email is wrong */}
                {
                    this.state.errorMessageEmail &&
                    <View style={{ width: '100%' }}>
                        <Image
                            style={styles.iconError}
                            source={{ uri: 'https://www.daviddenies.com/wp-content/uploads/2015/04/sign-computer-icon-symbol-signs-info-information.png' }}
                        />
                        <Text style={styles.labelError}>
                            {this.state.errorMessageEmail}
                        </Text>
                        <Image
                            style={styles.arrowError}
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Armed_forces_red_triangle.svg/200px-Armed_forces_red_triangle.svg.png' }}
                        />
                    </View>
                }
                <FloatingLabel
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={styles.formInput}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                >Email </FloatingLabel>

                {/* Text error showed when Password is wrong */}
                {
                    this.state.errorMessagePassword &&
                    <View style={{ width: '100%' }}>
                        <Image
                            style={styles.iconError}
                            source={{ uri: 'https://www.daviddenies.com/wp-content/uploads/2015/04/sign-computer-icon-symbol-signs-info-information.png' }}
                        />
                        <Text style={styles.labelError}>
                            {this.state.errorMessagePassword}
                        </Text>
                        <Image
                            style={styles.arrowError}
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Armed_forces_red_triangle.svg/200px-Armed_forces_red_triangle.svg.png' }}
                        />
                    </View>
                }
                <FloatingLabel
                    secureTextEntry
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={styles.formInput}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                >Password</FloatingLabel>

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