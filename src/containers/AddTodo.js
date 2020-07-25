import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { createTodo } from "../actions/Todo";
import { Ionicons } from "@expo/vector-icons";
import uuid from "uuid-random";

const AddTodo = (props) => {
  const [text, setText] = useState("");
  const addTodo = (text) => {
    if (text.trim() === "") {
      alert("Bạn phải nhập dữ liệu");
      return;
    }
    props.dispatch(createTodo(uuid(), text));
    setText("");
  };
  return (
    <KeyboardAvoidingView
      style={{
        flexDirection: "row",
        marginHorizontal: 30,
        flex: 0.2,
        marginBottom: 30,
      }}
    >
      <TextInput
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() => addTodo(text)}
        value={text}
        placeholder="Eg. Do homework"
        style={{
          borderWidth: 1,
          borderColor: "#f2f2e1",
          backgroundColor: "#eaeaea",
          height: 50,
          flex: 1,
          padding: 5,
        }}
      />
      <TouchableOpacity onPress={() => addTodo(text)}>
        <View
          style={{
            height: 50,
            backgroundColor: "#eaeaea",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="md-add"
            size={30}
            style={{ color: "#de9595", padding: 10 }}
          />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default connect()(AddTodo);
