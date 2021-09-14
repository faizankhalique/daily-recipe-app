import { StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen'


import { getFontSize } from "@components/AppText";


export const AppCustomLogoScreenStyles = StyleSheet.create({
    wrapper: {
        position: "relative",
        alignItems: "center"
    },
    circle: {
        height: wp(30),
        width: wp(30),
        borderRadius: wp(15),
        backgroundColor: "#B6B9C2",
        opacity:0.5,
        // borderWidth:2,
        // borderColor:"#fff"
    },
    text: {
        position: "absolute",
        color: "#fff",
        bottom:wp(5),
        fontWeight:"normal"
        
    },
    logoImg: {
        position:"absolute",
        marginTop:wp(1),
        width: "100%"
    }

});