import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

const TodoItem = ({
  id,
  body,
  isCompleted,
  _onPress,
  _onPressLong,
  navigation,
}) => {
  const colorCir = (completed) => {
    return completed ? "red" : "green";
  };
  const textDecoration = (completed) => {
    return completed ? "line-through" : "none";
  };
  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => {
        _onPress(id);
        setTimeout(() => {
          navigation.navigate("SingleTodo", {
            updatedTodo: { id, body, isCompleted: !isCompleted },
          });
        }, 1000);
      }}
      onLongPress={() => {
        Alert.alert(
          "Delete",
          "Are you sure delete this To-do ?",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            { text: "OK", onPress: () => _onPressLong(id) },
          ],
          { cancelable: false }
        );
      }}
    >
      <View
        style={{ ...styles.status, backgroundColor: colorCir(isCompleted) }}
      />
      <Text
        style={{
          ...styles.body,
          textDecorationLine: textDecoration(isCompleted),
        }}
      >
        {body}
      </Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  body: {
    color: "#FBFDFD",
  },
  main: {
    backgroundColor: "#252E42",
    width: 300,
    height: 60,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  status: {
    width: 12,
    height: 12,
    borderRadius: 999,
    marginHorizontal: 20,
  },
});
