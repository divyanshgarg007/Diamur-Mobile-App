import React, {useState, useEffect,useRef} from 'react'
import { View } from "react-native";
import { Input } from 'react-native-elements';
import { strings } from '../../../localization'
import { OSB17Text, MSB16Button, MSL14Text } from '../../../components/elements';
import GlobalStyles from '../../../style/globalstyle';
import SimpleReactValidator from 'simple-react-validator'
import normalize from 'react-native-normalize';


const Step4 = (props) => {
   const [state, setState] = useState({...props.state})
   const [, forceUpdate] = useState()
   const simpleValidator = useRef(new SimpleReactValidator())
   const handleConfirmRegister = () =>{
    let isValid = simpleValidator.current.allValid()
    if (!isValid) {
        simpleValidator.current.showMessages(true)
        forceUpdate(1)
    }
    if (simpleValidator.current.allValid()) {
        props.handleConfirmRegister(state)
    }
  }
  useEffect(() => {
    return () => {
        props.cleanUp()
    }
}, [])
    return (
        <View style={{ marginHorizontal: normalize(72) }}>
            <View style={{ marginTop: normalize(20), }}>
                <OSB17Text>{strings("register.welcome")}</OSB17Text>
                <MSL14Text style={{ marginTop: normalize(10) }}>{strings("register.uniqueId")}</MSL14Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <Input
                    placeholder={strings("login.email")}
                    onChangeText={value => setState({ ...state, email: value })}
                    containerStyle={{ marginBottom: normalize(12), borderColor: '#9A9B9F', borderWidth: 0.5 }}
                    errorStyle={{ marginTop:normalize(32), position:'absolute' }}
                    inputStyle={{ fontSize: normalize(12), fontFamily: GlobalStyles.fontSet.OpenSansRegular }}
                    inputContainerStyle={{ borderBottomWidth: 0, height: 30 }}
                    value={state.email}
                    onBlur={() => simpleValidator.current.showMessageFor('email')}
                    errorMessage={simpleValidator.current.message('email', state.email, 'required|email')}
                    
                />

                <Input
                    placeholder={strings("login.password")}
                    secureTextEntry={true}
                    onChangeText={value => setState({ ...state, password: value })}
                    containerStyle={{ marginBottom: normalize(12), marginTop: normalize(15), borderColor: '#9A9B9F', borderWidth: 0.5 }}
                    errorStyle={{ marginTop:normalize(32), position:'absolute' }}
                    inputStyle={{ fontSize: normalize(12), fontFamily: GlobalStyles.fontSet.OpenSansRegular }}
                    inputContainerStyle={{ borderBottomWidth: 0, height: 30 }}
                    onBlur={() => simpleValidator.current.showMessageFor('password')}
                    errorMessage={simpleValidator.current.message('password', state.password, 'required')}
                />

                <Input
                    placeholder="Confirm your password"
                    secureTextEntry={true}
                    onChangeText={value => setState({ ...state, password_confirmation: value })}
                    containerStyle={{ marginBottom: normalize(25), marginTop: normalize(15), borderColor: '#9A9B9F', borderWidth: 0.5 }}
                    errorStyle={{ marginTop:normalize(32), position:'absolute' }}
                    inputStyle={{ fontSize: normalize(12), fontFamily: GlobalStyles.fontSet.OpenSansRegular }}
                    inputContainerStyle={{ borderBottomWidth: 0, height: 30 }}
                    onBlur={() => simpleValidator.current.showMessageFor('password_confirmation')}
                    errorMessage={simpleValidator.current.message('password_confirmation', state.password_confirmation, 'required')}
                />
            </View>

            <View style={{ marginTop: normalize(20), }}>
                <MSB16Button style={{ backgroundColor: GlobalStyles.colorSet.orange }} titleStyle={{ textTransform: "uppercase" }} title="CONFIRM YOUR ACCOUNT" onPress={() => handleConfirmRegister()} />
            </View>
        </View>
    )
}

export default Step4