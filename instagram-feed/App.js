import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Feather name="arrow-left" size={50} color="black" />
      </View>
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Image
            source={
              require('./assets/ava.jpg')
            }
            style={styles.avata}
            resizeMode="contain"
          />
        </View>
        <View style={styles.headerText}>
          <View style={styles.headerRealName}>
            <Text>
              Tran Ho Tuan
            </Text>
          </View>
          <View style={styles.headerTitle}>
            <Text>
              Student
            </Text>
          </View>
          <View style={styles.headerButton}>
            <View style={styles.buttonFollow}>
              <Button
                title="Follow"
                color="white"
              />
            </View>
            <View style={styles.buttonSend}>
              <Feather name="send" size={25} color="black" />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.countArea}></View>
      <View style={styles.imageArea}>
        <ScrollView>

        </ScrollView>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}

// const imgData = [
//   { id: 1, imgSource: require('./assets/1.JPG') },
//   { id: 2, imgSource: require('./assets/2.JPG') },
//   { id: 3, imgSource: require('./assets/3.JPG') },
//   { id: 4, imgSource: require('./assets/4.JPG') },
//   { id: 5, imgSource: require('./assets/5.JPG') },
//   { id: 6, imgSource: require('./assets/6.JPG') }
// ];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 0.1,
  },
  header: {
    flex: 0.25,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  countArea: {
    flex: 0.1,
    backgroundColor: 'blue',
  },
  imageArea: {
    flex: 0.45,
    backgroundColor: 'green',
  },
  footer: {
    flex: 0.1,
  },
  headerLogo: {
    width: 150,
    height: 180,
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginVertical: 12,
    marginHorizontal: 12,
  },
  avata: {
    width: 150,
    height: 150,
    borderRadius: 23,
  },
  headerText: {
    marginVertical: 12,
    marginHorizontal: 12,
    width: 350,
    height: 180,
    flexDirection: 'column',
  },
  headerRealName: {
    height: 80,
    backgroundColor: 'blue',
  },
  headerTitle: {
    backgroundColor: 'yellow',
  },
  headerButton: {
    flexDirection: 'row',
  },
  buttonFollow: {
    backgroundColor: 'rgb(71,113,246)',
    width: 120,
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  buttonSend: {
    marginLeft: 12,
    width: 50,
    backgroundColor: 'rgb(120,213,250)',
  },
});
