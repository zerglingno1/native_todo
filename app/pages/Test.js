'use strict';

import React, { Component } from 'react';
import { 
  Image, 
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  LayoutAnimation,
  TouchableHighlight,
  View } from 'react-native';
import Util from '../utils/utils';
import Icon from 'react-native-vector-icons/Ionicons';

export default class extends Component{
  constructor() {
    super();
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>zzzzzzzzzzzzzz</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Util.size.height,
    width: Util.size.width,
  },
  reminderContainer: {
    height: Util.size.height-65,
    width: Util.size.width,
    borderRadius: 10,
    position: "absolute",
    top: 20,
    left: 0,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: -1,
      width: 0,
    }
  },
  reminderBg: {
    height: Util.size.height-65,
    width: Util.size.width,
    borderRadius: 10,
    resizeMode: "cover",
    opacity: 0.5,
  },
  reminderContent: {
    height: Util.size.height-65,
    width: Util.size.width,
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    left: 0,
  },
  reminderTitleContainer: {
    height: 65,
    width: Util.size.width,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center"
  },
  reminderTitle: {
    fontSize: 28,
    fontWeight: "300",
    textShadowColor: "#ccc",
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 1,
  },
  reminderListContainer: {
    flex: 1,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  reminderList: {
    flexDirection: "row",
    paddingLeft: 15,
    height: 45,
    width: Util.size.width,
    justifyContent: "space-between",
    alignItems: "center"
  },
  check: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#c6c6c6",
    width: 22,
    height: 22,
    borderRadius: 11,
    shadowOffset:{
        width: 0,
        height: 1,
    },
    shadowRadius: 1,
    shadowColor: '#aaa',
    shadowOpacity: 0.3,
    justifyContent:"center",
    alignItems:"center"
  },
  fill: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  input: {
    width: Util.size.width-50,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  inputText: {
    height: 43,
    color: "#363636",
  },
  addIcon: {
    paddingLeft: 5
  }
});

