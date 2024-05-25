import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import milk from "../data/milk";
import { MaterialIcons } from "@expo/vector-icons";

const HotSales = () => {
  const data = milk;
  return (
    <View >
      <Text style={{ fontSize: 16, fontWeight: "500", backgroundColor: 'blue' }}>Sản phẩm nổi bật</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable style={{ margin: 10 }} key={index}>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={{ aspectRatio: 5 / 6, height: 170 }}
              source={{ uri: item.image }}
            >
              <Text
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  fontSize: 27,
                  fontWeight: "900",
                  color: "white",
                }}
              >
                {item.offer} OFF
              </Text>
            </ImageBackground>
            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "500" }}>
              {item.name}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>{item.rating}</Text>
              <Text style={{ marginLeft: 3 }}>•</Text>
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>{item.price}đ</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default HotSales;

const styles = StyleSheet.create({});
