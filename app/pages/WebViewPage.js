import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  WebView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class WebViewPage extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://www.google.com',
      status: 'No Page Loaded',
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      loading: true,
      scalesPageToFit: true,
    };
  }
  
  inputText = '';
  webview = null;

  handleTextInputChange = (event) => {
    let url = event.nativeEvent.text;
    if (!/^[a-zA-Z-_]+:/.test(url)) {
      url = 'http://' + url;
    }
    this.inputText = url;
  };

  render() {
    this.inputText = this.state.url;

    let source = (this.state.url == '') ? {html: HTML} : {uri: this.state.url};
    return (
      <View style={[styles.container]}>
        <View style={[styles.addressBarRow]}>
          <TouchableOpacity
            onPress={this.goBack}
            style={this.state.backButtonEnabled ? styles.navButton : styles.disabledButton}>
            <Text>
               <Icon size={20} name='ios-arrow-back-outline'></Icon>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.goForward}
            style={this.state.forwardButtonEnabled ? styles.navButton : styles.disabledButton}>
            <Text>
              <Icon size={20} name='ios-arrow-forward-outline'></Icon>
            </Text>
          </TouchableOpacity>
          <TextInput
            ref='urlInput'
            autoCapitalize="none"
            defaultValue={this.state.url}
            onSubmitEditing={this.onSubmitEditing}
            onChange={this.handleTextInputChange}
            clearButtonMode="while-editing"
            style={styles.addressBarTextInput}
          />
          <TouchableOpacity onPress={this.pressGoButton}>
            <View style={styles.goButton}>
              <Text>
                 <Icon size={20} name='md-arrow-round-forward'></Icon>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <WebView
          ref={webview => { this.webview = webview; }}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={source}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
          onMessage={this.onMessage}
        />
        <View style={styles.statusBar}>
          <Text style={styles.statusBarText}>{this.state.status}</Text>
        </View>
      </View>
    );
  }

  onMessage = (e) => {
    console.warn(e);
  };

  goBack = () => {
    this.webview.goBack();
  };

  goForward = () => {
    //this.refs['webview'].goForward();
    const script = 'document.write("Injected JS ")';  // eslint-disable-line quotes
    if (this.webview) {
      this.webview.injectJavaScript(script);
    }
  };

  reload = () => {
    this.webview.reload();
  };

  onShouldStartLoadWithRequest = (event) => {
    // Implement any custom loading logic here, don't forget to return!
    return true;
  };

  onNavigationStateChange = (navState) => {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true
    });
  };

  onSubmitEditing = (event) => {
    this.pressGoButton();
  };

  pressGoButton = () => {
    var url = this.inputText.toLowerCase();
    if (url === this.state.url) {
      this.reload();
    } else {
      this.setState({
        url: url,
      });
    }
    // dismiss keyboard
    this.refs['urlInput'].blur();
  };
}

class Button extends React.Component {
  _handlePress = () => {
    if (this.props.enabled !== false && this.props.onPress) {
      this.props.onPress();
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._handlePress}>
        <View style={styles.button}>
          <Text>{this.props.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Hello Static World</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
      }
      h1 {
        padding: 45px;
        margin: 0;
        text-align: center;
        color: #33f;
      }
    </style>
  </head>
  <body>
    <h1 id="demo">Hello Static World</h1>
    <button id="mybutton" onclick="window.postMessage('hello');">CLICK ME</button>
    
  </body>
</html>
`;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b5998',
    marginTop: 65,
  },
  addressBarRow: {
    flexDirection: 'row',
    padding: 8,
  },
  webView: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    height: 350,
  },
  addressBarTextInput: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderColor: 'transparent',
    borderRadius: 3,
    borderWidth: 1,
    height: 24,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    flex: 1,
    fontSize: 14,
  },
  navButton: {
    width: 20,
    padding: 3,
    height: 32,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderColor: 'transparent',
    borderRadius: 3,
  },
  disabledButton: {
    width: 20,
    height: 32,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderColor: 'transparent',
    borderRadius: 3,
  },
  goButton: {
    height: 32,
    width: 30,
    padding: 3,
    marginLeft: 8,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderColor: 'transparent',
    borderRadius: 3,
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    height: 22,
  },
  statusBarText: {
    color: 'white',
    fontSize: 13,
  },
  spinner: {
    width: 20,
    marginRight: 6,
  },
  buttons: {
    flexDirection: 'row',
    height: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    flex: 0.5,
    width: 0,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'gray',
  },
});