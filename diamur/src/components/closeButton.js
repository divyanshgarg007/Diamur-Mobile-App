import React from 'react';

import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native';
import ICON_CLOSE from "../assets/images/cancel.png"

const CloseButton = (props) => {
    return (
        <TouchableOpacity style={{ padding: 10, zIndex: 1000 }} onPress={props.onClick}>
            <Image
                style={{ width: 30, height: 30, tintColor: "#fff" }}
                source={ICON_CLOSE}
            />
        </TouchableOpacity>
    );
}

export default CloseButton