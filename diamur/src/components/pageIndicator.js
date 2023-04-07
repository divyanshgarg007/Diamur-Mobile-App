import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

const PageIndicator = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            {
                [0, 1, 2, 3].map((index, val) => {
                    return <Dot key={index} page={props.page} index={index} total={props.total} />
                })
            }
        </View>
    )
}

const Dot = (props) => {
    console.log("PAGE INDICATOR: ", props.index)
    var borderLeftRadius = props.index === 0 ? 10 : 0
    var borderRightRadius = props.index === (props.total - 1) ? 10 : 0

    var cStyle = props.page >= props.index ? styles.fill : styles.empty
    return (
        <View style={[cStyle, {
            borderBottomLeftRadius: borderLeftRadius,
            borderTopLeftRadius: borderLeftRadius,
            borderTopEndRadius: borderRightRadius,
            borderBottomEndRadius: borderRightRadius
        }]} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    fill: {
        flex: 0.25,
        height: 5,
        backgroundColor: '#F8AB74',
        borderWidth: 1,
        borderColor: '#F8AB74',
    },
    empty: {
        flex: 0.25,
        height: 5,
        borderColor: '#F8AB74',
        borderWidth: 1,
    }

})

export default PageIndicator;