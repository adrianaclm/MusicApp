import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import { FavSongs, FilterLists, ProfileBox } from "../../src/components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../src/utils";
import { router } from "expo-router";
import { getData } from "../../src/utils/AsyncStorage";
import { Fonts } from "../../src/assets";

export type Root = Array<{
  key: {
    infoTrack: trackInfo;
  };
}>;

export type trackInfo = {
  album: {
    mbid: string;
    title: string;
    url: string;
  };
  artist: {
    mbid: string;
    name: string;
    url: string;
  };
  duration: number;
  image: any;
  listeners: string;
  mbid: string;
  name: string;
  playcount: string;
  streamable: {
    "#text": string;
    fulltrack: string;
  };
  url: string;
  wiki: {
    content: string;
    published: string;
    summary: string;
  };
};

const ProfileScreen = () => {
  const navigation = () => router.back();
  const [data, setData] = useState<Root>();

  useEffect(() => {
    const fetchData = async () => {
      const storedData: Root = await getData("myArray");
      setData(storedData || []);
    };
    fetchData();
  }, []);

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ padding: 10, width: "10%" }}
          onPress={navigation}
        >
          <Ionicons
            name="arrow-back-outline"
            size={25}
            color={Colors.primary}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: Fonts.Acme,
            fontSize: 25,
            width: "90%",
            textAlign: "center",
          }}
        >
          Mi Cuenta
        </Text>
      </View>
      <ProfileBox />
      <FilterLists />

      {/* canciones*/}

      <FlatList
        data={data}
        renderItem={({ item, index }: any) => (
          <View style={{ flex: 1, paddingRight: 1 }}>
            <FavSongs key={index} data={item} />
          </View>
        )}
        keyExtractor={(item, index) => `item-${index}`}
      />
    </>
  );
};

export default ProfileScreen;
