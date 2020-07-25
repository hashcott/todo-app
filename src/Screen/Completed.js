import React from "react";

import { StyleSheet, View } from "react-native";
import AddTodo from "../containers/AddTodo";
import VisibleTodos from "../containers/VisibleTodos";

const Completed = (props) => {
  return (
    <View style={styles.container}>
      <AddTodo />
      <View style={{ flex: 0.8 }}>
        <VisibleTodos filter="COMPLETED" navigation={props.navigation} />
      </View>
    </View>
  );
};

export default Completed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#010920",
    paddingTop: 50,
  },
});
