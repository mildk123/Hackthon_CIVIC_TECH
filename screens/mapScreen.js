import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


export default class LinksScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      region: {
        latitude: 24.918266,
        longitude: 67.102720,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [{
        latitude: 24.918266,
        longitude: 67.102720,
        title: 'My Marker',
        description: 'Here is my marker'
      }]
    }
  }

  static navigationOptions = {
    title: 'Map',
  };



  onRegionChange = (region) => {
    let text = region
  }

  render() {
    return (

        <MapView
          style={styles.Map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
          {this.state.markers.map(marker => (
            <Marker
              key={marker.title}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Map: {
    position: 'absolute',
    top: 0, 
    left: 0,
    bottom: 0,
    right: 0,
  }
});
