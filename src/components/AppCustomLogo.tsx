import React from 'react';
import { View, Text, Image, ViewStyle } from 'react-native';


import { AppCustomLogoScreenStyles as styles } from "@styles/AppCustomLogoStyles";
import { Heading1 } from "@components/AppText";


interface Props {
    containerStyles?: ViewStyle
}
const AppCustomLogo: React.FC<Props> = ({ containerStyles }) => {
    return (
        <View style={[styles.wrapper, containerStyles]}>
            <View style={styles.circle} />
            <Image style={styles.logoImg}
                resizeMode="contain"
                source={require("@assets/logo_img.png")} />
            <Heading1 style={styles.text}>Daily Recipe</Heading1>
        </View>
    );
}

export default AppCustomLogo;