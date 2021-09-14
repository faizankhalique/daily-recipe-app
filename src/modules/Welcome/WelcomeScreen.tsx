import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Label12, Label14 } from "@components/AppText";

import { WelcomeScreenStyles as styles } from "@styles/WelcomeScreenStyles";
import AppCustomLogo from "@components/AppCustomLogo"
import AppButton from '@components/AppButton';
import NavigationService from '@navigation/NavigationService';

function WelcomeScreen(props) {
    return (
        <ImageBackground source={require("@assets/app_bg.png")} style={styles.wrapper}>
            <View style={styles.textContainer}>
                <AppCustomLogo />
                <Label12 style={styles.smallText}>Cooking Done The Easy Way</Label12>
            </View>
            <View style={styles.bottomContainer}>
                <AppButton title="Register" onPress={() => NavigationService.navigate("Register", {})} buttonContainerStyles={styles.buttonContainerStyles} />
                <TouchableOpacity onPress={() => NavigationService.navigate("Login", {})}>
                    <Label14 style={styles.signInText}>Sign In</Label14>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

export default WelcomeScreen;