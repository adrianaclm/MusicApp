import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Colors } from "../../utils";
import Ionicons from "@expo/vector-icons/Ionicons";

const FilterLists = () => {
  const list = "Ultimas 10 Reproducciones";

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text>{list}</Text>

        <TouchableOpacity>
          <Ionicons name="chevron-down" size={15} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterLists;
