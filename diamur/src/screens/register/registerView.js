import React, { useState, useRef, useEffect } from 'react'
import { View, SafeAreaView } from "react-native";
import normalize from 'react-native-normalize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ActivityIndicator } from "react-native";
import ModalSelector from 'react-native-modal-selector'
import I18n from 'react-native-i18n';
import { Logo, Accordian } from '../../components';
import { Step1, Step2, Step3, Step4, Step5, Step6 } from './components';
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../redux/action'
import { NAVIGATION } from '../../constants';
import { styles } from './register.style';

const RegisterView = (props) => {
    const [showRegister, setShowRegister] = useState(true)
    const [step2, setStep2] = useState(false)
    const [step3, setStep3] = useState(false)
    const [step4, setStep4] = useState(false)
    const [step5, setStep5] = useState(false)
    const [step6, setStep6] = useState(false)

    const [state, setState] = useState({})

    var langRef = useRef()
    var index = 0
    const data = [
        { key: index++, section: true, label: 'Select Language' },
        { key: index++, label: "NL" },
        // { key: index++, label: "EN" },
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

            I18n.locale = lang
            setLanguage(lang)
            props.actions.setUserLanguage(lang)
        }
    }

    const checkCompanySubmit = (data) => {
        let obj = {
            company_number: data
        }
        props.actions.companyCheckAction(obj)
    }
    useEffect(() => {
        if (authState.checkCompany?.data?.status) {
            if (authState.checkCompany?.data?.payload?.is_user === 0) {
                setShowRegister(false)
                goToStep2(true)
            }
            else if (authState.checkCompany?.data?.payload?.is_verified === null) {
                setShowRegister(false)
                goToStep3(true)
            }
            else if (authState.checkCompany?.data?.payload?.is_verified === 1) {
                setShowRegister(false)
                goToStep6(true)
            }
        }
    }, [authState.checkCompany])
    const cleanUp = () => {
        props.actions.cleanUpState()
    }

    function handleBack() {
        setShowRegister(false)
        props.navigation.navigate(NAVIGATION.introduction);
    }

    function goToStep2() {
        setShowRegister(false)
        setStep2(true)
    }
    const handleRegister = (data, terms, check1, check2, check3) => {
        let obj = {
            company: data.company,
            btwNumber: data.btwNumber,
            activity: [check1 ? 1 : 0, check2 ? 1 : 0, check3 ? 1 : 0],
            responsible: data.responsible,
            email: data.email,
            telephone: data.telephone,
            address: data.address,
            number: data.number,
            township: data.city,
            postcode: data.postcode,
            terms: terms ? 1 : 0
        }
        setState(obj)
        goToStep4()
    }
    const handleConfirmRegister = (data) => {
        let obj = {
            company: data.company,
            btwNumber: data.btwNumber,
            activity: data.activity,
            responsible: data.responsible,
            email: data.email,
            telephone: data.telephone,
            address: data.address,
            number: data.number,
            township: data.city,
            postcode: data.postcode,
            password: data.password,
            password_confirmation: data.password_confirmation,
            terms: data.terms
        }
        props.actions.signUpAction(obj)
    }
    useEffect(() => {
        if (authState.signUp?.data?.status) {
            goToStep5()
        }
    }, [authState.signUp])
    function goToStep3() {
        setStep2(false)
        setStep3(true)
    }

    function goToStep4() {
        setStep2(false)
        setStep4(true)

    }

    function goToStep5() {
        setStep4(false)
        setStep5(true)
    }
    function goToStep7() {
        setStep6(false)
    }
    function goToStep6() {
        //setStep4(false)
        //setStep5(true)
        props.navigation.navigate(NAVIGATION.drawer)
    }

    function goBackToStep1() {
        setShowRegister(true)
        setStep2(false)
        setStep3(false)
        setStep4(false)
        setStep5(false)
    }

    function goBackToStep2() {
        setShowRegister(true)
        setStep3(false)
    }

    return (
        <SafeAreaView style={styles.container}>
            {(authState.checkCompany?.loading || authState.signUp?.loading) &&
                <View style={styles.loading}>
                    <ActivityIndicator size="large" />
                </View>
            }
            <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={{}}>
                    <View style={{
                        marginLeft: normalize(72),
                        marginRight: normalize(68)
                    }}>
                        <ModalSelector
                            animationType="fade"
                            overlayStyle={{ flex: 1, padding: '5%', justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.7)' }}
                            ref={selector => { langRef = selector }}
                            data={data}

                            onModalClose={(option) => { onChangeLanguage(option) }}
                            customSelector={<Accordian title={language.toUpperCase()} onClick={onClickLanguage} />}
                        />
                        <Logo />
                    </View>


                    {
                        showRegister ?
                            <Step1 goBack={handleBack} error={authState.checkCompany?.error?.payload} checkCompanySubmit={checkCompanySubmit} cleanUp={cleanUp} />
                            : null
                    }

                    {
                        step2 ? <Step2 goToStep3={goToStep3} goBack={goBackToStep1} handleRegister={handleRegister} cleanUp={cleanUp} /> : null
                    }

                    {
                        step3 ? <Step3 goToStep4={goToStep4} goBack={goBackToStep2} cleanUp={cleanUp} /> : null
                    }

                    {
                        step4 ? <Step4 goToStep5={goToStep5} state={state} handleConfirmRegister={handleConfirmRegister} cleanUp={cleanUp} /> : null
                    }

                    {
                        step5 ? <Step5 goToStep6={goToStep6} cleanUp={cleanUp} /> : null
                    }
                    {
                        step6 ? <Step6 goToStep7={goToStep7} cleanUp={cleanUp} /> : null
                    }
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(RegisterView);
