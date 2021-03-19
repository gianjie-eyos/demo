import React from 'react';
import {View, Platform, Text} from 'react-native';
import WebView from 'react-native-webview';

const Index = props => {
  const link =
    Platform.OS === 'ios'
      ? 'https://files-tnc-id.emporioanalytics.com/emporio-analytics-Retail-PartnerTermsConditions-bahasaversion20-02-2019.pdf'
      : 'http://docs.google.com/gview?url=https://files-tnc-id.emporioanalytics.com/emporio-analytics-Retail-PartnerTermsConditions-bahasaversion20-02-2019.pdf&embedded=true';
  return (
    <View
      style={{
        flex: 1,
      }}>
      <WebView
        style={{flex: 1}}
        source={{uri: link}}
        startInLoadingState
        renderLoading={() => (
          <View
            style={{
              flex: 1,
              position: 'absolute',
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor: 'transparent',
            }}>
            <Text>Loading!!!</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Index;
