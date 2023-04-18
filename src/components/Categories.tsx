import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { categories, COLORS, SPACING } from "../helpers/constants";

const Categories = ({ onChange }: any) => {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const handlePress = (id: number) => {
    setActiveCategoryId(id);
    onChange(id);
  };
  return (
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={(item: any) => item.id}
      contentContainerStyle={{ marginVertical: SPACING }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ marginRight: SPACING * 2, alignItems: "center" }}
          onPress={() => handlePress(item.id)}
        >
          <Text
            style={[
              { color: COLORS.secondary, fontSize: SPACING * 2 },
              activeCategoryId === item.id && { color: COLORS.primary }
            ]}>
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View style={{
              height: SPACING,
              width: SPACING,
              backgroundColor: COLORS.primary,
              borderRadius: SPACING / 2,
              marginTop: SPACING / 2
            }} />
          )}
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;
