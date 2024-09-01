import React from 'react';
import { ProgressBar, MD3Colors } from 'react-native-paper';

interface CustomProgressBarProps {
  progress: number;
}

const MyProgressBar: React.FC<CustomProgressBarProps> = ({ progress}) => {
  return (
    <ProgressBar
      progress={progress}
      style={{ margin: 10 }}
    />
  );
};

export default MyProgressBar;
