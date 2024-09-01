import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

interface CustomCardProps {
  title: string;
  content: string;
}

const MyCard: React.FC<CustomCardProps> = ({ title, content }) => {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default MyCard;
