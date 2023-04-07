import React from 'react';

import { Image } from 'react-native'
import { appLogo } from '../assets';

const HeaderLogo = () => {
    return (
        <Image
            style={{ marginTop: 0, width: 95, height: 33 }}
            source={appLogo}
        />
    );
}

export default HeaderLogo