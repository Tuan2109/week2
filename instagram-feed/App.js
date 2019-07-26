import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.dropLayout}>
      </View>
      <View style={styles.navigation}>
        <Feather name="arrow-left" size={30} color="grey" />
        <Image
          source={require('./assets/icon_1.png')}
        />
      </View>
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Image
            source={
              require('./assets/ava.jpg')
            }
            style={styles.avata}
            resizeMode="cover"
          />
        </View>
        <View style={styles.headerText}>
          <View style={styles.headerRealName}>
            <Text style={styles.textName}>
              Tran Ho Tuan
            </Text>
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.textTitle}>
              Student
            </Text>
          </View>
          <View style={[styles.headerButton, styles.shadowColor]}>
            <View style={styles.buttonFollow}>
              <Button
                title="Follow"
                color="white"
                onPress={() => { alertMessage('follow') }}
              />
            </View>
            <View style={styles.buttonSend}>
              <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
                <MaterialIcons
                  name="send"
                  size={22}
                  color="white"
                  style={styles.shadowColor}
                  onPress={() => { alertMessage('send') }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.totalArea}>
        <View style={styles.photosTotal}>
          <View>
            <Text style={styles.totalNumber}> 9 </Text>
          </View>
          <View>
            <Text style={styles.totalText}>Photos</Text>
          </View>
        </View>
        <View style={styles.followersTotal}>
          <View>
            <Text style={styles.totalNumber}> 21 </Text>
          </View>
          <View>
            <Text style={styles.totalText}>Followers</Text>
          </View>
        </View>
        <View style={styles.followingTotal}>
          <View>
            <Text style={styles.totalNumber}> 1997 </Text>
          </View>
          <View>
            <Text style={styles.totalText}>Following</Text>
          </View>
        </View>
      </View>
      <View style={styles.imageArea}>
        <View style={styles.scrollImage}>
          <ScrollView contentContainerStyle={styles.containerScroll}>
            <View style={styles.listLeft}>
              {
                imgData.map((item) => (
                  renderImage(item, 'left')
                ))
              }
            </View>
            <View style={styles.listRight}>
              {
                imgData.map((item) => (
                  renderImage(item, 'right')
                ))
              }
            </View>
          </ScrollView>
        </View>
      </View >
      <View style={styles.dropLayoutFooter}>
      </View>
      <View style={styles.footer}>
        <Image
          source={require('./assets/icon_2.png')}
        />
        <Image
          source={require('./assets/icon_3.png')}
        />
        <Feather name="user" size={30} color="grey"></Feather>
      </View>
    </View >
  );
}

function alertMessage(message) {
  if (message == 'follow')
    return alert('followed');
  if (message == 'send')
    return alert('message sended');
}

function renderImage(item, opt) {
  if (opt == "left" && item.id % 2 != 0) {
    return <View>
      <Image
        source={
          item.imgSource
        }
        style={[styles.imageScroll]}
        resizeMode="cover"
      />
    </View>
  }
  if (opt == "right" && item.id % 2 == 0) {
    return <View>
      <Image
        source={
          item.imgSource
        }
        style={styles.imageScroll}
        resizeMode="cover"
      />
    </View>
  }
};

const imgData = [
  { id: 1, imgSource: require('./assets/a.jpg') },
  { id: 2, imgSource: require('./assets/b.jpg') },
  { id: 3, imgSource: require('./assets/c.jpg') },
  { id: 4, imgSource: require('./assets/4.jpeg') },
  { id: 5, imgSource: require('./assets/5.jpeg') },
  { id: 6, imgSource: require('./assets/6.jpeg') },
  { id: 7, imgSource: require('./assets/b.jpg') },
  { id: 8, imgSource: require('./assets/c.jpg') },
  { id: 9, imgSource: require('./assets/4.jpeg') },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //layout
  dropLayout: {
    flex: 0.030,
  },
  navigation: {
    marginHorizontal: 12,
    marginVertical: 10,
    flex: 0.070,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  totalArea: {
    flex: 0.1,
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 10,
  },
  imageArea: {
    flex: 0.525,
    marginHorizontal: 12,
    flexDirection: 'row',
  },
  dropLayoutFooter: {
    flex: 0.02,
  },
  footer: {
    flex: 0.055,
    justifyContent: 'space-around',
    marginHorizontal: 12,
    marginVertical: 10,
    flexDirection: 'row',
  },
  //header
  headerLogo: {
    flex: 0.4,
    alignItems: 'center',
  },
  avata: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
  },
  headerText: {
    marginVertical: 12,
    marginHorizontal: 12,
    flex: 0.6,
    flexDirection: 'column',
  },
  headerRealName: {
    flex: 0.40,
  },
  headerTitle: {
    flex: 0.30,
  },
  headerButton: {
    flex: 0.30,
    flexDirection: 'row',
  },
  textName: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'rgb(51,60,87)',
  },
  textTitle: {
    color: 'grey',
    fontSize: 20,
  },
  buttonFollow: {
    flex: 0.6,
    backgroundColor: 'rgb(71,113,246)',
    borderRadius: 20,
  },
  buttonSend: {
    marginLeft: 12,
    flex: 0.3,
    backgroundColor: 'rgb(120,213,250)',
    alignItems: 'center',
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 5,
  },
  shadowColor: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  // Total
  photosTotal: {
    flex: 0.4,
    alignItems: 'center',
  },
  followersTotal: {
    flex: 0.3,
    alignItems: 'center',
  },
  followingTotal: {
    flex: 0.3,
    alignItems: 'center',
  },
  totalNumber: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgb(51,60,87)',
  },
  totalText: {
    fontSize: 15,
    color: 'grey',
  },
  //list image
  scrollImage: {
    flexDirection: 'row',
    flex: 1,
  },
  containerScroll: {
    flexDirection: 'row',
  },
  listLeft: {
    flex: 0.5,
  },
  listRight: {
    flex: 0.5,
  },
  imageScroll: {
    width: null,
    height: 150,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
});
