import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

export default function App() {
  const [secondsLeft, setSecondsLeft] = useState(120)
  const [timerOn, setTimerOn] = useState(false)

  // useEffect(() => {
  //   if (timerOn)
  //     startTimer();
  //   else
  //     BackgroundTimer.stopBackgroundTimer();

  //   return () => {
  //     BackgroundTimer.stopBackgroundTimer()
  //   }
  // }, [timerOn]);

  useEffect(() => {
    if (secondsLeft === 0)
      BackgroundTimer.stopBackgroundTimer()
  }, [secondsLeft]);

  const displayTime = () => {
    let mins = Math.floor(secondsLeft / 60 % 60)
    let seconds = Math.floor(secondsLeft % 60)

    let displayMins = mins < 10 ? '0' + mins : mins
    let displaySeconds = seconds < 10 ? '0' + seconds : seconds

    return displayMins + ':' + displaySeconds
  };

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft((secs) => {
        if (secs > 0)
          return secs - 1
        else
          return 0
      })
    }, 1000)
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to ToothFlex!</Text>
      <Text style={styles.time}>{displayTime()}</Text>
      <TouchableOpacity style={styles.roundButton} onPress={() => setTimerOn((current) => !current)}>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    textAlign: 'center',
    fontSize: 30,
  },
  roundButton: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange'
  }
});
