import React from 'react';
import { IconButton } from 'react-native-paper';

interface CustomIconButtonProps {
  iconName: string;
  onPress: () => void;
}

const MyIconButton: React.FC<CustomIconButtonProps> = ({ iconName, onPress }) => {
  return (
    <IconButton
      icon={iconName}
      size={24}
      onPress={onPress}
      style={{ margin: 10 }}
    />
  );
};

export default MyIconButton;
