import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SPACING } from "src/helpers/constants";

const { width } = Dimensions.get("window");
const sizes = ["S", "M", "L"];

const Info = ({ coffee }: any) => {
  const [activeSize, setActiveSize] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      <Text style={styles.description}>Description</Text>
      <Text style={styles.text} numberOfLines={3}>{coffee.description}</Text>
      <View style={styles.sizes}>
        <Text style={styles.description}>Size</Text>
        <View style={styles.wrapper}>
          {
            sizes.map(size => (
              <TouchableOpacity
                key={size}
                onPress={() => setActiveSize(size)}
                style={[styles.size, activeSize === size && styles.activeSize]}
              >
                <Text style={[styles.sizeName, activeSize === size && { color: COLORS.primary }]}>
                  {size}
                </Text>
              </TouchableOpacity>
            ))
          }
        </View>
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    padding: SPACING
  },
  description: {
    color: COLORS["white-smoke"],
    fontSize: SPACING * 1.7,
    marginBottom: SPACING
  },
  text: {
    color: COLORS.white
  },
  sizes: {
    marginVertical: SPACING * 2
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  size: {
    borderWidth: 2,
    paddingVertical: SPACING / 2,
    borderRadius: SPACING,
    backgroundColor: COLORS['dark-light'],
    width: width / 3 - SPACING * 3,
    alignItems: 'center'
  },
  activeSize: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.dark
  },
  sizeName: {
    color: COLORS["white-smoke"],
    fontSize: SPACING * 1.9
  }
});
