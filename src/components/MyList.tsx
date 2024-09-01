import React from 'react';
import { List } from 'react-native-paper';

interface ListItem {
  title: string;
  description: string;
}

interface CustomListProps {
  items: ListItem[];
}

const MyList: React.FC<CustomListProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <List.Item
          key={index}
          title={item.title}
          description={item.description}
          style={{ margin: 10 }}
        />
      ))}
    </>
  );
};

export default MyList;
