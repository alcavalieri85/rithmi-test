/**
 * This Component Show the logo of the company rendering a Image tag
 * with stile and url logo.
 */

import React from 'react';
import { Image } from 'react-native';
import styles from '../styles/Style';

export default class Logo extends React.Component {
    render() {
        return (
            <Image
                style={styles.image}
                source={require('../../../assets/logo.jpg')}
            />
        );
    }
}