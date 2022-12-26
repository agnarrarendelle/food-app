import { StackParamList } from "../App";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Cell, Section, TableView } from "react-native-tableview-simple";

const windowSize = Dimensions.get("window");

export const restaurants = [
  {
    title: "1th restaurant",
    tagline: "Desert, Ice cream, £££",
    eta: "10-30",
    imgUri: require("../img/1.png"),
    items: [
      {
        title: "food 1",
        contens: [
          { title: "Chocolate" },
          { title: "Vanilla" },
          { title: "Mint" },
        ],
      },
      {
        title: "food 2",
        contens: [{ title: "Tomata" }, { title: "Apple" }],
      },
    ],
  },
  {
    title: "2th restaurant",
    tagline: "Barbecure",
    eta: "30-50",
    imgUri: require("../img/2.png"),
    items: [
      {
        title: "food 3",
        contens: [{ title: "Beef" }, { title: "Pork" }],
      },
      {
        title: "food 4",
        contens: [{ title: "Chicken" }, { title: "Onion" }],
      },
    ],
  },
  {
    title: "3th restaurant",
    tagline: "Ramen",
    eta: "10-30",
    imgUri: require("../img/3.png"),
    items: [
      {
        title: "food 5",
        contens: [{ title: "Egg" }, { title: "Rice" }, { title: "Salt" }],
      },
      {
        title: "food 6",
        contens: [{ title: "Carrot" }, { title: "Noodle" }],
      },
    ],
  },
];

function HomeScreen(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <TableView>
          <Section header="" hideSeparator={true} separatorTintColor={"#ccc"}>
            {restaurants.map((r) => {
              return (
                <HomeScreenCell
                  key={r.title}
                  title={r.title}
                  tagline={r.tagline}
                  eta={r.eta}
                  imgUri={r.imgUri}
                  action={() =>
                    props.navigation.navigate("Menu", {
                      restaurantName: r.title,
                    })
                  }
                ></HomeScreenCell>
              );
            })}
          </Section>
        </TableView>
      </ScrollView>
    </SafeAreaView>
  );
}

interface CellProps {
  title: string;
  tagline: string;
  eta: string;
  imgUri: any;
  action: () => void;
}

const HomeScreenCell = (props: CellProps) => {
  return (
    <Cell
      // {...props}
      contentContainerStyle={CellStyles.container}
      highlightUnderlayColor="#ccc"
      onPress={props.action}
      cellContentView={
        <View>
          <View>
            <Image style={CellStyles.img} source={props.imgUri}></Image>
          </View>

          <View style={CellStyles.eta}>
            <Text style={CellStyles.etaText}>{props.eta}</Text>
            <Text style={CellStyles.etaText}>mins</Text>
          </View>

          <View style={CellStyles.titleView}>
            <Text style={CellStyles.titleText}>{props.title}</Text>
          </View>
          <View>
            <Text style={CellStyles.taglineText}>{props.tagline}</Text>
          </View>
        </View>
      }
    ></Cell>
  );
};

const CellStyles = StyleSheet.create({
  container: {
    height: 290,
    backgroundColor: "#e5e5e5",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  img: {
    width: windowSize.width,
    height: 140,
    borderRadius:10
  },
  eta: {
    backgroundColor: "white",
    position: "absolute",
    right: 40,
    top: 120,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  etaText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  titleView:{
    paddingTop:15,
    paddingBottom:15
  },
  titleText:{
    fontSize: 30,
    fontWeight: "bold",
  },
  taglineText:{
    color:"#717171"
  }
});

export default HomeScreen;
