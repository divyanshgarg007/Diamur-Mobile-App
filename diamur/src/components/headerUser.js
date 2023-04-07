import React from 'react';

import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { userIcon } from '../assets';

const HeaderUser = (props) => {
    return (
        <TouchableOpacity style={{ padding: 10 }} onPress={props.onClick}>
            <Image
                source={userIcon}
            />
        </TouchableOpacity>
    );
}

export default HeaderUser