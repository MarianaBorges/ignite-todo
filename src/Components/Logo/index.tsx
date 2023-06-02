import React from "react";
import { View, Image } from "react-native";

function Logo(){
    return (
        <View>
            <Image testID="logoId" source={require('../../assets/Logo.png')} />
        </View>
    )
}

export { Logo }