import React, { Component } from 'react';
import { ImageBackground, View, Image, Text, TouchableOpacity } from "react-native";
import styles from './TransactionRejectedStyles'

export default class TransactionRejected extends Component {
    constructor(props) {
        super(props);
    }
    _onReturnHome() {
        this.props.navigation.navigate("Home");
    }
    render() {
        const {
            ImageBackgroundStyle,
            MainContainer,
            MenuButtonContainer,
            MenuButtonStyle,
            InnerContainer,
            HeadingText,
            CautionImage,
            ProceedButtonContainer,
            ErrorHeading,
            ErrorTextContainer,
            ErrorTextStyle,
            ButtonContainer,
            ButtonText
        } = styles;
        return (
            <ImageBackground style={ImageBackgroundStyle}
                source={require("./../../images/background.png")}>
                <View style={MainContainer}>
                    <View style={MenuButtonContainer}>
                        <TouchableOpacity>
                            <Image style={MenuButtonStyle}
                                source={require("./../../images/menu.png")}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={InnerContainer}>
                        <Text style={HeadingText}>Transaction</Text>
                        <Text style={HeadingText}>Rejected!</Text>
                        <Image style={CautionImage}
                            source={require("./../../images/caution.png")}>
                        </Image>
                    </View>
                    <View style={ProceedButtonContainer}>
                        <Text style={ErrorHeading}>Details:</Text>
                        <View style={ErrorTextContainer}>
                            <Text style={ErrorTextStyle}>Error Code 418</Text>
                            <Text style={ErrorTextStyle}>Polaroid Drinking Vinegar Hell</Text>
                        </View>
                        <TouchableOpacity style={ButtonContainer}
                            onPress={() => this._onReturnHome()}>
                            <Text style={ButtonText}>RETURN TO HOME</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
