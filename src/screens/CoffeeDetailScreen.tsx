import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Detail from "../components/Detail";
import Info from "../components/Info";
import Footer from "../components/Footer";

const CoffeeDetailScreen = ({ coffee }: any) => {
  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <Detail coffee={coffee} />
          <Info coffee={coffee} />
        </SafeAreaView>
      </ScrollView>
      <Footer coffee={coffee} />
    </>
  );
};

export default CoffeeDetailScreen;
