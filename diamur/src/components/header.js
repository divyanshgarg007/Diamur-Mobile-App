import React from 'react';
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';
import { Header, Image } from 'react-native-elements'
import logo from '../assets/logo.png'

const Logo = () => (
	<Image
	  source={logo}
	  style={{ width: 96, height: 34 }}
	/>
)

const Comp = (props) => {

const navigation = useNavigation(); 

return(
<Header
  leftComponent={{ icon: 'user', type: "antdesign", size: 35, color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={<Logo />}
  rightComponent={{ icon: props.opened ? 'close' :  'menu', size: 35, color: '#fff' }}
  containerStyle={{
    backgroundColor: 'black',
    justifyContent: 'space-around',
  }}
/>
)}

export default Comp