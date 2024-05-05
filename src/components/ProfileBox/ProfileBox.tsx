import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Fonts, userProfile } from "../../assets";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../utils";

const ProfileBox = () => {
  return (
    <>
      <View
        style={{
          width: "100%",
          height: "25%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Image
          resizeMode="cover"
          source={userProfile}
          style={{
            width: "45%",
            height: "80%",
            borderRadius: 20,
            borderWidth: 1,
            borderColor: Colors.secondary,
          }}
        />

        <View
          style={{
            width: "45%",
            height: "80%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: Fonts.Acme, fontSize: 35 }}>@USER</Text>
          <Text style={{ fontFamily: Fonts.Alatsi, fontSize: 20 }}>
            user@mail.com
          </Text>
          <TouchableOpacity>
            <Ionicons name="pencil-outline" size={25} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ProfileBox;
