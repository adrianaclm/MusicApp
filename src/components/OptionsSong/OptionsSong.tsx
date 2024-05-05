import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../utils";

interface OptionsSongProps {
  setColorHeart: () => void;
  colorHeart: boolean;
}

const OptionsSong = ({ colorHeart, setColorHeart }: OptionsSongProps) => {

  return (
    <View
      style={{
        width: "100%",
        height: "6%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <TouchableOpacity onPress={() => setColorHeart()}>
        <Ionicons
          name="heart"
          size={30}
          color={colorHeart ? "red" : Colors.subtitle}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="share-social" size={30} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default OptionsSong;
