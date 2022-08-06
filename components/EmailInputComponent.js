
import React, { useState } from "react";
import { Alert, TextInput, Button, StyleSheet, View } from 'react-native';


/**
 * Takes a string and returns true if its a valid email address.
 * @param  {String}  email Email address to be tested for validity.
 * @return {Boolean}       True if valid email, false if not.
 */

 function isValidEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

export default function EmailInputComponent(props) {
  const [email, onChangeEmail] = useState("");

  const continueToNextPage = () => {
    if (!isValidEmail(email)) {
      return Alert.alert("'אימייל לא תקין'");
    }
    Alert.alert('שלחנו לך קוד לאימייל ' + email)
    props.setHideShow(false)
  }

  return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.emailInput}
          placeholder='כתובת דואר אלקטרוני'
          autoCapitalize='none'
          autoFocus={true}
          autoComplete='email'
          blurOnSubmit={true}
          onChangeText={onChangeEmail}
          value={email}
        />
        <Button
          style={styles.startBtn}
          title='לחץ כדי להמשיך'
          onPress={continueToNextPage}
        />
      </View>
      );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  emailInput: {
    padding: 10,
    margin: 10,
    fontSize: 20,
    minWidth: '80%',
    borderWidth: 1,
    borderColor: '#cccccc',
    textAlign: 'center'
  },
  startBtn: {
    marginTop: 30,
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
});
