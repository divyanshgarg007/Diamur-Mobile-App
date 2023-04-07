import React, { useState, useEffect, useRef } from 'react'
import { View } from "react-native";
import { strings } from '../../../localization'
import { OSB17Text, MSB16Button, MSL14Text, OSR11Text, OSR11Button, OSR12Text, OSR11Input, OSB12Text, OSR10Text } from '../../../components/elements';
import GlobalStyles from '../../../style/globalstyle';
import SimpleReactValidator from 'simple-react-validator'
import { Input, CheckBox } from 'react-native-elements';
import normalize from 'react-native-normalize';

const Step2 = (props) => {

    const [state, setState] = useState({})
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [terms, setTerm] = useState(false);
    const [, forceUpdate] = useState()
    const simpleValidator = useRef(new SimpleReactValidator())
    useEffect(() => {
        return () => {
            props.cleanUp()
        }
    }, [])
    const handleRegister = () => {
        let isValid = simpleValidator.current.allValid()
        if (!isValid) {
            simpleValidator.current.showMessages(true)
            forceUpdate(1)
        }
        if (simpleValidator.current.allValid()) {
            props.handleRegister(state, terms, check1, check2, check3)
        }
    }
    return (
        <View style={{ marginTop: normalize(20), marginHorizontal: normalize(72) }}>

            <OSB17Text style={{ fontSize: 16, lineHeight: 20 }}>{strings("register.welcome")}</OSB17Text>
            <MSL14Text style={{ marginTop: normalize(10), fontSize: 14, lineHeight: 18 }}>{strings("register.step2Description")}</MSL14Text>

            <View style={{ marginTop: 10 }}>
                <Input
                    placeholder='Skkills'
                    onChangeText={value => setState({ ...state, company: value })}
                    onBlur={() => simpleValidator.current.showMessageFor('company')}
                    errorMessage={simpleValidator.current.message('company', state.company, 'required')}
                    containerStyle={{ marginBottom: normalize(25), borderColor: '#9A9B9F', borderWidth: 0.5 }}
                    errorStyle={{ marginTop:normalize(32), position:'absolute' }}
                    inputStyle={{ fontSize: normalize(12), fontFamily: GlobalStyles.fontSet.OpenSansRegular }}
                    inputContainerStyle={{ borderBottomWidth: 0, height: 30 }}
                />
                <Input
                    placeholder='BE0266.546.461'
                    onChangeText={value => setState({ ...state, btwNumber: value })}
                    onBlur={() => simpleValidator.current.showMessageFor('btwNumber')}
                    errorMessage={simpleValidator.current.message('btwNumber', state.btwNumber, 'required')}
                    containerStyle={{ marginBottom: normalize(10), borderColor: '#9A9B9F', borderWidth: 0.5 }}
                    errorStyle={{ marginTop:normalize(32), position:'absolute' }}
                    inputStyle={{ fontSize: normalize(12), fontFamily: GlobalStyles.fontSet.OpenSansRegular }}
                    inputContainerStyle={{ borderBottomWidth: 0, height: 30 }}
                />
            </View>

            <View style={{ marginTop: 15, }}>
                <OSB12Text>{strings("register.activity")}</OSB12Text>
                <View style={{ backgroundColor: 'white', flexDirection: "row", justifyContent: 'space-evenly' }}>
                    <CheckBox
                        checked={check1}
                        title={<OSR11Text style={{ marginLeft: 5 }}>{strings("register.floorer")}</OSR11Text>}
                        size={15}
                        uncheckedColor='#43464B'
                        containerStyle={{ backgroundColor: "white", borderColor: "white" }}

                        onPress={() => setCheck1(!check1)} />
                    <CheckBox
                        checked={check2}
                        title={<OSR11Text style={{ alignSelf: 'center', marginLeft: 5 }}>{strings("register.mason")}</OSR11Text>}
                        size={15}
                        uncheckedColor='#43464B'
                        containerStyle={{ backgroundColor: "white", borderColor: "white" }}

                        onPress={() => setCheck2(!check2)} />

                    <CheckBox
                        checked={check3}
                        title={<OSR11Text style={{ marginLeft: 5 }}>{strings("register.contractor")}</OSR11Text>}
                        size={15}
                        uncheckedColor='#43464B'
                        containerStyle={{ backgroundColor: "white", borderColor: "white" }}

                        onPress={() => setCheck3(!check3)} />
                </View>
            </View>

            <View>
                <Input placeholder='Name responsible person' onChangeText={value => setState({ ...state, responsible: value })}
                    onBlur={() => simpleValidator.current.showMessageFor('responsible')}
                    errorMessage={simpleValidator.current.message('responsible', state.responsible, 'required')} 
                    containerStyle={{ marginBottom: normalize(25), borderColor: '#9A9B9F', borderWidth: 0.5 }}
                    errorStyle={{ marginTop:normalize(32), position:'absolute' }}
                    inputStyle={{ fontSize: normalize(12), fontFamily: GlobalStyles.fontSet.OpenSansRegular }}
                    inputContainerStyle={{ borderBottomWidth: 0, height: 30 }}
                    />
                <Input placeholder='Emailaddress' onChangeText={value => setState({ ...state, email: value })}
                    onBlur={() => simpleValidator.current.showMessageFor('email')}
                    errorMessage={simpleValidator.current.message('email', state.email, 'required|email')} 
                    containerStyle={{ marginBottom: normalize(25), borderColor: '#9A9B9F', borderWidth: 0.5 }}
                    errorStyle={{ marginTop:normalize(32), position:'absolute' }}
                    inputStyle={{ fontSize: normalize(12), fontFamily: GlobalStyles.fontSet.OpenSansRegular }}
                    inputContainerStyle={{ borderBottomWidth: 0, height: 30 }}
                    />
                <Input placeholder='Telephone' onChangeText={value => setState({ ...state, telephone: value })}
                    onBlur={() => simpleValidator.current.showMessageFor('telephone')}
                    errorMessage={simpleValidator.current.message('telephone', state.telephone, 'required')} 
                    containerStyle={{ marginBottom: normalize(10), borderColor: '#9A9B9F', borderWidth: 0.5 }}
                    errorStyle={{ marginTop:normalize(32), position:'absolute' }}
                    inputStyle={{ fontSize: normalize(12), fontFamily: GlobalStyles.fontSet.OpenSansRegular }}
                    inputContainerStyle={{ borderBottomWidth: 0, height: 30 }}
                    />
            </View>



            <View style={{ marginTop: 20 }}>
                <OSB12Text>{strings("register.headOffice")}</OSB12Text>
                <Input placeholder='Adress + number' onChangeText={value => setState({ ...state, address: value })}
                    onBlur={() => simpleValidator.current.showMessageFor('address')}
                    errorMessage={simpleValidator.current.message('address', state.address, 'required')} 
                    containerStyle={{ marginBottom: normalize(25), marginTop: normalize(15), borderColor: '#9A9B9F', borderWidth: 0.5 }}
                    errorStyle={{ marginTop:normalize(32), position:'absolute' }}
                    inputStyle={{ fontSize: normalize(12), fontFamily: GlobalStyles.fontSet.OpenSansRegular }}
                    inputContainerStyle={{ borderBottomWidth: 0, height: 30 }}
                    />
                <Input placeholder='City' onChangeText={value => setState({ ...state, city: value })}
                    onBlur={() => simpleValidator.current.showMessageFor('city')}
                    errorMessage={simpleValidator.current.message('city', state.city, 'required')} 
                    containerStyle={{ marginBottom: normalize(25), borderColor: '#9A9B9F', borderWidth: 0.5 }}
                    errorStyle={{ marginTop:normalize(32), position:'absolute' }}
                    inputStyle={{ fontSize: normalize(12), fontFamily: GlobalStyles.fontSet.OpenSansRegular }}
                    inputContainerStyle={{ borderBottomWidth: 0, height: 30 }}
                    />
                <Input placeholder='ZIP code' onChangeText={value => setState({ ...state, postcode: value })}
                    onBlur={() => simpleValidator.current.showMessageFor('postcode')}
                    errorMessage={simpleValidator.current.message('postcode', state.postcode, 'required')} 
                    containerStyle={{ marginBottom: normalize(15), borderColor: '#9A9B9F', borderWidth: 0.5 }}
                    errorStyle={{ marginTop:normalize(32), position:'absolute' }}
                    inputStyle={{ fontSize: normalize(12), fontFamily: GlobalStyles.fontSet.OpenSansRegular }}
                    inputContainerStyle={{ borderBottomWidth: 0, height: 30 }}
                    />
            </View>

            <View style={{ maxWidth: "100%", flexDirection: 'row', justifyContent: 'flex-start' }}>
                <CheckBox
                    checked={terms}
                    size={15}
                    uncheckedColor='#43464B'
                    containerStyle={{ alignSelf: 'flex-start', backgroundColor: "white", borderColor: "white", flexDirection: "row", alignItems: 'center', justifyContent: 'space-evenly' }}
                    onPress={() => setTerm(!terms)}
                    title={<OSR10Text style={{ marginLeft: 5 }}>{strings("register.termsCondition")}</OSR10Text>}
                />
            </View>

            <View>
                <MSB16Button title="NEXT STEP" onPress={() => handleRegister()}/>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end", marginTop: normalize(5) }} onPress={() => handleBack()}>
                {/* <OSR12Text style={{ textDecorationLine: "underline" }}>Terug</OSR12Text> */}
                <OSR11Button title={strings("register.back")} style={{ alignSelf: 'flex-end', backgroundColor: 'white', }} titleStyle={{ textDecorationLine: "underline" }} onPress={() => props.goBack()} />
            </View>

        </View>
    )
}

export default Step2