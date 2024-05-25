import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MenuItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={{ margin: 10 }}>
      <Pressable
        onPress={() =>
          navigation.navigate("Menu", {
            id: item.id,
            name: item.name,
            image: item.image,
            rating: item.rating,
            time: item.time,
            address: item.address,
            cost_for_two: item.cost_for_two,
            cuisines: item.cuisines,
            menu: item.menu,
          })
        }
        style={{ flexDirection: "row" }}
      >
        <View>
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={{ aspectRatio: 5 / 6, height: 170 }}
            source={{ uri: item.image }}
          >
            <AntDesign
              style={{ position: "absolute", top: 10, right: 10, borderColor: 'gray' }}
              name="hearto"
              size={24}
              color="white"
            />
          </ImageBackground>
        </View>

        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
              {item.rating}
            </Text>
            <Text style={{ marginLeft: 3 }}>•</Text>
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
              {item.price}đ
            </Text>
          </View>
          <Pressable
            onPress={() => {
              // Handle the action when the "Mua Ngay" button is pressed
              console.log("Mua Ngay pressed for:", item.name);
            }}
            style={{
              backgroundColor: "#007bff",
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 6,
              marginTop: 10,
              alignSelf: "flex-start", // Align button to the left
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Mua Ngay</Text>
          </Pressable>
        </View>
      </Pressable>

      {/* "Mua Ngay" button */}

    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
