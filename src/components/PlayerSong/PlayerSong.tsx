import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Fonts } from "../../assets";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../utils";

const PlayerSong = () => {
  const [pause, setPause] = useState<boolean>(false);

  return (
    <View style={{width:'100%', height:'100%'}}>
      <View
        style={{
          width: "90%",
          height: 7,
          backgroundColor: Colors.subtitle,
          borderRadius: 20,
          alignSelf: "center",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            width: 15,
            height: 15,
            backgroundColor: Colors.secondary,
            borderRadius: 20,
            top: -5,
            right: -5,
          }}
        />
      </View>
      <Text
        style={{
          width: "85%",
          textAlign: "right",
          fontFamily: Fonts.Acme,
          // backgroundColor: "red",
          alignSelf: "center",
        }}
      >
        3:24 s
      </Text>

      <View
        style={{
          width: "100%",
          height: "13%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity>
          <Ionicons name="play-skip-back" size={30} color={Colors.secondary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPause(!pause)}>
          <Ionicons
            name={pause ? "pause-circle" : "play-circle"}
            size={70}
            color={Colors.secondary}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="play-skip-forward"
            size={30}
            color={Colors.secondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayerSong;
