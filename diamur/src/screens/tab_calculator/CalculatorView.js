import React, { useState, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text, Icon, Overlay } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { List, Colors } from 'react-native-paper';
import {
  CalculatorTegelvoeg,
  CalculatorMortel,
  CalculatorVoegmortel,
  CalculatorTegellijm,
} from './components';
import { strings } from '../../localization';
import { OSR12Button } from '../../components/elements';
import { styles } from './calculator.style';
import GlobalStyle from '../../style/globalstyle';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action';

const CalculatorView = props => {
  const navigation = useNavigation();
  const [visibleModal, setVisibleModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [type, setCalculatorType] = useState(1);
  const [typeValue, setCalculatorTypeValue] = useState(
    strings('calculator.tegelvoeg'),
  );
  const calculatorState = useSelector(
    state => state.rootReducers?.calculatorState,
  );

  React.useLayoutEffect(() => {
    props.navigation.setOptions({ headerShown: true });
  }, [props.navigation]);

  const toggleOverlayModal = () => {
    setVisibleModal(!visibleModal);
  };

  const handlePress = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    props.actions.tileJointAction();
    props.actions.mortelListAction();
    props.actions.tileAdhesiveAction();
    props.actions.mortelJointAction();
  }, []);
  const ModalView = () => (
    <Overlay
      isVisible={visibleModal}
      onBackdropPress={toggleOverlayModal}
      overlayStyle={styles.innerOverlay}>
      <View>
        <View style={styles.closeToggle}>
          <Icon
            name="close"
            type="antdesign"
            size={25}
            color="#43464B"
            onPress={toggleOverlayModal}
          />
        </View>
        <View style={styles.modalBody}>
          <Text style={styles.modalTitle}>{strings('calculator.modalTitle')}</Text>
          <Text style={styles.modalSubTitle}>
            {strings('calculator.modalSubTitle1')}

          </Text>
          <Text style={styles.modalSubTitle}>
            {strings('calculator.modalSubTitle2')}
          </Text>
        </View>
      </View>
    </Overlay>
  );
  const renderCalculator = () => {
    switch (type) {
      case 1:
        return (
          <CalculatorTegelvoeg
            calculatorState={calculatorState.tileJointList}
          />
        );
      case 2:
        return (
          <CalculatorMortel calculatorState={calculatorState.mortelList} />
        );
      case 3:
        return (
          <CalculatorVoegmortel
            calculatorState={calculatorState.mortarJointList}
          />
        );
      case 4:
        return (
          <CalculatorTegellijm
            calculatorState={calculatorState.tileAdhesiveList}
          />
        );
      default:
        return null;
    }
  };
  const handleChangeView = (type, value) => {
    setCalculatorType(type);
    setCalculatorTypeValue(value);
    setExpanded(!expanded);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ zIndex: 1 }}>
        <List.Section style={styles.topButtonSection}>
          <List.Accordion
            title={typeValue}
            titleStyle={styles.calList}
            style={styles.menuButton}
            expanded={expanded}
            right={props => (
              <Icon
                {...props}
                size={30}
                style={styles.accordionIcon}
                color={Colors.white}
                name={expanded ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
              />
            )}
            onPress={handlePress}>
            {type !== 1 && (
              <List.Item
                title={strings('calculator.tegelvoeg')}
                style={styles.submenuButton}
                titleStyle={styles.calItem}
                onPress={() =>
                  handleChangeView(1, strings('calculator.tegelvoeg'))
                }
              />
            )}
            {type !== 2 && (
              <List.Item
                title={strings('calculator.mortelcalculator')}
                style={styles.submenuButton}
                titleStyle={styles.calItem}
                onPress={() =>
                  handleChangeView(2, strings('calculator.mortelcalculator'))
                }
              />
            )}
            {type !== 3 && (
              <List.Item
                title={strings('calculator.voegmortelcalculator')}
                style={styles.submenuButton}
                titleStyle={styles.calItem}
                onPress={() =>
                  handleChangeView(
                    3,
                    strings('calculator.voegmortelcalculator'),
                  )
                }
              />
            )}
            {type !== 4 && (
              <List.Item
                title={strings('calculator.tegellijmcalculator')}
                style={styles.submenuButton}
                titleStyle={styles.calItem}
                onPress={() =>
                  handleChangeView(4, strings('calculator.tegellijmcalculator'))
                }
              />
            )}
          </List.Accordion>
        </List.Section>
      </View>

      <View style={styles.container}>
        <OSR12Button
          style={{}}
          buttonStyle={{ padding: 0 }}
          titleStyle={{
            color: GlobalStyle.colorSet.orange,
            textDecorationLine: 'underline',
          }}
          title={strings('calculator.calculatorMessage')}
          onPress={() => toggleOverlayModal()}></OSR12Button>
        {renderCalculator()}
      </View>
      <ModalView />
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(CalculatorView);
