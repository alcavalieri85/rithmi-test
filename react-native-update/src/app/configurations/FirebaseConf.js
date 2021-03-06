/**
 * Firebase Configutation.
 * Author: Alfonso Cavalieri
 * Version: 1.0
 */
import firebase from 'firebase';
import { Alert } from 'react-native';


/** Get all the data configuration to initialize Firebase. 
 * Return the access of Firebase account if it is not already done.
 * This statement allows to stay always in session if you are logged and avoid 
 * the duplicated errors*/
export const configurationFirebase = () => {
  const config = {
    apiKey: "<APIKEY>",
    authDomain: "rithmi-b826f.firebaseapp.com",
    databaseURL: "https://rithmi-b826f.firebaseio.com",
    projectId: "rithmi-b826f",
    storageBucket: "rithmi-b826f.appspot.com",
    messagingSenderId: "1014739173769"
  };

  if (!firebase.apps.length) {
    return firebase.initializeApp(config);
  }

}

/**this functions has two arguments. Email and password. 
 * Compare the arguments and if there are in the FireBase auth database 
 * show a Welcome alert with user email.
 * If not, beacuse the user in not in the database, show an Alert
 * with a text to sigin.
*/
export const authEmailAndPassword = (email, password) => {
  firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
    .then(() => {
      //Send a user a verification email
      const user = firebase.auth().currentUser;
      Alert.alert("Welcome " + user.email);
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password')
        Alert.alert("The Password is Incorrect, try with the right one!");
      else if(error.code === 'auth/user-not-found'){
        Alert.alert("The User is not Found. Sign-In!");
        return false;
      }
        
    });
}

/**this functions has two arguments. Email and password. 
 * Create a new account FireBase auth database 
 * show a Welcome alert with user email.
 * If not, beacuse some errors in the database, show an Alert
 * with a text to sigin.
*/
export const createEmailandPassword = (email,password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
    //Send a user a verification email
    const user = firebase.auth().currentUser;
    Alert.alert("Welcome " + user.email);
  }).catch(error => {
    // Handle Errors here.   
    Alert.alert(error.code);
  });
}


