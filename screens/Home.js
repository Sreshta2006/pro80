import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import axios from "axios";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Image
              source={require('../assets/main-icon.png')}
              style={{ width: 150, height: 150 }}></Image>
            <Text style={styles.titleText}>Stellar App</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('DailyPic')}>
            <Text style={styles.routeText}>Daily Pic</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>

            <Image
              source={require('../assets/daily_pictures.png')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('SpaceCrafts')}>
            <Text style={styles.routeText}>Space Crafts</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>

            <Image
              source={require('../assets/space_crafts.png')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('StarMap')}>
            <Text style={styles.routeText}>Star Map</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>

            <Image
              source={require('../assets/star_map.png')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginLeft: 30,
    marginTop: 70,
    marginRight: 30,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  routeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1,
  },
  iconImage: {
    position: 'absolute',
    height: 150,
    width: 150,
    resizeMode: 'contain',
    right: 0.2,
    top: -50,
  },
  routeImage: {
    position: 'absolute',
    top: -20,
    right: -15,
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
});
