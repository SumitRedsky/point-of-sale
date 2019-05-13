import React, { Component } from 'react';
import { ImageBackground, View, Image, Text, TouchableOpacity } from "react-native";
import styles from './TransactionVoidedStyles'

export default class TransactionVoided extends Component {
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
            CrossImage,
            ProceedButtonContainer,
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
                        <Text style={HeadingText}>Voided</Text>
                    </View>
                    <View style={ProceedButtonContainer}>
                        <Image style={CrossImage}
                            source={require("./../../images/cross.png")}>
                        </Image>
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
