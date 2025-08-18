import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Platform, // <-- Import Platform
} from "react-native";

const Home = () => {
  const data = [
    {
      id: "1",
      title: "Item 1",
      description: "This is Item 1",
      Q: 1,
      amount: 10,
    },
    {
      id: "2",
      title: "Item 2",
      description: "This is Item 2",
      Q: 1,
      amount: 10,
    },
    {
      id: "3",
      title: "Item 3",
      description: "This is Item 3",
      Q: 1,
      amount: 10,
    },
    {
      id: "4",
      title: "Item 4",
      description: "This is Item 4",
      Q: 1,
      amount: 10,
    },
    {
      id: "5",
      title: "Item 5",
      description: "This is Item 5",
      Q: 1,
      amount: 10,
    },
    {
      id: "6",
      title: "Item 6",
      description: "This is Item 6",
      Q: 1,
      amount: 10,
    },
  ];

  const handleCardClick = (item) => {
    const message = `${item.title} clicked!`;
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      alert(message);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardClick(item)}>
      <View style={styles.cardColumn}>
        <View style={styles.itemContainerLeft}>
          <Text style={styles.itemText}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.itemContainerRight}>
          <Text style={styles.itemText}>Quantity: {item.Q}</Text>
          <Text style={styles.itemText}>Amount: {item.amount} RS</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    elevation: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemContainerLeft: {
    flex: 1,
    padding: 15,
  },
  itemContainerRight: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
});
