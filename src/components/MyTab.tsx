import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { useTheme } from 'react-native-paper';

const MyTab: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Tab 1' }
  ]);

  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case 'first':
        return (
          <View style={styles.scene}>
            <Text>Conteúdo da Tab </Text>
          </View>
        );
     
      default:
        return null;
    }
  };

  const theme = useTheme();

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#700052' }}
          style={{ backgroundColor: theme.colors.background }}
        />
      )}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyTab;
