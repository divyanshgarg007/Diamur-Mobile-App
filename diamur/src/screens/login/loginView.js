import React, { useState, useRef, useEffect } from 'react'
import { View, SafeAreaView } from "react-native";
import { Input } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { OSB17Text, MSB16Button, MSL14Text, OSR11Text, OSR12Button } from '../../components/elements'
import GlobalStyles from '../../style/globalstyle';
import { styles } from './login.style'
import { ActivityIndicator } from "react-native";
import ModalSelector from 'react-native-modal-selector'
import I18n from 'react-native-i18n';
import { strings } from '../../localization'
import { Logo, Accordian } from '../../components';

import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../redux/action'

import { NAVIGATION } from '../../constants';

const LoginView = (props) => {

    const [state, setState] = useState({})

    var langRef = useRef()
    var index = 0
    const data = [
        { key: index++, section: true, label: 'Select Language' },
        { key: index++, label: "NL" },
        //{ key: index++, label: "EN" },
        { key: index++, label: "FR" },
    ];


    const authState = useSelector((state) => state.rootReducers?.authState)
    const [language, setLanguage] = useState(authState.settings.language ? authState.settings.language : 'nl');

    I18n.locale = language

    const onClickLanguage = () => {
        langRef.open()
    }

    const onChangeLanguage = (option) => {
        var lang = ""
        if (option.key) {
            if (option.key == 1) {
                lang = "nl"
            } else {
                lang = "fr"
            }
            // else {
            //     lang = "en"
            // }

            I18n.locale = lang
            setLanguage(lang)
            props.actions.setUserLanguage(lang)
        }
    }

    function login() {
        let obj = {
            email: state.email,
            password: state.password
        }
        //props.navigation.navigate(NAVIGATION.drawer)
        props.actions.loginAction(obj)
    }
    useEffect(() => {
        if (authState.signIn?.data?.payload) {
            props.navigation.navigate(NAVIGATION.drawer)
        }
    }, [authState.signIn])
    function handleRegister() {
        //setShowRegister(true)
        props.navigation.navigate(NAVIGATION.register)
    }

    function goToForgotPass() {
        //navigation.navigate("Forgot")
        //alert('c')

    }
    // useEffect(() => {
    //     return () => {
    //         props.actions.cleanUpState()
    //     }
    // }, [])
    return (
        <SafeAreaView style={styles.container}>
            {(authState.signIn?.loading &&
                <View style={styles.loading}>
                    <ActivityIndicator size="large" />
                </View>
            )}
            <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={{ position: 'relative' }}>
                    <ModalSelector
                        animationType="fade"
                        overlayStyle={{ flex: 1, padding: '5%', justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.7)' }}
                        ref={selector => { langRef = selector }}
                        data={data}

                        onModalClose={(option) => { onChangeLanguage(option) }}
                        customSelector={<Accordian title={language.toUpperCase()} onClick={onClickLanguage} />}
                    />
                    <Logo />

                    <View style={{ marginTop: normalize(20), width: 232 }}>
                        <OSB17Text style={{ fontSize: 16, lineHeight: 20 }}>{strings("login.welcome")}</OSB17Text>
                        <MSL14Text style={{ marginTop: normalize(10), fontSize: 14, lineHeight: 18 }}>{strings("login.description")}</MSL14Text>
                        <OSR11Text style={{ marginTop: normalize(20), fontSize: 11, fontFamily: GlobalStyles.fontSet.OpenSansSemiBold }}>{strings("login.formTitle")}</OSR11Text>
                        <View style={{ marginTop: 10 }}>
                            <Input
                                placeholder={strings("login.email")}
                                onChangeText={value => setState({ ...state, email: value })}
                                containerStyle={{ height: 30, borderColor: '#9A9B9F', borderWidth: 0.5, }}
                                inputStyle={{ fontSize: 11, fontFamily: GlobalStyles.fontSet.OpenSansRegular, }}
                                inputContainerStyle={{ borderBottomWidth: 0, height: 30 }}
                            />
                            {authState.signIn?.error?.payload?.email && authState.signIn?.error?.payload?.email[0] && <MSL14Text style={{ marginTop: normalize(3), fontSize: 12, color: 'red' }}>{authState.signIn?.error?.payload?.email[0]}</MSL14Text>}
                            <Input
                                placeholder={strings("login.password")}
                                secureTextEntry={true}
                                onChangeText={value => setState({ ...state, password: value })}
                                containerStyle={{ marginTop: 10, height: 30, borderColor: '#9A9B9F', borderWidth: 0.5, }}
                                inputStyle={{ fontSize: 11, fontFamily: GlobalStyles.fontSet.OpenSansRegular, }}
                                inputContainerStyle={{ borderBottomWidth: 0, height: 30, }}
                            />
                        </View>
                        {authState.signIn?.error?.payload?.password && authState.signIn?.error?.payload?.password[0] && <MSL14Text style={{ marginTop: normalize(3), fontSize: 12, color: 'red' }}>{authState.signIn?.error?.payload?.password[0]}</MSL14Text>}
                        <OSR12Button style={{ alignSelf: 'flex-end' }} buttonStyle={{ padding: 0 }} titleStyle={{ textDecorationLine: "underline" }} title={strings("login.forgotPassword")} onPress={() => goToForgotPass()}></OSR12Button>
                        <MSB16Button style={{ marginTop: 20 }} title={strings("login.login")} onPress={() => login()} />
                        <OSR12Button style={{ alignSelf: 'flex-end' }} buttonStyle={{ padding: 0 }} titleStyle={{ textDecorationLine: "underline" }} title={strings("login.createAccount")} onPress={() => handleRegister()}></OSR12Button>
                    </View>
                </View>

            </KeyboardAwareScrollView>
        </SafeAreaView >
    )
}



const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(LoginView);