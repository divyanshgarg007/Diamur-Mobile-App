import { Platform, Dimensions } from 'react-native';

const _colorSet = {
  black: '#000000',
  white: '#FFFFFF',
  orange: '#FF3A18',
  semiblack: '#0B0B0B',
  semiorange: '#F47920',
  darkgreen: '#6C6B17',
};

const _fontSet = {
  OpenSansRegular: 'OpenSans-Regular',
  OpenSansBold: Platform.OS === 'ios' ? 'OpenSans-Bold' : 'open-sans-700',
  OpenSansSemiBold:
    Platform.OS === 'ios' ? 'OpenSans-SemiBold' : 'open-sans-600',
  OpenSansLite: Platform.OS === 'ios' ? 'OpenSans-Light' : 'open-sans-300',
  OpenSansExtraBold:
    Platform.OS === 'ios' ? 'OpenSans-ExtraBold' : 'open-sans-800',

  MuseoSansRegular: 'MuseoSans-300',
  MuseoSansBold: Platform.OS === 'ios' ? 'MuseoSans-500' : 'MuseoSans_500',
  MuseoSansSemiBold: 'Raleway-SemiBold',
  MuseoSansLite: 'MuseoSans-100',
  MuseoSansExtraBold: Platform.OS === 'ios' ? 'MuseoSans-700' : 'MuseoSans_700',
  MuseoSansExtraBold2:
    Platform.OS === 'ios' ? 'MuseoSans-900' : 'MuseoSans-900',
};

const GlobalStyle = {
  colorSet: _colorSet,
  fontSet: _fontSet,
  width: Dimensions.get('screen').width
};

export default GlobalStyle;
