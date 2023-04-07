import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { MSB16Button } from '../../components/elements';
import { List, Colors } from 'react-native-paper';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { strings } from '../../localization';
import { ActionCreators } from '../../redux/action';
import { styles } from './faqs.style';
import { CloseButton } from '../../components';
import { NAVIGATION } from '../../constants';

function FaqsView(props) {
  const regex = /<[^>]*>/gim;
  const [expanded, setExpanded] = useState('');
  const [faqsData, setFaqsData] = useState([]);
  const faqsState = useSelector(state => state.rootReducers?.masterState);

  useEffect(() => {
    props.actions.faqsListAction();
  }, []);

  useEffect(() => {
    if (faqsState.faqsList?.data?.payload) {
      setFaqsData(faqsState.faqsList?.data?.payload);
    }
  }, [faqsState.faqsList]);

  const handlePress = index => {
    if (index === expanded) {
      setExpanded('');
    } else {
      setExpanded(index);
    }
  };

  return (
    <ScrollView>
      <View style={styles.faqsContainer}>
        <Text style={styles.faqsTitle}>{strings('faqs.faqsHeading')}</Text>
        {(!faqsData || faqsData?.length === 0) && (
          <Text style={styles.faqsTitle}>{strings('faqs.noDataFound')} !!</Text>
        )}

        <List.Section>
          {faqsData &&
            faqsData?.map((item, index) => (
              <List.Accordion
                style={
                  expanded === index
                    ? styles.accordionBoxOpen
                    : styles.accordionBox
                }
                key={index}
                item={item}
                titleNumberOfLines={2}
                title={item.title}
                titleStyle={
                  expanded === index ? styles.faqTitleOpen : styles.faqTitle
                }
                right={props => (
                  <Icon
                    {...props}
                    size={30}
                    color={expanded === index ? Colors.black : Colors.white}
                    name={
                      expanded === index
                        ? 'keyboard-arrow-down'
                        : 'keyboard-arrow-right'
                    }
                  />
                )}
                onPress={() => handlePress(index)}>
                <List.Item
                  descriptionStyle={styles.faqdescription}
                  style={styles.faqbody}
                  descriptionNumberOfLines={1000}
                  description={item?.description?.replace(regex, '\n')}
                />
              </List.Accordion>
            ))}
        </List.Section>

        <MSB16Button
          style={styles.faqsBtn}
          title={strings('buttons.askQuestion')}
          titleStyle={styles.askText}
          onPress={() => props.navigation.navigate(NAVIGATION.feedback)}
        />
      </View>
    </ScrollView>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(FaqsView);
