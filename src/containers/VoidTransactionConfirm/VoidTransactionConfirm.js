import React, { Component } from 'react';
import { ImageBackground, View, Image, Text, TouchableOpacity } from "react-native";
import styles from './VoidTransactionConfirmStyles'

export default class VoidTransactionConfirm extends Component {
    constructor(props) {
        super(props);
    }

    _onYesVoidTransaction() {
        this.props.navigation.navigate("TransactionVoided");
    }

    _onNoReturnToTransactions() {
        this.props.navigation.navigate("Transactions");
    }

    render() {
        const {
            ImageBackgroundStyle,
            MainContainer,
            MenuButtonContainer,
            MenuButtonStyle,
            TopContainer,
            HeadingText,
            MiddleContainer,
            ErrorHeading,
            ErrorTextContainer,
            ErrorTextStyle,
            ProceedButtonContainer,
            YesButtonContainer,
            NoButtonContainer,
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
                    <View style={TopContainer}>
                        <Text style={HeadingText}>Transaction # 12345678</Text>
                        <Text style={HeadingText}>Amount $112. Time 12AM</Text>
                    </View>
                    <View style={MiddleContainer}>
                        <Text style={ErrorHeading}>Details:</Text>
                        <View style={ErrorTextContainer}>
                            <Text style={ErrorTextStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised \n in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        </View>
                    </View>
                    <View style={ProceedButtonContainer}>
                        <TouchableOpacity style={YesButtonContainer}
                            onPress={() => this._onYesVoidTransaction()}>
                            <Text style={ButtonText}>YES, VOID TRANSACTION</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={NoButtonContainer}
                            onPress={() => this._onNoReturnToTransactions()}>
                            <Text style={ButtonText}>NO, RETURN TO TRANSACTIONS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
