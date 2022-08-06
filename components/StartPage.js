import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from 'react-native';


import CodeInputComponent from './CodeInputComponent';
import EmailInputComponent from './EmailInputComponent';


export default function StartPage() {
  const [showEmailInput, setShowInputEmail] = useState(true)

  useEffect(() => {
    console.log('Listening: ', showEmailInput);

  }, [showEmailInput]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/kids.jpg')}
      />
      <Text style={styles.title}>ברוכים הבאים לאפליקציה של נוגה</Text>
      <Text style={styles.subTitle}>
      אפליקציה חינוכית ללימוד עברית
      </Text>

      {showEmailInput ? <EmailInputComponent
        setHideShow={setShowInputEmail}
      /> :  <CodeInputComponent
      setHideShow={setShowInputEmail}/>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30
  },
  tinyLogo: {
    margin: 20,
    maxWidth: 250,
    maxHeight: 250,
    borderRadius: 50
  },
  title: {
    fontSize: 22
  },
  subTitle: {
    fontSize: 14
  },
  startBtn: {
    marginTop: 30,
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
});
