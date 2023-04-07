import React from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../../redux/action';
import { WebView } from 'react-native-webview';

function Payment(props) {
    const onSuccessPaymentSuccess = (data) => { //on payment success
        props.setPaymentUrl(false)
        props.setThanku(true)
    }
    const onErrorPaymentFailure = (data) => { //on payment failure
        props.setPaymentUrl(false)
        props.setFailure(true)
    }
    const handleWebViewNavigationStateChange = (newNavState) => {
        const { url } = newNavState;
        if (!url) return;

        // one way to handle a successful form submit is via query strings
        if (url.includes('admin/login')) {
            webview.stopLoading();
            props.actions.paymentSuccessAction(props.orderNo, onSuccessPaymentSuccess, onErrorPaymentFailure)
        }
    };
    return (
        <WebView
            ref={(ref) => (webview = ref)}
            source={{ uri: props.payUrl }}
            onNavigationStateChange={handleWebViewNavigationStateChange}
        />
    );
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(Payment);