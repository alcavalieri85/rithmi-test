/** This is the Main Component that show the Login Page
 * the View wraps two different Component. A logo and 
 * the login form. 
 */

import React from 'react';
import { View } from 'react-native';
import styles from './src/app/styles/Style';
import Logo from './src/app/components/Logo';
import LoginForm from './src/app/components/LoginForm';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <LoginForm />
      </View>
    );
  }
}


