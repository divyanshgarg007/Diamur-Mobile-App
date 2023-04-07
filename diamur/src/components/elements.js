import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input, CheckBox } from 'react-native-elements';
import GlobalStyles from '../style/globalstyle';
import normalize from 'react-native-normalize';

const OSB24Text = props => {
  return (
    <Text style={{ ...styles.OSB24, ...props.style }}>{props.children}</Text>
  );
};

const OSB17Text = props => {
  return (
    <Text style={{ ...styles.OSB17, ...props.style }}>{props.children}</Text>
  );
};

const OSB16Text = props => {
  return (
    <Text style={{ ...styles.OSB16, ...props.style }}>{props.children}</Text>
  );
};

const OSB14Text = props => {
  return (
    <Text style={{ ...styles.OSB14, ...props.style }}>{props.children}</Text>
  );
};

const OSB12Text = props => {
  return (
    <Text style={{ ...styles.OSB12, ...props.style }}>{props.children}</Text>
  );
};

const OSR11Text = props => {
  return (
    <Text style={{ ...styles.OSR11, ...props.style }}>{props.children}</Text>
  );
};

const OSR9Text = props => {
  return <Text style={{ ...styles.OSR9, ...props.style }}>{props.children}</Text>;
};

const OSR10Text = props => {
  return (
    <Text style={{ ...styles.OSR10, ...props.style }}>{props.children}</Text>
  );
};

const OSR12Text = props => {
  return (
    <Text style={{ ...styles.OSR12, ...props.style }}>{props.children}</Text>
  );
};

const OSR16Text = props => {
  return (
    <Text numberOfLines={1} style={{ ...styles.OSR16, ...props.style }}>
      {props.children}
    </Text>
  );
};

const OSR11Input = props => {
  return (
    <Input
      style={{ ...styles.OSR11, ...props.style }}
      placeholder={props.placeholder}
      leftIcon={props.leftIcon}
      onChangeText={props.onChangeText}
      errorStyle={props.errorStyle}
      errorMessage={props.errorMessage}
      multiline={props.multiline}
      numberOfLines={props.numberOfLines}
      containerStyle={{
        marginTop: 10,
        height: 30,
        borderColor: '#9A9B9F',
        borderWidth: 0.5,
      }}
      inputStyle={{
        fontSize: 11,
        fontFamily: GlobalStyles.fontSet.OpenSansRegular,
      }}
      inputContainerStyle={{ borderBottomWidth: 0, height: 30 }}
    />
  );
};

const OSR14Checkbox = props => {
  return (
    <CheckBox
      textStyle={{ ...styles.OSR14, ...props.style }}
      containerStyle={props.containerStyle}
      title={props.title}
      checked={props.checked}>
      {props.children}
    </CheckBox>
  );
};

const MSL14Text = props => {
  return (
    <Text style={{ ...styles.MSL14, ...props.style }} onPress={props.onPress}>
      {props.children}
    </Text>
  );
};

const MSB14Text = props => {
  return (
    <Text style={{ ...styles.MSB14, ...props.style }}>{props.children}</Text>
  );
};

const MSB24Text = props => {
  return (
    <Text style={{ ...styles.MSB24, ...props.style }}>{props.children}</Text>
  );
};

const OSR11Button = props => {
  return (
    <Button
      buttonStyle={{ ...props.style }}
      containerViewStyle={props.containerViewStyle}
      titleStyle={{ ...styles.OSR11, ...props.titleStyle }}
      icon={props.icon}
      iconRight={props.iconRight}
      title={props.title}
      onPress={props.onPress}
    />
  );
};

const OSR12Button = props => {
  return (
    <Button
      type="clear"
      style={{ ...props.style }}
      buttonStyle={{ ...props.buttonStyle }}
      containerStyle={props.containerStyle}
      titleStyle={{ ...styles.OSR12, ...props.titleStyle }}
      icon={props.icon}
      iconRight={props.iconRight}
      title={props.title}
      onPress={props.onPress}
    />
  );
};

const MSB16Button = props => {
  return (
    <Button
      buttonStyle={{ ...styles.MSB16, ...props.style }}
      containerStyle={props.containerStyle}
      titleStyle={{ ...styles.MSB16Text, ...props.titleStyle }}
      icon={props.icon}
      iconRight={props.iconRight}
      title={props.title}
      onPress={props.onPress}
      loading={props.loading}
      disabled={props.disabled}
    />
  );
};

const MSB16Text = props => {
  return (
    <Text style={{ ...styles.MSB16Text, ...props.style }}>{props.children}</Text>
  );
};

