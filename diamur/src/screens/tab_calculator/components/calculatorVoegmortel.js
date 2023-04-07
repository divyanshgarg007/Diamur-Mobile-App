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
let consumptionProducts = [{
  created_at: "",
  data: "{\"value\":\"1.772727\"}",
  deleted_at: null,
  id: 1,
  name: "VMK",
  product_id: "1",
  product_url: "https://testapp.diamur.be",
  updated_at: ""
}]
const CalculatorVoegmortel = props => {
  const [type, setType] = useState(null)
  const [visible, setVisible] = useState(false);
  const [selectedStone, setSelectedStone] = useState(props.calculatorState?.data?.payload.stoneChoiceProducts[0])
  const [selectedMortar, setSelectedMortar] = useState(consumptionProducts[0])
  // props.calculatorState?.data?.payload.consumptionProducts[0]
  // )
  const [totalValue, setTotalValue] = useState({
    heightOfJoint: '13',
    depthOfJoint: '12',
    totalArea: '2',
    stoneLength: '0',
    stoneDepth: '0',
    stoneHeight: '0',
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
  const handleSelectStone = (item) => {
    setSelectedStone(item)
  }
  const handleSelectMortar = (item) => {
    setSelectedMortar(item)
  }
  const toggleOverlay = (type) => {
    setType(type)
    setVisible(!visible);
  };
  const handleCalculate = () => {
    const { heightOfJoint, totalArea, depthOfJoint, stoneLength, stoneHeight, stoneDepth } = totalValue
    let selectedStoneValue = JSON.parse(selectedStone?.data)

    let total = ((heightOfJoint *
      depthOfJoint *
      (stoneLength + stoneHeight + depthOfJoint)) /
      (stoneLength + depthOfJoint) /
      (stoneHeight + heightOfJoint)) *
      JSON.parse(selectedMortar.data).value *
      totalArea;
    let final = Math.round(total * 10000) / 10000
    // let total = (heightOfJoint * depthOfJoint * (selectedStoneValue.length + selectedStoneValue.height + heightOfJoint) / (selectedStoneValue.length + heightOfJoint) / (selectedStoneValue.height + heightOfJoint)) * JSON.parse(selectedMortar.data).value * totalArea
    setTotalValue({ ...totalValue, mortel: Math.ceil(final) })
  }
  useEffect(() => {
    handleCalculate()
  }, [])
  useEffect(() => {
    setTotalValue({
      ...totalValue,
      stoneLength: JSON.parse(selectedStone?.data)?.length,
      stoneDepth: JSON.parse(selectedStone?.data)?.depth,
      stoneHeight: JSON.parse(selectedStone?.data)?.height,
    });
  }, [selectedStone])
  const handleReset = () => {
    setTotalValue({
      heightOfJoint: '12',
      depthOfJoint: '20',
      totalArea: '1',
      mortel: ''
    })
  }
  console.log('selectedMortar', props.calculatorState?.data?.payload.consumptionProducts)
  return (
    <ScrollView>
      <View style={styles.container}>
        <SelectBox
          calculatorState={props.calculatorState?.data?.payload.stoneChoiceProducts}
          handleSelect={handleSelectStone}
          selectedValue={selectedStone}
          title='SELECT STONE'
        />

        <View style={styles.commonBox}>
          <Box
            type="stoneLength"
            text={strings('calculator.stoneLength')}
            style={{ marginRight: 15 }}
            value={totalValue?.stoneLength}
            toggleOverlay={toggleOverlay}
            handleInput={handleInput}
            visible={visible}
            handleAdd={handleAdd}
            handleMinus={handleMinus}
          />
          <Box
            type="stoneDepth"
            text={strings('calculator.depthStone')}
            style={{ marginLeft: 15 }}
            value={totalValue?.stoneDepth}
            toggleOverlay={toggleOverlay}
            handleInput={handleInput}
            visible={visible}
            handleAdd={handleAdd}
            handleMinus={handleMinus}
          />
        </View>

        <View style={styles.commonBox}>
          <Box
            type="stoneHeight"
            text={strings('calculator.stoneHeight')}
            style={{ marginRight: 15 }}
            value={totalValue?.stoneHeight}
            toggleOverlay={toggleOverlay}
            handleInput={handleInput}
            visible={visible}
            handleAdd={handleAdd}
            handleMinus={handleMinus}
          />
        </View>

        <SelectBox
          title='SELECT A PRODUCT'
          calculatorState={consumptionProducts}
          //props.calculatorState?.data?.payload.consumptionProducts}
          handleSelect={handleSelectMortar}
          selectedValue={selectedMortar}
        />
        <View style={styles.commonBox}>
          <Box
            type="heightOfJoint"
            text={strings('calculator.heightGrout')}
            style={{ marginRight: 15 }}
            value={totalValue?.heightOfJoint}
            toggleOverlay={toggleOverlay}
            handleInput={handleInput}
            visible={visible}
            handleAdd={handleAdd}
            handleMinus={handleMinus}
          />
          <Box
            type="depthOfJoint"
            text={strings('calculator.depthGrout')}
            style={{ marginRight: 15 }}
            value={totalValue?.depthOfJoint}
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
            value={totalValue?.totalArea}
            toggleOverlay={toggleOverlay}
            handleInput={handleInput}
            visible={visible}
            handleAdd={handleAdd}
            handleMinus={handleMinus}
          />
          <RedBox
            text={strings('calculator.groutingMortar')}
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
export default CalculatorVoegmortel;
