import React from "react";
import { FlatList, Text } from "react-native";
import { Card, Button, Paragraph, Title } from "react-native-paper";
import ListItem from "../components/ListItem";

function List(props) {
  const listItem = [
    {
      id: 1,
      description: "sample dist",
      type: "char",
      title: "sample Title",
    },
    {
      id: 2,
      description: "sample dist",
      type: "char",
      title: "sample tile second",
    },
    {
      id: 3,
      description: "sample dist",
      type: "char",
      title: "sample tile second",
    },
    {
      id: 4,
      description: "sample dist",
      type: "char",
      title: "sample tile second",
    },
    {
      id: 2,
      description: "sample dist",
      type: "char",
      title: "sample tile second",
    },
  ];
  return (
    <>
      <FlatList
        style={{ width: "100%", height: "100%" }}
        data={listItem}
        keyExtractor={(list) => list.id.toString()}
        renderItem={({ item }) => {
          return (
            <ListItem
              title={item.title}
              description={item.description}
              type={item.type}
              style={{ marginTop: 5, marginBottom: 5 }}
            />
          );
        }}
      ></FlatList>
    </>
  );
}

export default List;
