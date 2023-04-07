import React from 'react';
import { StyleSheet, View } from "react-native";
import { Button, Card, Image, Icon } from 'react-native-elements'

import { OSR16Text, OSR11Text } from '../../components/elements'
import GlobalStyles from '../../style/globalstyle';
import { strings } from '../../localization';
import beton from '../../assets/images/beton.png'
import logo2 from '../../assets/images/logo2.png'

const TITLE = "C20/25 beton S3 D10"
const PRICE = "€ 25,00"
const PERPRICE = "€ 250,00/package"
const ProductPicture = "Products in the picture"

const ProductCard = (props) => {
    return (
        <Card containerStyle={{ padding: 0, borderRadius: 5 }}>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", padding: 10, }}>

                {
                    props.hide &&
                    <View style={styles.top}>
                        <OSR11Text style={{ color: "white" }}>{ProductPicture}</OSR11Text>
                    </View>
                }
                <View style={{ flex: 1.5 }}>
                    <Image
                        source={beton}
                        style={{ width: 91, height: 131, }}
                    />
                </View>
                <View style={{ flex: 2.5, marginLeft: 10 }}>
                    <OSR16Text style={{ lineHeight: 20 }}>{TITLE}</OSR16Text>
                    <OSR16Text style={{ lineHeight: 20, marginTop: 5, fontFamily: GlobalStyles.fontSet.OpenSansBold }}>{PRICE}</OSR16Text>
                    <OSR11Text style={{ lineHeight: 20, }}>{PERPRICE}</OSR11Text>
                </View>
                <View style={{ flex: 0.9, height: "100%", flexDirection: 'row', justifyContent: "flex-end", }}>
                    <Image
                        source={logo2}
                        style={{ width: 48, height: 27, marginBottom: 10 }}
                    />
                </View>
            </View>
            {
                !props.hide ?
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 60 }}>
                            <Button
                                icon={<Icon name='plus' color={GlobalStyles.colorSet.orange} backgroundColor="white" type='antdesign' size={12} />}
                                buttonStyle={styles.shopCart}
                                containerStyle={{ borderRadius: 0, }}
                                title={strings("buttons.shoppingCart")}
                                titleStyle={{ marginLeft: 5, color: "white" }}
                            />
                        </View>
                        <View style={{ flex: 40 }}>
                            <Button
                                buttonStyle={styles.viewProduct}
                                containerStyle={{ borderRadius: 0, }}
                                title={strings("buttons.viewProduct")}
                                titleStyle={{ marginLeft: 5, color: "white" }}
                            />
                        </View>
                    </View>
                    :
                    <View />
            }
        </Card>
    )
}

const styles = StyleSheet.create({
    top: {
        position: "absolute",
        top: 0,
        zIndex: 10,
        padding: 10,
        backgroundColor: "black",
        borderBottomEndRadius: 4,
        borderTopLeftRadius: 4
    },
    shopCart: {
        borderRadius: 0,
        borderBottomLeftRadius: 4,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        backgroundColor: GlobalStyles.colorSet.orange
    },
    viewProduct: {
        borderRadius: 0,
        borderBottomEndRadius: 4,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        backgroundColor: GlobalStyles.colorSet.black
    }
})

export default ProductCard;