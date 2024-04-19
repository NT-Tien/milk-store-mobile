import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import HotSales from "../components/HotSales";
import { Ionicons } from "@expo/vector-icons";
import MenuItem from "../components/MenuItem";
import milk from "../data/milk";
import Footer from "../components/Footer";

const HomeScreen = () => {
  const data = milk;
  return (
    <ImageBackground
      source={{
        uri:
          "https://png.pngtree.com/thumb_back/fh260/background/20210307/pngtree-celebration-background-for-baby-baptism-image_579382.jpg",
      }}
      style={styles.background}
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={{ marginTop: 50 }}>
          {/* Search Bar  */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 1,
              margin: 10,
              padding: 10,
              borderColor: "#C0C0C0",
              borderRadius: 7,
            }}
          >
            <TextInput
              style={{ fontSize: 17 }}
              placeholder="Search for milk or more"
            />
            <AntDesign name="search1" size={24} color="#E52B50" />
          </View>
          {/* <Carousel /> */}
          <Category />

          <HotSales />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              backgroundColor: "blue",
            }}
          >
            Sản phẩm Hidkid
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Pressable
              style={{
                marginHorizontal: 10,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#D0D0D0",
                padding: 10,
                borderRadius: 20,
                width: 120,
                justifyContent: "center",
              }}
            >
              <Text style={{ marginRight: 6 }}>Filter</Text>
              <Ionicons name="filter" size={20} color="black" />
            </Pressable>

            <Pressable
              style={{
                marginHorizontal: 10,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#D0D0D0",
                padding: 10,
                borderRadius: 20,
                justifyContent: "center",
                width: 120,
              }}
            >
              <Text>Sort By Rating</Text>
            </Pressable>

            <Pressable
              style={{
                marginHorizontal: 10,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#D0D0D0",
                padding: 10,
                borderRadius: 20,
                justifyContent: "center",
              }}
            >
              <Text>Sort By Price</Text>
            </Pressable>
          </View>
          <View>
            {/* Filter buttons */}
            {data.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </View>
          <Footer />
        </View>


      </ScrollView>

    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});
