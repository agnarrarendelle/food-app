import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, Text ,View,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Cell, Section, TableView } from "react-native-tableview-simple";
import { StackParamList } from "../App";
import { restaurants } from "./HomeScreen";

type Props = NativeStackScreenProps<StackParamList, "Menu">;

const Menu = (props: Props) => {
  const items = restaurants.find(
    (r) => r.title === props.route.params.restaurantName
  )?.items;

  return (
    <SafeAreaView>
      <ScrollView>
        <TableView>
          {items?.map((item) => (
            <View key={item.title}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Section >
                {item.contens.map((c) => (
                  <Cell key={c.title} title={c.title}></Cell>
                ))}
              </Section>
            </View>
          ))}
        </TableView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    titleText:{
        paddingTop:10,
        paddingLeft:20,
        color:"#8d8d8d"
    }
})
export default Menu;
