import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import LoginPage from './LoginPage';  // Adjust the path if necessary
import ClientList from './Compenents/ClientList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ClientList/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
