import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Fonts, userProfile } from "../../assets";
import { Colors, width } from "../../utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Root } from "../../../app/ProfileScreen/ProfileScreen";

interface FavSongsProps {
  data: Root;
}

const FavSongs = ({ data }: FavSongsProps) => {
  const [colorHeart, setColorHeart] = useState<boolean>(true);

  return (
    <View style={style.container}>
      <TouchableOpacity style={{ width: "15%" }}>
        <Ionicons
          name="play"
          size={35}
          color={Colors.secondary}
          style={{ width: "100%" }}
        />
      </TouchableOpacity>
      <Image source={userProfile} style={style.image} />

      <View
        style={{
          width: "50%",
          paddingHorizontal: 15,
        }}
      >
        <Text
          style={{
            color: Colors.white,
            fontFamily: Fonts.Chilanka,
            fontSize: 17,
          }}
        >
          {data.key.infoTrack.name}
        </Text>
        <Text
          style={{
            color: Colors.subtitle,
            fontFamily: Fonts.ABeeZeeRegular,
            fontSize: 11,
          }}
        >
          {data.key.infoTrack.artist.name}
        </Text>
      </View>

      <TouchableOpacity
        style={{ width: "15%" }}
        onPress={() => setColorHeart(!colorHeart)}
      >
        <Ionicons
          name="heart"
          size={35}
          color={colorHeart ? "red" : Colors.white}
          style={{ width: "100%" }}
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: width * 0.95,
    height: 80,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
});

export default FavSongs;
