import React, { useState, useEffect } from 'react';
import { styles } from '../productFilter.style';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, CheckBox } from 'react-native-elements';
const FILTER = 'Filter Options';

export default function FilterItem(props) {
  const [isSelected, setSelection] = useState(false);

  const handleSelected = id => {
    if (props.isSelectedChild === id) {
      props.setSelectionChild('')
      if (props.title === "Application") {
        props.onApplicationChange()
      }

    } else if (props.isSelectedChild !== id) {
      if (props.title === "Application") {
        props.handleChangeApplication(id)
        props.onApplicationChange()
      }
      props.setSelectionChild(id)

    }
  };
  return (
    <View style={styles.innerFilterContainer}>
      <TouchableOpacity
        checked={isSelected}
        onPress={() => setSelection(!isSelected)}
        style={styles.checkboxContainer}>
        <Text style={isSelected ? styles.filterLabelOpen : styles.filterLabel}>
          {props.title}
        </Text>
        <Icon
          name={isSelected ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          color="#000000"
          size={25}
          iconStyle={{ marginRight: 25 }}
        />
      </TouchableOpacity>
      {isSelected && (
        <View>
          {props.item?.map((item, index) => (
            <View style={styles.childCheckboxContainerTop} key={index}>
              <CheckBox
                checked={props.isSelectedChild === item.id}
                onPress={() => handleSelected(item.id)}
                containerStyle={styles.childCheckbox}
                checkedIcon={
                  <View style={styles.uncheck}>
                    <View style={styles.check} />
                  </View>
                }
                uncheckedIcon={<View style={styles.uncheck} />}
                checkedColor="red"
                style={styles.check}
                title={
                  <Text style={styles.childFilterLabel}>{item.name}</Text>
                }
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

