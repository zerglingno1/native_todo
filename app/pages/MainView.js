import React, { Component } from 'react';
import { 
  StyleSheet,
  Text, 
  TouchableOpacity, 
  TouchableHighlight,
  View,
  ScrollView,
  Image } from 'react-native';
import Util from '../utils/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import StopWatch from './StopWatch';
import Reminder from './Reminder';
import TestAsyncStorePerProduct from './TestAsyncStorePerProduct';
import TestAsyncStoreAllProduct from './TestAsyncStoreAllProduct';
import TestSqliteNative from './TestSqliteNative';
import WebViewPage from './WebViewPage';

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [{
        key: 0,
        title: 'TIME WATCH',
        component: StopWatch,
        icon: 'ios-stopwatch-outline',
        size: 100,
        color: '#ff856c',
        hideNav: false,
      }, {
        key: 1,
        title: 'REMINDER',
        component: Reminder,
        icon: 'ios-alarm-outline',
        size: 100,
        color: '#ff856c',
        hideNav: false,
      },  {
        key: 2,
        title: 'TEST ASYNCSTORAGE PER PRODUCT',
        component: TestAsyncStorePerProduct,
        icon: 'ios-construct-outline',
        size: 100,
        color: '#ff856c',
        hideNav: false,
      },  {
        key: 3,
        title: 'TEST ASYNCSTORAGE ALL PRODUCT',
        component: TestAsyncStoreAllProduct,
        icon: 'ios-settings-outline',
        size: 100,
        color: '#ff856c',
        hideNav: false,
      }, {
        key: 4,
        title: 'TEST SQLITE NATIVE',
        component: TestSqliteNative,
        icon: 'ios-archive-outline',
        size: 100,
        color: '#ff856c',
        hideNav: false,
      }, {
        key: 5,
        title: 'WEBVIEW',
        component: WebViewPage,
        icon: 'ios-globe-outline',
        size: 100,
        color: '#ff856c',
        hideNav: true,
      }],
    }
  }

  _goToPage(index) {
    const { menus } = this.state;
    const { navigator } = this.props;

    navigator.push({
      title: menus[index].title,
      index: index + 1,
      display: !menus[index].hideNav,
      component: menus[index].component,
    })
  }

  render() {
    const { menus } = this.state;
    const { title } = this.props;
    let boxs = menus.map((item, index) => {
      return(
        <TouchableHighlight key={item.key} style={[styles.touchBox, styles.touchBox1]} onPress={()=> this._goToPage(index)}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxText}> {item.title} </Text>
              <Icon size={item.size} name={item.icon} style={[styles.boxIcon,{color: item.color}]}></Icon>
          </View>
        </TouchableHighlight>
      );
    });
    return(
      <ScrollView style={styles.mainView} title={title}>
        <View style={styles.touchBoxContainer}>
          {boxs}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 60
  },
  touchBox: {
    width: Util.size.width/3.01333,
    height: Util.size.width/3.01333,
    backgroundColor: '#f3f3f3',
  },
  touchBox1: {
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ccc',
    borderRightWidth: Util.pixel,
    borderRightColor: '#ccc',
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Util.size.width/3.01333,
    height: Util.size.width/3.01333,
  },
  boxText: {
    position: 'absolute',
    bottom: 15,
    width: Util.size.width/3,
    textAlign: 'center',
    left: 0,
    backgroundColor: 'transparent'
  },
  boxIcon: {
    position: 'relative',
    top: -10
  },
  touchBoxContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    width: Util.size.width,
    borderLeftWidth: Util.pixel,
    borderLeftColor: '#ccc',
    borderRightWidth: Util.pixel,
    borderRightColor: '#ccc',
  },
});
