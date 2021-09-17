import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
  Alert,
  Platform,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';

export default class DailyPicScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: {},
    };
  }

  componentDidMount() {
    this.getAPOD();
  }

  getAPOD = () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=LpsmoRqEBvgsfAwROLnfs7BVgzVAAVmRZWYjHyPz'
      )
      .then((response) => {
        this.setState({ apod: response.data });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImage}>
          <View style={styles.titleContainer}>
            <Text style={styles.routeText}>Daily Pic</Text>
            <Text style={styles.titleText}>{this.state.apod.title}</Text>
            <TouchableOpacity
              style={styles.listContainer}
              onPress={() =>
                Linking.openURL(this.state.apod.url).catch((err) =>
                  console.error("Couldn't load page", err)
                )
              }>
              <View>
                <Image>
                  {' '}
                  source={require('../assets/play-video.png')} styles=
                  {{ width: 50, height: 50 }}{' '}
                </Image>
              </View>
               <Text style={styles.text}>{this.state.apod.explanation} </Text>
            </TouchableOpacity>
           
          </View>
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
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'pink',
     marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
  },
  routeText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
     marginLeft: 50,
    marginRight: 50,
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
    height: 200,
    width: 200,
    resizeMode: 'contain',
    right: 20,
    top: -80,
  },
  listContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 10,
    padding: 0,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
  },
  
});
