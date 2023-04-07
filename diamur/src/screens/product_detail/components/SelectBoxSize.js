import React, { useState } from 'react';
import { View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { OSB12Text, OSR16Text } from '../../../components/elements';
import { Icon } from 'react-native-elements';
import { strings } from '../../../localization';
import { styles } from '../productDetail.style';

export default function SelectBoxSize(props) {
    const [openList, setOpenList] = useState(false);
    const handleList = () => {
        setOpenList(!openList);
    };
    const handleSelect = item => {
        props.handleSelect(item);
        setOpenList(!openList);
    };
    return (
        <View
            style={[
                styles.productContainer,
                styles.elevation,
                { zIndex: openList ? 1 : 0 },
            ]}>
            <TouchableOpacity style={styles.tileBox} onPress={handleList}>
                <OSB12Text style={{ ...styles.boxText, ...styles.selectPro }}>
                    {props?.selectedValue ? props?.selectedValue : props.title}
                </OSB12Text>
                <View style={styles.selectItem}>
                    {/* <OSR16Text style={styles.proText}>
            {props?.selectedValue?.name}
          </OSR16Text> */}
                    <Icon
                        style={styles.selectProduct}
                        name="keyboard-arrow-down"
                        type="material-icons"
                        size={25}
                        color="#FF3A18"
                    // onPress={handleList}
                    />
                </View>
            </TouchableOpacity>
            {openList && (
                <View style={styles.listBox}>
                    <ScrollView horizontal style={{ flexDirection: 'column' }}>
                        <FlatList
                            style={{ height: 'auto' }}
                            data={props?.calculatorState}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleSelect(item)}>
                                    <OSB12Text style={styles.listText}>{item?.Size}</OSB12Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item?.id}
                        />
                    </ScrollView>
                </View>
            )}
        </View>
    );
}
