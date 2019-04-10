/**
 * This is the style used during this test. This properties 
 * are used for the Logo, InputText, Button and the containers
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#595566'
  },
  containerLogin: {
    alignItems: 'center',
    width: '100%'
  },
  image: {
    width: 140,
    height: 100,
    marginTop: 60
  },
  submit: {
    marginTop: 50,
    width: '70%'
  },
  formInput: {
    borderBottomWidth: 1.5, 
    marginLeft: 0,
    borderColor: 'white',
    width: '90%'
  },
  input: {
    borderWidth: 0
  },
  labelInput: {
    color: 'white',
  }
});