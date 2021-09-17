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
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';

export default class SpaceCraftsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aircrafts: {},
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios
      .get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/')
      .then((response) => {
        this.setState({ aircrafts: response.data.results });
        console.log(response.data.results);
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  renderItem = ({ item }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          elevation: 10,
        }}>
        <Image
          source={{ uri: item.agency.image_url }}
          style={{
            width: '100%',
            height: 200,
            // marginTop: 20,
            marginBottom: 15,
            marginRight: 10,
          }}></Image>

        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
        <Text style={{ color: '#696969', marginTop: 5 }}>
          {item.agency.name}
        </Text>
        <Text>Description</Text>
        <Text style={{ color: '#A9A9A9', marginLeft: 10, marginRight: 10, marginTop: 10 }}>
          {item.agency.description}
        </Text>
      </View>
    );
  };
  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.routeText}>Spacecrafts</Text>
          </View>
          <View style={styles.container}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.aircrafts}
              renderItem={this.renderItem}
            />
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
    fontSize: 40,
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
