import React, { useState, useEffect } from 'react';
import { styles } from '../productFilter.style';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, CheckBox } from 'react-native-elements';
const FILTER = 'Filter Options';

export default function ProductFilterItem(props) {
    const [isSelectedMain, setSelectionMain] = useState(false);

    const handleSelected = id => {
        // let checkedData = isSelectedChildFamily.filter(data => data === id);
        // if (!(checkedData?.length > 0)) {
        //     let selectedId = [...isSelectedChildFamily, id]
        //     let newSearchedData = props.productData.filter((data) => selectedId.includes(data['Sub Family']?.name || data['Product Family Name']))
        //     setSelectionChildFamily([...isSelectedChildFamily, id]);
        //     props.setFilterData(newSearchedData)
        // } else if (checkedData?.length > 0) {
        //     let selectedId = isSelectedChildFamily.filter(data => data !== id)
        //     setSelectionChildFamily(selectedId);
        //     let searchedData = props.productData.filter((data) => selectedId.includes(data['Sub Family']?.name || data['Product Family Name']))
        //     props.setFilterData(searchedData)
        // }
        if (props.isSelectedChild === id) {
            props.setSelectionChild('')
            //props.setFilterData(props.productData)
        } else {
            //let newSearchedData = props.productData.filter((data) => id === (data['Sub Family']?.name || data['Product Family Name']))
            //props.setFilterData(newSearchedData)
            props.setSelectionChild(id)
        }
    };
    const handleClick = (data) => {
        if (data.title === props.isSelected) {
            props.setSelection(null)
        } else {
            props.setSelection(data.title)
        }
    }
    return (
        <View style={styles.innerFilterContainer}>
            <TouchableOpacity
                checked={isSelectedMain}
                onPress={() => setSelectionMain(!isSelectedMain)}
                style={styles.checkboxContainer}>
                <Text style={isSelectedMain ? styles.filterLabelOpen : styles.filterLabel}>
                    Family
                </Text>
                <Icon
                    name={isSelectedMain ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                    color="#000000"
                    size={25}
                    iconStyle={{ marginRight: 25 }}
                />
            </TouchableOpacity>
            {isSelectedMain &&
                <>
                    {props.data.map((data, index) =>
                        <View key={index}>
                            <TouchableOpacity
                                checked={props.isSelected}
                                key={index}
                                onPress={() => handleClick(data)}
                                style={styles.checkboxContainer}>
                                <View style={styles.checkwrap}>
                                    <CheckBox
                                        checked={props.isSelected === data.title}
                                        onPress={() => handleClick(data)}
                                        containerStyle={[styles.parentCheckbox, styles.shiftCheckbox]}
                                        checkedIcon={
                                            <View style={styles.uncheck}>
                                                <View style={styles.check} />
                                            </View>
                                        }
                                        uncheckedIcon={<View style={styles.uncheck} />}
                                        checkedColor="red"
                                        style={styles.check}
                                    />
                                    <Text style={props.isSelected === data.title ? [styles.parentFilterLabelOpen] : [styles.parentFilterLabel]}>
                                        {data.title}
                                    </Text>
                                </View>
                                {/* <Icon
                                    name={props.isSelected === data.title ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                                    color="#000000"
                                    size={25}
                                    iconStyle={{ marginRight: 25 }}
                                /> */}
                            </TouchableOpacity>
                            {props.isSelected === data.title && (
                                <View>
                                    {data?.data?.map((item, index) => (
                                        <View style={styles.childCheckboxContainer} key={index}>
                                            <CheckBox
                                                checked={props.isSelectedChild === item}
                                                onPress={() => handleSelected(item)}
                                                containerStyle={[styles.childCheckbox, styles.shiftCheckbox]}
                                                checkedIcon={
                                                    <View style={styles.uncheck}>
                                                        <View style={styles.check} />
                                                    </View>
                                                }
                                                uncheckedIcon={<View style={styles.uncheck} />}
                                                checkedColor="red"
                                                style={styles.check}
                                                title={
                                                    <Text style={styles.childFilterLabel}>{item}</Text>
                                                }
                                            />
                                        </View>
                                    ))}
                                </View>
                            )}
                        </View>
                    )}

                </>}
        </View>
    );
}
