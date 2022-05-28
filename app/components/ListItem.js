import React from "react";
import { Card, Button, Paragraph, Title } from "react-native-paper";
import { View } from "react-native";
import Wrapper from "./Wrapper";
function ListItem({ title, description, style }) {
  return (
    <Wrapper>
      <Card style={style}>
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{description}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </Wrapper>
  );
}

export default ListItem;
