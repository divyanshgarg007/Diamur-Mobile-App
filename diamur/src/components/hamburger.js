import React, { useState } from 'react';
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { hamburgerIcon } from '../assets';
import { DrawerActions } from '@react-navigation/native';
const Hamburger = (props) => {

    const onClick = () => {
        //console.log(props)
        //props.navigation.openDrawer();
        //DrawerActions.openDrawer()
        //alert("hi")
        props.onClick()
    }

    return (
        <TouchableOpacity style={{ padding: 10 }} onPress={() => onClick()}>
            <Image
                source={hamburgerIcon}
            />
        </TouchableOpacity>
    );
}

export default Hamburger