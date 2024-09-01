import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

interface RadioButtonGroupProps {
  options: { label: string; value: string }[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const MyRadioButton: React.FC<RadioButtonGroupProps> = ({ options, selectedValue, onSelect }) => {
  return (
    <View >
      {options.map((option) => (
        <View key={option.value}>
          <RadioButton
            value={option.value}
            status={selectedValue === option.value ? 'checked' : 'unchecked'}
            onPress={() => onSelect(option.value)}
          />
          <Text>{option.label}</Text>
        </View>
      ))}
    </View>
  );
};


export default MyRadioButton;
