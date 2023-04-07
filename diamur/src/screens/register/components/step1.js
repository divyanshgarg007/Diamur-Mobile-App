import React, { useState, useEffect } from 'react'
import { View } from "react-native";
import { strings } from '../../../localization'
import { OSB17Text, MSB16Button, MSL14Text, OSR11Text, OSR11Button, OSR12Text, OSR11Input, OSB12Text, OSR10Text } from '../../../components/elements';
import GlobalStyles from '../../../style/globalstyle';
import { Input, CheckBox, Text } from 'react-native-elements';
import normalize from 'react-native-normalize';

const Step1 = (props) => {

    const [state, setState] = useState({})
    const [validation, setValidation] = useState(false)
    const checkCompanySubmit = () => {
        if (!validation) {
            props.checkCompanySubmit(state.companyNumber)
        }
    }
    const handleChange = (value) => {
        if (value.charAt(0) === '0' || value.charAt(0) === '') {
            setValidation(false)
        } else {
            setValidation(true)
        }
        setState({ ...state, companyNumber: value })
    }
    return (
        <View style={{ marginTop: normalize(20), marginHorizontal: normalize(72), }}>
            <OSB17Text style={{ fontSize: 16, lineHeight: 20 }}>{strings("register.welcome")}</OSB17Text>
            <MSL14Text style={{ marginTop: normalize(10), fontSize: 14, lineHeight: 18 }}>{strings("register.description")}</MSL14Text>
            <OSR11Text style={{ marginTop: normalize(20), fontSize: 12, fontFamily: GlobalStyles.fontSet.OpenSansBold }}>{strings("register.companyNumber")}</OSR11Text>
            <View style={{ marginTop: 10 }}>
                <Input
                    placeholder="BE 0XXX.XXX.XXX"
                    onChangeText={handleChange}
                    containerStyle={{ height: 30, borderColor: '#9A9B9F', borderWidth: 0.5, }}
                    inputStyle={{ fontSize: 11, fontFamily: GlobalStyles.fontSet.OpenSansRegular, }}
                    inputContainerStyle={{ borderBottomWidth: 0, height: 30 }}
                    value={state.companyNumber}
                />
                {validation && <MSL14Text style={{ marginTop: normalize(3), fontSize: 12, color: 'red' }}>{strings("register.Ovalidation")}</MSL14Text>}
                {/* {props?.error && <MSL14Text style={{ marginTop: normalize(3), fontSize: 12, color: 'red' }}>{props?.error?.companyNumber[0]}</MSL14Text>} */}
            </View>

            <MSB16Button style={{ marginTop: 35 }} title={strings("register.btnRegister")} onPress={() => checkCompanySubmit()} />
            {/* <OSR11Text style={{ lineHeight: 17, marginTop: 5, alignSelf: 'flex-end', textDecorationLine: "underline" }} onPress={() => props.navigation.goBack()}>{strings("register.back")}</OSR11Text> */}
            <OSR11Button title={strings("register.back")} style={{ alignSelf: 'flex-end', backgroundColor: 'white', }} titleStyle={{ textDecorationLine: "underline" }} onPress={() => props.goBack()} />
        </View>
    )
}

export default Step1