import {Platform, StyleSheet, Text, View, Share,  StatusBar, TouchableHighlight, TouchableOpacity, Image} from 'react-native';

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { InterstitialAdManager, NativeAdsManager,  BannerView, AdSettings  } from 'react-native-fbads';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const advert2 = firebase.admob().rewarded('ca-app-pub-7564761287983180/3487803770')
const advert = firebase.admob().interstitial('ca-app-pub-7564761287983180/2669546126')
const advert3 = firebase.admob().interstitial('ca-app-pub-7564761287983180/6819725889')
const advert4 = firebase.admob().interstitial('ca-app-pub-7564761287983180/1567399207')
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
    advert3.loadAd(request.build())

    advert3.on('onAdLoaded', () => {
       console.log('Advert2 ready to show.')
    })
    
    advert3.show()
    this.props.navigation.navigate('ScreenOne' )
  }


  share = () => {
    advert4.loadAd(request.build())

  advert4.on('onAdLoaded', () => {
     console.log('Advert2 ready to show.')
  })
  
  advert4.show()
    Share.share({
      message: 'ಚೆಕ್ out ಟ್ ಮೊಡಿಕೇರ್ ಉತ್ಪನ್ನಗಳು - https://play.google.com/store/apps/details?id=com.modicareproductskannada&hl=en',
      url: 'https://play.google.com/store/apps/details?id=com.modicareproductskannada&hl=en',
      title: 'ನಿಮ್ಮ ಸ್ವಂತ ವ್ಯವಹಾರವನ್ನು ಪ್ರಾರಂಭಿಸಿ'
    }, {
      // Android only:
      dialogTitle: 'ಅಪ್ಲಿಕೇಶನ್ ಹಂಚಿಕೊಳ್ಳಿ',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }


  render() {
    const { navigate } = this.props.navigation
    return (
        <View style={styles.mainContainer}>
               <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>ಮನೆ</Text>
                    <TouchableOpacity style={styles.toolbarButton}onPress={() => this.share()}>
                    <Image style={{width:30,marginLeft:5,  height:30}}source={require('../images/share.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>

 
                    <View style={styles.messageBox}>
                       
                            <Text style={styles.topText}>ಸ್ವಾಗತ ಸಂದೇಶ</Text>
                       
                            <Text style={styles.messageBoxBodyText}>ಹಲೋ, ನಿರ್ದಿಷ್ಟ ಬೆಲೆಗಳ ಪಟ್ಟಿ, ವ್ಯವಹಾರದ ಪರಿಮಾಣದ ಬಿಂದುಗಳು ಮತ್ತು ಮೋಡಿಕೇರ್ ಉತ್ಪನ್ನಗಳ ಪ್ರಮಾಣಗಳ ಬಗ್ಗೆ ತಿಳಿಯಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುವ ಅಪ್ಲಿಕೇಶನ್ ಇಲ್ಲಿದೆ. ನೀವು ಉತ್ಪನ್ನಗಳ ಚಿತ್ರಗಳನ್ನು ಸಹ ಪರಿಶೀಲಿಸಬಹುದು. ಈ ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳು ಮೊಡಿಕೇರ್ ವಿತರಣಾ ಹಂತದಲ್ಲಿ ಲಭ್ಯವಿದೆ. ಆದ್ದರಿಂದ, ಪ್ರಾರಂಭಿಸಲು, ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ</Text>
                            <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.goToProducts()}>
            <Text style={styles.fullWidthButtonText}>ಪ್ರಾರಂಭಿಸೋಣ</Text>
            </TouchableHighlight>
            <Text style={styles.messageBoxBodyText2}>ನೀವು ಮೋಡಿಕೇರ್‌ಗೆ ಸಂಬಂಧಿಸಿದ ಯಾವುದೇ ಪ್ರಶ್ನೆಯನ್ನು ಹೊಂದಿದ್ದರೆ, ನೀವು ನನ್ನನ್ನು + 917975913409 ಗೆ ಕರೆ ಮಾಡಬಹುದು</Text>
            <Text style={styles.messageBoxBodyText2}>If you want to join modicare, whatsapp your adhaar card on +918837826904</Text>
                    </View>
                    
                </View>
                <View style={styles.footer}>
       <Banner
       style={{alignSelf:'center',marginLeft:15}}
    size={"SMALL_BANNER"}
  unitId={"ca-app-pub-7564761287983180/4660466404"}
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