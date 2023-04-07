import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { Box, RedBox, SelectBox } from './index';
import { MSB16Button } from '../../../components/elements';
import { Icon } from 'react-native-elements';
import { strings } from '../../../localization';
import { styles } from './calculators.style';
import {
  InputKeyboard,
} from './../components';
const CalculatorTegellijm = props => {
  const [type, setType] = useState(null)
  const [visible, setVisible] = useState(false);
  const [selectedMortar, setSelectedMortar] = useState(props.calculatorState?.data?.payload[0])
  const [totalValue, setTotalValue] = useState({
    widthToothComb: '10',
    heightToothComb: '10',
    totalArea: '1',
    mortel: ''
  });
  const handleAdd = (type) => {
    setTotalValue({ ...totalValue, [type]: parseInt(totalValue && totalValue[type]) + 1 });
  }
  const handleMinus = (type) => {
    setTotalValue({ ...totalValue, [type]: parseInt(totalValue && totalValue[type]) - 1 });
  }
  const handleInput = (value, type) => {
    setTotalValue({ ...totalValue, [type]: value });
  }
  const handleSelectMortar = (item) => {
    setSelectedMortar(item)
  }
  const toggleOverlay = (type) => {
    setType(type)
    setVisible(!visible);
  };
  const handleCalculate = () => {
    if (JSON.parse(selectedMortar?.data)?.value) {
      const { widthToothComb, totalArea, heightToothComb } = totalValue
      let total = ((0.70710678118 * parseFloat(heightToothComb) * parseFloat(widthToothComb)) /
        (parseFloat(heightToothComb) + parseFloat(widthToothComb))) *
        JSON.parse(selectedMortar.data).value * parseFloat(totalArea)
      let final = Math.round(total * 10000) / 10000
      // let total = (widthToothComb * Math.sin(45 * (Math.PI / 180)) / (widthToothComb + heightToothComb) * 1000 / 1000000 * 1000) * JSON.parse(selectedMortar.data).value * totalArea
      setTotalValue({ ...totalValue, mortel: Math.ceil(final) })
    }
  }
  useEffect(() => {
    handleCalculate()
  }, [])
  const handleReset = () => {
    setTotalValue({
      widthToothComb: '10',
      heightToothComb: '10',
      totalArea: '1',
      mortel: ''
    })
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.commonBox}>
          <Box
            text={strings('calculator.heightGrout')}
            type="widthToothComb"
            style={{ marginRight: 15 }}
            value={totalValue?.widthToothComb}
            toggleOverlay={toggleOverlay}
            handleInput={handleInput}
            visible={visible}
            handleAdd={handleAdd}
            handleMinus={handleMinus}
          />
          <Box
            text={strings('calculator.depthGrout')}
            type="heightToothComb"
            style={{ marginRight: 15 }}
            value={totalValue?.heightToothComb}
            toggleOverlay={toggleOverlay}
            handleInput={handleInput}
            visible={visible}
            handleAdd={handleAdd}
            handleMinus={handleMinus}
          />
        </View>

        <SelectBox
          title='SELECT A PRODUCT'
          calculatorState={props.calculatorState?.data?.payload}
          handleSelect={handleSelectMortar}
          selectedValue={selectedMortar}
        />

        <View style={styles.commonBox}>
          <Box
            type="totalArea"
            text={strings('calculator.totalArea')}
            style={{ marginRight: 15 }}
            value={totalValue?.totalArea}
            toggleOverlay={toggleOverlay}
            handleInput={handleInput}
            visible={visible}
            handleAdd={handleAdd}
            handleMinus={handleMinus}
          />
          <RedBox
            text={strings('calculator.titleAdhesive')}
            style={{ marginLeft: 15 }}
            value={totalValue?.mortel}
          />
        </View>

        <View style={styles.bottomBtn}>
          <View style={styles.resetBox}>
            <MSB16Button
              title={strings('buttons.reset')}
              icon={
                <Icon
                  name="refresh"
                  type="material-icons-sharp"
                  size={25}
                  color="black"
                  style={{ marginRight: 5 }}
                />
              }
              onPress={() => handleReset()}
              titleStyle={styles.resetText}
              style={styles.resetBtn}
            />
          </View>
          <View style={styles.calculateBox}>
            <MSB16Button
              title={strings('buttons.orderNow')}
              style={styles.calculateBtn}
              titleStyle={styles.calculateText}

            />
          </View>
        </View>
        <View style={styles.orderBox}>
          <MSB16Button
            title={strings('buttons.calculate')}
            style={styles.ordrBtn}
            titleStyle={styles.orderText}
            onPress={handleCalculate}
          />
        </View>
      </View>
      <InputKeyboard
        toggleOverlay={toggleOverlay}
        handleInput={handleInput}
        visible={visible}
        value={totalValue && totalValue[type]?.toString()}
        type={type}
      />
    </ScrollView>
  );
};
export default CalculatorTegellijm;
