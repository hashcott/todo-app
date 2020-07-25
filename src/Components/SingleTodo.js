import React from "react";

import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;

const SingleTodo = (props) => {
  const { id, body, isCompleted } = props.route.params.updatedTodo;

  const image = isCompleted
    ? require("../../assets/cat-heart.gif")
    : require("../../assets/cat-please.gif");
  const text = isCompleted
    ? "Hí hí bạn đã làm xong công việc rùi <3 cưng bé Mèo nào <3"
    : "Huhu bạn chưa làm xong việc làm nhanh lên rùi phục vụ QUÀNG THƯỢNG :3 ";
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 32, marginBottom: 10 }}>
        {body}
      </Text>
      <Text style={{ color: "#fff", marginBottom: 10, textAlign: "center" }}>
        {text}
      </Text>
      <Image style={styles.img} resizeMode="cover" source={image} />
    </View>
  );
};

export default SingleTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#010920",
    paddingTop: 50,
  },
  img: { width: WIDTH - 100, height: "70%" },
});
