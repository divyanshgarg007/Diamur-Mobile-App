import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {MSB16Button, OSR11Button} from '../../components/elements';
import {strings} from '../../localization';
import {CloseButton} from '../../components';
import {styles} from './feedback.style';
import {NAVIGATION} from '../../constants';

export default function FeedbackView(props) {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerBackVisible: false,
      headerRight: () => null,
      headerLeft: () => (
        <CloseButton onClick={() => props.navigation.goBack()} />
      ),
    });
  }, [props.navigation]);

  return (
    <View style={styles.feedbackContainer}>
      <Text style={styles.feedbackTitle}>{strings('buttons.askQuestion')}</Text>
      <Text style={styles.inputName}>
        {strings('contact.inputFields.message')}
      </Text>
      <View style={styles.messageBox}>
        <TextInput
          placeholder={strings('contact.inputFields.messagePlaceholder')}
          multiline
          numberOfLines={6}
          style={styles.messageInput}
        />
      </View>

      <MSB16Button
        style={styles.sendBtn}
        title={strings('buttons.send')}
        titleStyle={styles.sendText}
      />
      <OSR11Button
        title={strings('faqs.backFaqs')}
        style={styles.backBtn}
        titleStyle={styles.backText}
        onPress={() => props.navigation.navigate(NAVIGATION.faqs)}
      />
    </View>
  );
}
