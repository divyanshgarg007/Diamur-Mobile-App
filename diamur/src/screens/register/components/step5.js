import React, { useEffect } from 'react'
import { View } from "react-native";
import { strings } from '../../../localization'
import { OSB17Text, MSB16Button, MSL14Text, OSR11Text, OSR12Text, OSB12Text, OSR10Text, MSB16Text } from '../../../components/elements';
import GlobalStyles from '../../../style/globalstyle';
import normalize from 'react-native-normalize';


const Step5 = (props) => {
    useEffect(() => {
        return () => {
            props.cleanUp()
        }
    }, [])
    return (
        <View style={{ marginHorizontal: normalize(43), }}>
            <View style={{ marginTop: normalize(20), marginHorizontal: normalize(30), }}>
                <OSB17Text>{strings('register.step5title')}</OSB17Text>
                <MSL14Text style={{ marginTop: normalize(10) }}>{strings('register.step5title1')}{"\n\n"}{strings('register.step5title2')}</MSL14Text>
            </View>

            <MSB16Text style={{ textAlign: 'center', marginTop: 20, fontSize: 15, color: GlobalStyles.colorSet.darkgreen }}>{strings('register.step5title3')}</MSB16Text>
            <View style={{ marginTop: normalize(20), marginHorizontal: normalize(30), }}>
                <MSB16Button style={{ backgroundColor: GlobalStyles.colorSet.orange }} titleStyle={{ textTransform: "uppercase" }} title="START WITH THE APP" onPress={() => props.goToStep6()} />
            </View>
        </View>
    )
}

export default Step5