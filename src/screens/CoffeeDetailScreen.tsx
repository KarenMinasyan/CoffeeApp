import React, { useState } from "react";
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS, SPACING } from "../helpers/constants";
import { BlurView } from "@react-native-community/blur";

const { height, width } = Dimensions.get("window");
const sizes = ["S", "M", "L"];

const CoffeeDetailScreen = ({ coffee }: any) => {
  const [activeSize, setActiveSize] = useState<string | null>(null);
  return (
   <>
     <ScrollView>
       <SafeAreaView>
         <ImageBackground
           source={coffee.image}
           style={{ height: height / 2 + SPACING * 2, justifyContent: "space-between" }}
           imageStyle={{ borderRadius: SPACING * 3 }}>
           <View style={{ flexDirection: "row", justifyContent: "space-between", padding: SPACING * 2 }}>
             <TouchableOpacity style={{ backgroundColor: COLORS.dark, padding: SPACING, borderRadius: SPACING * 1.5 }}>
               <Icon name="arrow-back" size={SPACING * 2} color={COLORS.light} />
             </TouchableOpacity>
             <TouchableOpacity style={{ backgroundColor: COLORS.dark, padding: SPACING, borderRadius: SPACING * 1.5 }}>
               <Icon name="heart" size={SPACING * 2} color={COLORS.light} />
             </TouchableOpacity>
           </View>
           <View style={{ borderRadius: SPACING * 3, overflow: "hidden" }}>
             <View style={{ padding: SPACING * 2 }}>
               <BlurView>
                 <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                   <View>
                     <Text style={{
                       fontSize: SPACING * 2,
                       color: COLORS.white,
                       fontWeight: "600",
                       marginBottom: SPACING
                     }}>{coffee.name}</Text>
                     <Text style={{
                       fontSize: SPACING * 1.8,
                       color: COLORS["white-smoke"],
                       fontWeight: "500",
                       marginBottom: SPACING
                     }}>{coffee.included}</Text>
                     <View style={{ flexDirection: "row", marginTop: SPACING }}>
                       <Icon name="star" size={SPACING * 1.5} color={COLORS.primary} />
                       <Text style={{ color: COLORS.white, marginLeft: SPACING }}>{coffee.rating}</Text>
                     </View>
                   </View>
                   <View style={{ width: "35%", justifyContent: "space-between", alignItems: "center" }}>
                     <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                       <View style={{
                         padding: SPACING / 2,
                         width: SPACING * 5,
                         height: SPACING * 5,
                         backgroundColor: COLORS.dark,
                         borderRadius: SPACING,
                         justifyContent: "center",
                         alignItems: "center"
                       }}>
                         <Icon name="cafe" size={SPACING * 2} color={COLORS.primary} />
                         <Text style={{ color: COLORS["white-smoke"], fontSize: SPACING }}>Coffee</Text>
                       </View>
                       <View style={{
                         padding: SPACING / 2,
                         width: SPACING * 5,
                         height: SPACING * 5,
                         backgroundColor: COLORS.dark,
                         borderRadius: SPACING,
                         justifyContent: "center",
                         alignItems: "center"
                       }}>
                         <Icon name="water" size={SPACING * 2} color={COLORS.primary} />
                         <Text style={{ color: COLORS["white-smoke"], fontSize: SPACING }}>Milk</Text>
                       </View>
                     </View>
                     <View style={{
                       backgroundColor: COLORS.dark,
                       padding: SPACING / 2,
                       borderRadius: SPACING / 2,
                       alignItems: "center",
                       justifyContent: "center"
                     }}>
                       <Text style={{ color: COLORS["white-smoke"], fontSize: SPACING * 1.3 }}>
                         Medium roasted
                       </Text>
                     </View>
                   </View>
                 </View>
               </BlurView>
             </View>
           </View>
         </ImageBackground>
         <View style={{ padding: SPACING }}>
           <Text
             style={{ color: COLORS["white-smoke"], fontSize: SPACING * 1.7, marginBottom: SPACING }}>Description</Text>
           <Text style={{ color: COLORS.white }} numberOfLines={3}>{coffee.description}</Text>
           <View style={{ marginVertical: SPACING * 2 }}>
             <Text style={{ color: COLORS["white-smoke"], fontSize: SPACING * 1.7, marginBottom: SPACING }}>Size</Text>
             <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
               {
                 sizes.map(size => (
                   <TouchableOpacity
                     key={size}
                     onPress={() => setActiveSize(size)}
                     style={[{
                       borderWidth: 2,
                       paddingVertical: SPACING / 2,
                       borderRadius: SPACING,
                       backgroundColor: COLORS['dark-light'],
                       width: width / 3 - SPACING * 3,
                       alignItems: 'center'
                     },
                       activeSize === size && { borderColor: COLORS.primary, backgroundColor: COLORS.dark }
                     ]}
                   >
                     <Text style={[{ color: COLORS["white-smoke"], fontSize: SPACING * 1.9 }, activeSize === size && { color: COLORS.primary }]}>
                       {size}
                     </Text>
                   </TouchableOpacity>
                 ))
               }
             </View>
           </View>
         </View>
       </SafeAreaView>
     </ScrollView>
     <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
       <View style={{ padding: SPACING, alignItems: 'center', justifyContent: 'center', paddingLeft: SPACING * 3 }}>
         <Text style={{ color: COLORS.white, fontSize: SPACING * 1.5 }}>Price</Text>
         <View style={{ flexDirection: 'row' }}>
           <Text style={{ color: COLORS.primary, fontSize: SPACING * 2 }}>$</Text>
           <Text style={{ color: COLORS.white, fontSize: SPACING * 1.7, marginLeft: SPACING / 2 }}>{coffee.price}</Text>
         </View>
       </View>
       <TouchableOpacity style={{ marginLeft: SPACING, backgroundColor: COLORS.primary, width: width / 2 + SPACING * 3, justifyContent: 'center', alignItems: 'center', borderRadius: SPACING * 2 }}>
         <Text style={{ color: COLORS.white, fontSize: SPACING * 2, fontWeight: '700' }}>Buy Now</Text>
       </TouchableOpacity>
     </SafeAreaView>
   </>
  );
};

export default CoffeeDetailScreen;
