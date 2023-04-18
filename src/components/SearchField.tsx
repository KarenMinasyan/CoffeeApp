import React from 'react';
import { TextInput, View } from "react-native";
import { COLORS, SPACING } from "../helpers/constants";
import Icon from "react-native-vector-icons/Ionicons";
import { BlurView } from '@react-native-community/blur';

const SearchField = () => {
  return (
    <View style={{ borderRadius: SPACING, overflow: 'hidden' }}>
      <BlurView overlayColor={'#1f2126'}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TextInput
            style={{ width: '100%', color: COLORS.white, fontSize: SPACING * 1.7, padding: SPACING, paddingLeft: SPACING * 3.5 }}
            placeholder='Find Your Coffee...'
            placeholderTextColor={COLORS.light}
          />
          <Icon style={{ position: "absolute", left: SPACING }}  name='search' size={SPACING * 2} color={COLORS.light} />
        </View>
      </BlurView>
    </View>
  );
};

export default SearchField;
