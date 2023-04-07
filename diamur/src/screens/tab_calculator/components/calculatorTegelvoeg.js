import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { Box, RedBox, SelectBox } from './index';
import { MSB16Button } from '../../../components/elements';
import {
  InputKeyboard,
} from './../components';
import { Icon } from 'react-native-elements';
import { strings } from '../../../localization';
import { styles } from './calculators.style';

const CalculatorTegelvoeg = props => {
  const [type, setType] = useState(null)
  const [visible, setVisible] = useState(false);
  const [totalAreaValue, setTotalAreaValue] = useState({
    tileLength: '600',
    widthOfLine: '600',
    widthOfGrout: '5',
    depthOfGrout: '10',
    totalArea: '1',
    weightOfGrout: '',
    lengthOfJoint: '5',
  });
  const [selectedTileJoint, setSelectedTileJoint] = useState(props.calculatorState?.data?.payload[0])
  const handleSelectTileJoint = (item) => {
    setSelectedTileJoint(item)
  }
  const toggleOverlay = (type) => {
    setType(type)
    setVisible(!visible);
  };
  const handleAdd = (type) => {
    setTotalAreaValue({ ...totalAreaValue, [type]: parseInt(totalAreaValue && totalAreaValue[type]) + 1 });
  }
  const handleMinus = (type) => {
    setTotalAreaValue({ ...totalAreaValue, [type]: parseInt(totalAreaValue && totalAreaValue[type]) - 1 });
  }
  const handleInput = (value, type) => {
    setTotalAreaValue({ ...totalAreaValue, [type]: value });
  }
  const handleReset = () => {
    setTotalAreaValue({
      tileLength: '600',
      widthOfLine: '600',
      widthOfGrout: '5',
      depthOfGrout: '10',
      totalArea: '1',
      weightOfGrout: '',
      lengthOfJoint: '5',
    })
  }
  const handleCalculate = () => {

    if (totalAreaValue && selectedTileJoint?.data) {
      const { tileLength, widthOfLine, widthOfGrout, depthOfGrout, totalArea, lengthOfJoint } = totalAreaValue
      let total = ((((parseFloat(widthOfGrout) * parseFloat(depthOfGrout) * parseFloat(widthOfLine) +
        parseFloat(depthOfGrout) * parseFloat(widthOfGrout) * parseFloat(tileLength)) /
        (parseFloat(widthOfLine) + parseFloat(widthOfGrout)) /
        (parseFloat(tileLength) + parseFloat(widthOfGrout))) *
        1000 *
        1000) /
        1000000) *
        parseFloat(totalArea) *
        JSON.parse(selectedTileJoint?.data)?.value
      let final = Math.round(total * 10000) / 10000
      // (widthOfGrout * depthOfGrout * widthOfLine + widthOfGrout * lengthOfJoint * tileLength) / (widthOfLine + widthOfGrout) * 1000 * 1000 * JSON.parse(selectedTileJoint?.data)?.value / 1000000000 * totalArea
      setTotalAreaValue({ ...totalAreaValue, weightOfGrout: Math.ceil(final) })
    }
  }
  useEffect(() => {
    handleCalculate()
  }, [])
  return (
    <ScrollView style={{ flex: 1 }}>
      <SelectBox
        calculatorState={props.calculatorState?.data?.payload}
        handleSelect={handleSelectTileJoint}
        selectedValue={selectedTileJoint}
        title='SELECT PRODUCT'
      />
      <View style={styles.commonBox}>
        <Box
          type="tileLength"
          text={strings('calculator.tileLength')}
          style={{ marginRight: 15 }}
          value={totalAreaValue.tileLength}
          toggleOverlay={toggleOverlay}
          handleInput={handleInput}
          visible={visible}
          handleAdd={handleAdd}
          handleMinus={handleMinus}
        />
        <Box
          type="widthOfLine"
          text={strings('calculator.widthLine')}
          style={{ marginLeft: 15 }}
          value={totalAreaValue.widthOfLine}
          toggleOverlay={toggleOverlay}
          handleInput={handleInput}
          visible={visible}
          handleAdd={handleAdd}
          handleMinus={handleMinus}
        />
      </View>
      <View style={styles.commonBox}>
        <Box
          type="widthOfGrout"
          text={strings('calculator.widthGrout')}
          style={{ marginRight: 15 }}
          value={totalAreaValue.widthOfGrout}
          toggleOverlay={toggleOverlay}
          handleInput={handleInput}
          visible={visible}
          handleAdd={handleAdd}
          handleMinus={handleMinus}
        />
        <Box
          type="depthOfGrout"
          text={strings('calculator.depthGrout')}
          style={{ marginLeft: 15 }}
          value={totalAreaValue.depthOfGrout}
          toggleOverlay={toggleOverlay}
          handleInput={handleInput}
          visible={visible}
          handleAdd={handleAdd}
          handleMinus={handleMinus}
        />
      </View>
      <View style={styles.commonBox}>
        <Box
          type="totalArea"
          text={strings('calculator.totalArea')}
          style={{ marginRight: 15 }}
          value={totalAreaValue.totalArea}
          toggleOverlay={toggleOverlay}
          handleInput={handleInput}
          visible={visible}
          handleAdd={handleAdd}
          handleMinus={handleMinus}
        />
        {/* <Box
          type='lengthOfJoint'
          text={strings('calculator.lengthOfJoint')}
          style={{ marginRight: 15 }}
          value={totalAreaValue.lengthOfJoint}
          toggleOverlay={toggleOverlay}
          handleInput={handleInput}
          visible={visible}
          handleAdd={handleAdd}
          handleMinus={handleMinus}
        /> */}
        <RedBox
          type='weightOfGrout'
          text={strings('calculator.weightGrout')}
          style={{ marginLeft: 15 }}
          value={totalAreaValue.weightOfGrout}
          toggleOverlay={toggleOverlay}
          handleInput={handleInput}
          visible={visible}
        />
      </View>
      {/* <View style={styles.commonBox}>
        <RedBox
          type='weightOfGrout'
          text={strings('calculator.weightGrout')}
          style={{ marginLeft: 15 }}
          value={totalAreaValue.weightOfGrout}
          toggleOverlay={toggleOverlay}
          handleInput={handleInput}
          visible={visible}
        />
      </View> */}
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
                onPress={() => handleReset()}
                style={{ marginRight: 5 }}
              />
            }
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
      <InputKeyboard
        toggleOverlay={toggleOverlay}
        handleInput={handleInput}
        visible={visible}
        value={totalAreaValue && totalAreaValue[type]?.toString()}
        type={type}
      />
    </ScrollView>
  );
};
export default CalculatorTegelvoeg;
