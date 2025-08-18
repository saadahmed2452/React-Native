import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Platform,
  ActivityIndicator,
  FlatList,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";

import Constants from "expo-constants";

export default function AccountScreen() {
  const [location, setLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [predictions, setPredictions] = useState([]);

  const GOOGLE_MAPS_API_KEY = Constants.expoConfig.extra.googleMapsApiKey;

  // Default to San Francisco coordinates
  const defaultRegion = {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const fetchPredictions = async (text) => {
    if (!text.trim()) {
      setPredictions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
          text
        )}&key=${GOOGLE_MAPS_API_KEY}`
      );

      if (response.data.predictions) {
        setPredictions(response.data.predictions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectPlace = async (placeId, description) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`
      );

      // console.log("response", response);

      const location = response.data.result.geometry.location;

      const newLocation = {
        latitude: location.lat,
        longitude: location.lng,
        title: description,
      };

      setSelectedLocation(newLocation);
      setPredictions([]);
      setSearchQuery(description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        setIsLoading(false);
        return;
      }

      try {
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        setSelectedLocation({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          title: "Your Location",
        });
      } catch (error) {
        console.error("Error getting location:", error);
        setErrorMsg("Couldn't get current location");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{errorMsg}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Custom Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for places..."
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
            fetchPredictions(text);
          }}
          onSubmitEditing={() => {
            const selected = predictions.find(
              (item) =>
                item.description.toLowerCase() === searchQuery.toLowerCase()
            );
            if (selected) {
              handleSelectPlace(selected.placeId, selected.description);
            }
          }}
          returnKeyType="search"
        />
        <FlatList
          data={predictions}
          keyExtractor={(item) => item.placeId}
          renderItem={({ item }) => (
            <View style={styles.suggestionContainer}>
              <Text
                style={styles.suggestionText}
                onPress={() =>
                  handleSelectPlace(item.place_id, item.description)
                } // On press of suggestion
              >
                {item.description}
              </Text>
            </View>
          )}
          style={styles.suggestionList}
        />
      </View>

      {/* Map View */}
      <MapView
        style={styles.map}
        region={
          selectedLocation
            ? {
                latitude: selectedLocation.latitude,
                longitude: selectedLocation.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
            : defaultRegion
        }
        showsUserLocation={true}
      >
        {selectedLocation && (
          <Marker
            coordinate={selectedLocation}
            title={selectedLocation.title}
            description={selectedLocation.title}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchContainer: {
    position: "absolute",
    top: Platform.select({ ios: 50, android: 40 }),
    left: 20,
    right: 20,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    padding: 20,
  },

  suggestionList: {
    maxHeight: 200,
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    zIndex: 2, // Make sure it's above the map
  },
  suggestionContainer: {
    paddingVertical: 10,
  },
  suggestionText: {
    fontSize: 16,
    color: "#333",
  },
});
