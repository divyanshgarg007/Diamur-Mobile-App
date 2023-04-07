import React, { useState, useEffect } from 'react'
import { View } from "react-native";
import { strings } from '../../../localization'
import { useSelector } from 'react-redux'
import { OSB17Text, MSB16Button, MSL14Text, OSR11Button, OSR11Text, OSR12Text, OSB12Text, OSR10Text, MSB14Text } from '../../../components/elements';
import GlobalStyles from '../../../style/globalstyle';
import { Input, CheckBox } from 'react-native-elements';
import normalize from 'react-native-normalize';

const Step6 = (props) => {
    useEffect(() => {
        return () => {
            props.cleanUp()
        }
    }, [])
    const authState = useSelector((state) => state.rootReducers?.authState)
    return (
        <View style={{ marginTop: normalize(20), marginHorizontal: normalize(72) }}>
            <View style={{}}>
                <OSB17Text>{strings('register.hiSkkills')}</OSB17Text>
                <MSL14Text style={{ marginTop: normalize(10) }}>{strings('register.welcomeDiamurApp')}{"\n\n"}{strings('register.yourCompanyNumber')}:{'\n'}
                    <MSB14Text>{authState.checkCompany?.data?.payload?.btw_number} </MSB14Text>
                    {strings('register.alreadyKnownOurSystem')} {"\n\n"}{strings('register.step3SubTitle1')}:{'\n'}
                    <MSB14Text style={{ lineHeight: 20 }}>{authState.checkCompany?.data?.payload?.email}{'\n\n'}</MSB14Text>
                    {strings('register.step3SubTitle2')}
                </MSL14Text>

                <MSB16Button style={{ marginTop: 3, backgroundColor: GlobalStyles.colorSet.semiorange }} titleStyle={{ textTransform: "uppercase" }} title="Wachten op bevestiging" onPress={() => props.goToStep4()} />
                <OSR11Button title={strings("register.back")} style={{ alignSelf: 'flex-end', backgroundColor: 'white', }} titleStyle={{ textDecorationLine: "underline" }} onPress={() => props.goBack()} />
            </View>

            <View style={{ marginTop: normalize(20), }}>
                <MSL14Text style={{}}>{strings("register.step3SubTitle3")} {"\n"}{strings("register.step3SubTitle4")}
                    <MSB14Text style={{ fontSize: 13, lineHeight: 20 }}> +32 3 544 15 20</MSB14Text>
                </MSL14Text>
            </View>
        </View>
    )
}

export default Step6