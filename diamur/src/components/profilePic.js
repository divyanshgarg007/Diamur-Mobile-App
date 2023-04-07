import React, { useState } from "react"
import { StyleSheet, View, Image, Platform, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import { cameraIcon } from "../assets";
//import ImagePicker from 'react-native-image-crop-picker';
import { CONSTANT } from '../constants';


const ProfilePic = (props) => {
    const [imageUrl, setImageUrl] = useState(getProfilePicUrl())
    const [isLoading, setIsLoading] = useState(true)

    function getProfilePicUrl() {
        var url = ""
        if (props.url) {
            if (props.url.includes('https')) {
                url = props.url
            } else {
                url = `${CONSTANT.PIC_BASE_URL}/storage/${props.url}`
            }
        }

        return url
    }

    const getShortName = () => {
        var sn = ""
        if (props.name.length > 0) {
            sn += props.name[0]
        }
        if (props.surName.length > 0) {
            sn += props.surName[0]
        }
        return "MS"
    }

    const onPressAdd = () => {
        // ImagePicker.openPicker({
        //     mediaType: "photo",
        // }).then(image => {
        //     if (Platform.OS == 'ios') {
        //         setImageUrl(image.path)
        //         this.props.onImageSelect(image.path)
        //     } else {
        //         setImageUrl(image.path)
        //         this.props.onImageSelect(image.path)
        //     }

        // });
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.circle} onPress={() => onPressAdd()}>
                {
                    (imageUrl && imageUrl.length > 0) ?
                        <View>
                            <Image style={{ width: 98, height: 98, borderRadius: 49, }}
                                source={{ uri: imageUrl }}
                                onLoadEnd={() => {
                                    setIsLoading(false)
                                }} />
                            <ActivityIndicator
                                style={styles.activityIndicator}
                                animating={isLoading}
                            />
                        </View>
                        :
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.sortName}>{getShortName()}</Text>
                        </View>
                }
                <View style={styles.cameraCircle}>
                    <Image style={{ width: 12, height: 10 }} source={cameraIcon}></Image>
                </View>

            </TouchableOpacity>
            <Text style={styles.name}>{props.name} {props.surName}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 30,
        marginTop: 16,
    },
    name: {
        fontWeight: 'bold',
        marginTop: 7,
        fontSize: 28
    },
    sortName: {
        fontWeight: 'bold',
        fontSize: 32
    },
    circle: {
        width: 114,
        height: 114,
        marginRight: 20,
        borderRadius: 57,
        borderWidth: 1,
        borderColor: '#707070',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cameraCircle: {
        top: 70,
        left: 70,
        position: 'absolute',
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.46)',
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 6,
        shadowOffset: { width: 0, height: 3 }
    },
    activityIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
})

export default ProfilePic