import {Platform, StyleSheet, Text, View, StatusBar, TouchableHighlight} from 'react-native';

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const advert2 = firebase.admob().rewarded('ca-app-pub-9784974231819956/4984604967')
const advert = firebase.admob().interstitial('ca-app-pub-6061663703850511/9597625632')
const request = new AdRequest();
request.addKeyword('foobar');
export default class Welcome extends Component {

  componentDidMount = () => {
    advert.loadAd(request.build());
    advert2.loadAd(request.build())

    advert2.on('onAdLoaded', () => {
       console.log('Advert2 ready to show.')
    })
    
    advert2.show()

advert.on('onAdLoaded', () => {
  console.log('Advert ready to show.');
});

setTimeout(() => {
  if (advert.isLoaded()) {
    console.log('working')
    advert.show();
  } else {
    console.log('error occured')
  }
}, 1000);
  }
  static navigationOptions = {
    title: "Welcome"
  }
  goToProducts = () => {
    this.props.navigation.navigate('ScreenOne' )
  }
  render() {
    const { navigate } = this.props.navigation
    return (
        <View style={styles.mainContainer}>
               <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>ಮನೆ</Text>
                    <Text style={styles.toolbarButton}></Text>
                </View>
                <View style={styles.content}>

 
                    <View style={styles.messageBox}>
                       
                            <Text style={styles.topText}>ಸ್ವಾಗತ ಸಂದೇಶ</Text>
                       
                            <Text style={styles.messageBoxBodyText}>ಹಲೋ, ನಿರ್ದಿಷ್ಟ ಬೆಲೆಗಳ ಪಟ್ಟಿ, ವ್ಯವಹಾರದ ಪರಿಮಾಣದ ಬಿಂದುಗಳು ಮತ್ತು ಮೋಡಿಕೇರ್ ಉತ್ಪನ್ನಗಳ ಪ್ರಮಾಣಗಳ ಬಗ್ಗೆ ತಿಳಿಯಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುವ ಅಪ್ಲಿಕೇಶನ್ ಇಲ್ಲಿದೆ. ನೀವು ಉತ್ಪನ್ನಗಳ ಚಿತ್ರಗಳನ್ನು ಸಹ ಪರಿಶೀಲಿಸಬಹುದು. ಈ ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳು ಮೊಡಿಕೇರ್ ವಿತರಣಾ ಹಂತದಲ್ಲಿ ಲಭ್ಯವಿದೆ. ಆದ್ದರಿಂದ, ಪ್ರಾರಂಭಿಸಲು, ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ</Text>
                            <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.goToProducts()}>
            <Text style={styles.fullWidthButtonText}>ಪ್ರಾರಂಭಿಸೋಣ</Text>
            </TouchableHighlight>
            <Text style={styles.messageBoxBodyText2}>ನೀವು ಮೋಡಿಕೇರ್‌ಗೆ ಸಂಬಂಧಿಸಿದ ಯಾವುದೇ ಪ್ರಶ್ನೆಯನ್ನು ಹೊಂದಿದ್ದರೆ, ನೀವು ನನ್ನನ್ನು + 919646407363 ಗೆ ಕರೆ ಮಾಡಬಹುದು</Text>
                    </View>

                </View>
                <View style={styles.footer}>
       <Banner
       style={{alignSelf:'center',marginLeft:20}}
    size={"LARGE_BANNER"}
  unitId={"ca-app-pub-6061663703850511/2125070544"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />
  </View>
            </View>
            
    );
  }
};
const styles = StyleSheet.create({
    toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:20,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1,
        fontSize:20                //Step 3
    },
    mainContainer:{
      flex:1                  //Step 1
  },
  content:{
      backgroundColor:'#ebeef0',
      flex:1                //Step 2
  },
  messageBox:{
    alignItems : 'center'
  },
  messageBoxBodyText:{
    margin:10,
    fontSize:18
  },
  messageBoxBodyText2:{
    margin:10,
    fontSize:18,
    fontWeight : 'bold'
  },
  topText:{
    fontSize:25,
    marginTop : 10,
    fontWeight : 'bold'
  },
  topText2:{
    fontSize:20,
    marginTop : 10,
    marginLeft:10
  },
  inputsContainer: {
    flex: 1,
    alignItems : 'center'
  },
  fullWidthButton: {
    backgroundColor: 'blue',
    height:50,
    width:'80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullWidthButtonText: {
    fontSize:24,
    color: 'white'
  },
  footer:{
    position:'absolute',
    bottom : 20,
    width : '100%'
  }
  });