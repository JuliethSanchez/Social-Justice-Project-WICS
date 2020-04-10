import * as WebBrowser from 'expo-web-browser';
//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableOpacity, Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';

const screen = Dimensions.get('window');
const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return { mins: formatNumber(mins), secs: formatNumber(secs)};
}

export default function HomeScreen() {
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { mins, secs } = getRemaining(remainingSecs);

  toggle = () => {
    setIsActive(!isActive);
  }

  reset = () => {
    setRemainingSecs(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs + 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
            source = {require('../assets/images/raindrop.png')}
            style={styles.welcomeImageRain}
          />
      <TouchableOpacity onPress={toggle} style={styles.button}>
      <View style={styles.absoluteView}>
          <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
          </View>
          <Image source={require('../assets/images/fish-button.png')}  style={styles.welcomeImageFish}/>
      </TouchableOpacity>
      <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
      <TouchableOpacity onPress={reset} style={[styles.buttonReset, styles.buttonRest]}>
        <Text style={[styles.buttonText, styles.buttonTextRest]}>Reset</Text>
      </TouchableOpacity>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
{/*         <View style={styles.welcomeContainer}>
          <Image //Commented out for now until figure out how to animate it
    //        source = {require('../assets/images/fish-button.png')}
    //        style={styles.welcomeImageFish}
          />
        </View> */}

        <View style={styles.getStartedContainer}>

          <Text style={styles.averageInfo}>You are down_____% from your daily average. </Text>

          <Text style={styles.gallonInfo}>
            Gallons of Water Saved: 25
          </Text>

        </View>

      </ScrollView>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
},
  container: {
    flex: 1,
    backgroundColor: '#b7e4f7',
  },
  button: {
    marginTop: 30,
    marginLeft: 100,
    borderColor: '#1fa4ad',
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 45,
    color: '#f7cbb7'
  },
  timerText: {
    marginTop: 30,
    marginLeft: 80,
    color: '#f7bbb7',
    fontSize: 90
  },
  buttonRest: {
    marginTop: 10,
    borderColor: "#1fa4ad",
    alignItems: 'center'
  },
  buttonTextRest: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 20,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImageRain: {
    width: 130,
    height: 100,
    resizeMode: 'contain',
    marginTop: 30,
    marginLeft: 140
  },
  welcomeImageFish: {
    width: 300,
    height: 240,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  averageInfo: {
    fontSize: 17,
    color: 'rgb(0, 0, 0)',
    lineHeight: 24,
    textAlign: 'center',
    padding: 5,
    textAlignVertical: 'center'
  },
  gallonInfo: {
    fontSize: 20,
    color: 'rgb(0, 0, 0)',
    lineHeight: 24,
    textAlign: 'center',
    padding: 5,
  },
  timerInfo: {
    fontSize: 40,
    color: 'rgb(0, 0, 0)',
    lineHeight: 45,
    textAlign: 'center',
    padding: 5,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
