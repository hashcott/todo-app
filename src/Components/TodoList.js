import React from "react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  Text,
  View,
} from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo, filter, navigation }) => {
  todos =
    filter == undefined
      ? todos
      : filter === "COMPLETED"
      ? todos.filter((todo) => todo.isCompleted)
      : todos.filter((todo) => !todo.isCompleted);
  const renderItem = ({ item }) => (
    <TodoItem
      _onPress={toggleTodo}
      _onPressLong={deleteTodo}
      {...item}
      navigation={navigation}
    />
  );
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <FlatList
          LisHeaderComponent={<View></View>}
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View></View>}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TodoList;
