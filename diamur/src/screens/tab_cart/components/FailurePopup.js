import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { MSB16Button } from '../../../components/elements';
import { strings } from '../../../localization';
import { styles } from '../cart.style';

const CLICK = ' Click on the button below to view your order.';

export default function Failure(props) {
    const [visible, setVisible] = useState(true);
    const toggleOverlay = () => {
        setVisible(!visible);
        props.setFailure(false)
    };
    const handleContinueShopping = () => {
        props.handleContinueShopping();
        props.setFailure(false)
    };
    return (
        <Overlay
            isVisible={visible}
            onBackdropPress={toggleOverlay}
            backdropStyle={styles.backdropContainer}
            overlayStyle={styles.innerOverlay}>
            <View>
                <Icon
                    containerStyle={styles.closeOverlayOrder}
                    name="close"
                    color="#fff"
                    type="antdesign"
                    size={25}
                    onPress={toggleOverlay}
                />
                <Text style={styles.orderTitle}>{strings('tabCart.failure')}</Text>
                <Text style={styles.orderSubTitle}>{CLICK}</Text>
                <MSB16Button
                    title={strings('buttons.continueShopping')}
                    style={styles.orderHistoryBtn}
                    titleStyle={styles.continueText}
                    onPress={() => handleContinueShopping()}
                />
                <Text style={styles.orderSubTitle}>
                    {strings('tabCart.interested')}
                </Text>
                <Text style={[styles.orderSubTitle, styles.viewText]}>
                    {strings('tabCart.range')}
                </Text>
            </View>
        </Overlay>
    );
}
