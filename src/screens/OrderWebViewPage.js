import React from 'react';
import WebView from 'react-native-webview';

const OrderWebViewPage = (props) => {
  const link = props.route.params.param;
  return <WebView source={{uri: link}} />;
};

export default OrderWebViewPage;
