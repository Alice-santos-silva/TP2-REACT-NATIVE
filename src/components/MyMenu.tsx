import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Menu, Button } from 'react-native-paper';

const MyMenu: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>Abrir Menu</Button>}
      >
        <Menu.Item onPress={() => {}} title="Opção 1" />
        <Menu.Item onPress={() => {}} title="Opção 2" />
        <Menu.Item onPress={() => {}} title="Opção 3" />
        <Menu.Item onPress={() => {}} title="Opção 4" />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyMenu;
