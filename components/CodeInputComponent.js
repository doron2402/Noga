import React, { useState } from "react";
import { Alert, TextInput, Button, Text, StyleSheet, View } from 'react-native';

export default function (props) {
  const [code, onChangeCode] = useState('');
  const submitCode = () => {
    //onChangeCode(code)
    if (code.length !== 4 || /^\d+$/.test(code) === false) {
      Alert.alert('קוד שגוי נסה שנית')
      return;
    }
    Alert.alert(`Code: ${code}`);
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.codeTitle}>הכנס את ארבעת הספרות ששלחנו לך במייל</Text>
      <TextInput
        placeholder="1234"
        style={styles.emailInput}
        maxLength={4}
        value={code}
        onChangeText={onChangeCode}
        keyboardType='numeric'
        />
        <Button
          title="שלח"
          onPress={submitCode}
          style={styles.codeBtn}
        />
        <Button
          title="חזרה למסך הקודם"
          onPress={() => { props.setHideShow(true) }}
          style={styles.codeBtn}
        />
    </View>

  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 30
  },
  codeTitle: {
    textAlign: 'center',
    fontSize: 18
  },
  codeBtn: {
    fontSize: 15
  },
  emailInput: {
    padding: 10,
    margin: 10,
    fontSize: 20,
    minWidth: '80%',
    borderWidth: 1,
    borderColor: '#cccccc',
    textAlign: 'center'
  }
});

