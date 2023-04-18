import React, { useState } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { COFFEES, COLORS, SPACING } from "../helpers/constants";
import Icon from "react-native-vector-icons/Ionicons";
import SearchField from "../components/SearchField";
import Categories from "../components/Categories";
import { BlurView } from "@react-native-community/blur";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  return (
    <SafeAreaView>
      <ScrollView style={{ padding: SPACING }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{ width: SPACING * 4, height: SPACING * 4, borderRadius: SPACING, overflow: "hidden" }}>
            <BlurView overlayColor={"#1f2126"}>
              <View style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
                <Icon name="menu" size={SPACING * 2.5} color={COLORS.secondary} />
              </View>
            </BlurView>
          </TouchableOpacity>
          <View style={{ width: SPACING * 4, height: SPACING * 4, overflow: "hidden", borderRadius: SPACING * 2 }}>
            <BlurView overlayColor={"#1f2126"}>
              <View style={{ height: "100%", padding: SPACING / 2 }}>
                <Image style={{ height: "100%", width: "100%", borderRadius: SPACING * 2 }}
                       source={require("../assets/avatar.jpg")} />
              </View>
            </BlurView>
          </View>
        </View>
        <View style={{ width: "80%", marginVertical: SPACING * 3 }}>
          <Text style={{ color: COLORS.white, fontSize: SPACING * 3.5, fontWeight: "600" }}>Find the best coffee for
            you</Text>
        </View>
        <SearchField />
        <Categories onChange={(id: number) => setActiveCategoryId(id)} />
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {
            COFFEES.filter(coffee => {
              if (activeCategoryId === null) {
                return true;
              }
              return coffee.categoryId === activeCategoryId
            }).map(coffee => (
              <View key={coffee.id}
                    style={{
                      width: width / 2 - SPACING * 2,
                      marginBottom: SPACING,
                      borderRadius: SPACING * 2,
                      overflow: "hidden"
                    }}>
                <BlurView overlayColor={"#1f2126"}>
                  <View style={{ padding: SPACING }}>
                    <View style={{ justifyContent: "center" }}>
                      <TouchableOpacity style={{ height: 150, width: "100%" }}>
                        <Image source={coffee.image}
                               style={{ width: "100%", height: "100%", borderRadius: SPACING * 2 }} />
                        <View style={{
                          position: "absolute",
                          right: 0,
                          borderBottomStartRadius: SPACING * 3,
                          borderTopEndRadius: SPACING * 2,
                          overflow: "hidden"
                        }}>
                          <BlurView overlayColor={"#1f2126"}>
                            <View style={{ flexDirection: "row", padding: SPACING - 2 }}>
                              <Icon style={{ marginLeft: SPACING / 2 }} name="star" size={SPACING * 1.7}
                                    color={COLORS.primary} />
                              <Text style={{ color: COLORS.white, marginLeft: SPACING / 2 }}>{coffee.rating}</Text>
                            </View>
                          </BlurView>
                        </View>
                      </TouchableOpacity>
                      <Text style={{
                        color: COLORS.white,
                        fontWeight: "600",
                        fontSize: SPACING * 1.7,
                        marginTop: SPACING,
                        marginBottom: SPACING / 2
                      }}
                            numberOfLines={2}
                      >{coffee.name}</Text>
                      <Text style={{ color: COLORS.secondary, fontSize: SPACING * 1.2 }}
                            numberOfLines={1}>{coffee.included}
                      </Text>
                      <View style={{
                        marginVertical: SPACING / 2,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}>
                        <View style={{ flexDirection: "row" }}>
                          <Text style={{
                            color: COLORS.primary,
                            marginRight: SPACING / 2,
                            fontSize: SPACING * 1.6
                          }}>$</Text>
                          <Text style={{ color: COLORS.white, fontSize: SPACING * 1.6 }}>{coffee.price}</Text>
                        </View>
                        <TouchableOpacity
                          style={{ backgroundColor: COLORS.primary, padding: SPACING / 2, borderRadius: SPACING }}>
                          <Icon name="add" size={SPACING * 2}
                                color={COLORS.white} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </BlurView>
              </View>
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