const MSE12Text = props => {
  return (
    <Text style={{ ...styles.MSE12, ...props.style }}>{props.children}</Text>
  );
};
const OSB15Button = props => {
  return (
    <Button
      buttonStyle={{ ...styles.OSB15, ...props.style }}
      containerViewStyle={props.containerViewStyle}
      titleStyle={{ ...styles.OSB15Text, ...props.titleStyle }}
      icon={props.icon}
      iconRight={props.iconRight}
      title={props.title}
      onPress={props.onPress}
    />
  );
};
const OSB14Button = props => {
  return (
    <Button
      buttonStyle={{ ...styles.OSB14, ...props.style }}
      containerViewStyle={props.containerViewStyle}
      titleStyle={{ ...styles.OSB14Text, ...props.titleStyle }}
      icon={props.icon}
      iconRight={props.iconRight}
      title={props.title}
      onPress={props.onPress}
    />
  );
};

const styles = StyleSheet.create({
  OSB15: {
    backgroundColor: GlobalStyles.colorSet.orange,
  },
  OSB15Text: {
    color: GlobalStyles.colorSet.white,
    fontSize: normalize(15), //14pt
    fontFamily: GlobalStyles.fontSet.OpenSansBold,
  },
  OSB24: {
    color: GlobalStyles.colorSet.black,
    fontSize: normalize(24),
    fontFamily: GlobalStyles.fontSet.OpenSansBold,
  },
  OSB17: {
    color: GlobalStyles.colorSet.black,
    fontSize: normalize(17),
    fontFamily: GlobalStyles.fontSet.OpenSansBold,
  },
  OSB16: {
    color: GlobalStyles.colorSet.black,
    fontSize: normalize(16),
    fontFamily: GlobalStyles.fontSet.OpenSansBold,
  },
  OSB14: {
    color: GlobalStyles.colorSet.black,
    fontSize: normalize(14),
    fontFamily: GlobalStyles.fontSet.OpenSansBold,
  },
  OSB12: {
    color: GlobalStyles.colorSet.black,
    fontSize: normalize(12), //12pt
    fontFamily: GlobalStyles.fontSet.OpenSansBold,
  },
  OSR9: {
    color: GlobalStyles.colorSet.black,
    fontSize: normalize(11.9), //9pt
    fontFamily: GlobalStyles.fontSet.OpenSansRegular,
    lineHeight: normalize(14), //14px
  },
  OSR10: {
    color: GlobalStyles.colorSet.black,
    fontSize: normalize(10), //9pt
    fontFamily: GlobalStyles.fontSet.OpenSansRegular,
    lineHeight: normalize(14), //14px
  },
  OSR11: {
    color: GlobalStyles.colorSet.black,
    fontSize: normalize(11), //11pt
    fontFamily: GlobalStyles.fontSet.OpenSansRegular,
  },
  OSR12: {
    color: GlobalStyles.colorSet.black,
    fontSize: normalize(12),
    fontFamily: GlobalStyles.fontSet.OpenSansRegular,
    lineHeight: normalize(16),
  },
  OSR14: {
    color: GlobalStyles.colorSet.black,
    fontSize: normalize(16),
    fontFamily: GlobalStyles.fontSet.OpenSansRegular,
    lineHeight: normalize(20), //16px
  },
  OSR16: {
    color: GlobalStyles.colorSet.black,
    fontSize: normalize(16), //16pt
    fontFamily: GlobalStyles.fontSet.OpenSansRegular,
    lineHeight: normalize(40), //40px
  },
  MSL14: {
    color: GlobalStyles.colorSet.semiblack,
    fontSize: normalize(14), //14pt
    fontFamily: GlobalStyles.fontSet.MusseoSansLite,
    lineHeight: normalize(20), //18px
  },
  MSB14: {
    color: GlobalStyles.colorSet.semiblack,
    fontSize: normalize(14), //14pt
    fontFamily: GlobalStyles.fontSet.MuseoSansBold,
    lineHeight: normalize(20), //18px
  },

  MSB24: {
    color: GlobalStyles.colorSet.white,
    fontSize: normalize(31.8), //24pt
    fontFamily: GlobalStyles.fontSet.MuseoSansBold,
    lineHeight: normalize(42), //42px
  },
  MSB16Text: {
    color: GlobalStyles.colorSet.white,
    fontSize: normalize(15),
    fontFamily: GlobalStyles.fontSet.MuseoSansBold,
    //textAlignment: 'center'
    //textTransform: "uppercase"
  },
  MSB16: {
    backgroundColor: GlobalStyles.colorSet.orange,
    width: '100%',
    height: 45,
    borderRadius: 5,
  },
  MSE12: {
    color: GlobalStyles.colorSet.orange,
    fontSize: normalize(15.9), //12pt
    fontFamily: GlobalStyles.fontSet.MuseoSansExtraBold,
    lineHeight: normalize(33), //33px,
    textTransform: 'uppercase',
  },
});

export {
  OSR11Button,
  OSB24Text,
  OSB17Text,
  OSB16Text,
  OSB14Text,
  OSB12Text,
  OSR9Text,
  OSR11Text,
  OSR10Text,
  OSR11Input,
  OSR12Text,
  OSR14Checkbox,
  OSR16Text,
  MSL14Text,
  MSB14Text,
  MSB24Text,
  MSB16Button,
  MSB16Text,
  MSE12Text,
  OSR12Button,
  OSB15Button,
  OSB14Button,
};
