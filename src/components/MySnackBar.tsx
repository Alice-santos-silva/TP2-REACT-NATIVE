import React, { useState } from 'react';
import { Button, Snackbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const MySnackBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showSnackbar = () => setVisible(true);
  const hideSnackbar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={showSnackbar}>
        Show Snackbar
      </Button>
      <Snackbar
        visible={visible}
        onDismiss={hideSnackbar}
        duration={Snackbar.DURATION_SHORT} 
        action={{
          label: 'Undo',
          onPress: () => {
        
          },
        }}
      >
        This is a Snackbar message
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default MySnackBar;
