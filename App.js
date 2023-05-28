import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{width:393}}>
        <Image source={require('./assets/4.jpg')}></Image>
      </View>
      <View style={{width:393}}>
        <Image source={require('./assets/1.jpg')}></Image>
      </View>
      <View style={{width:393}}>
        <Image source={require('./assets/2.jpg')}></Image>
      </View>
      <View style={{width:393}}>
        <Image source={require('./assets/3.jpg')}></Image>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
