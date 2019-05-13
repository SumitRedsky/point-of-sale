import React, { Component } from 'react';
import { ImageBackground, View, Image, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import styles from './NewSaleStyles'

export default class NewSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saleAmount: ""
        }
    }

    _onProceed() {
        this.props.navigation.navigate("SwipeCard");
    }

    render() {
        const {
            ImageBackgroundStyle,
            MainContainer,
            MenuButtonContainer,
            MenuButtonStyle,
            InnerContainer,
            HeadingText,
            TextInputContainer,
            TextInputStyle,
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
                        <Text style={HeadingText}>Enter Sale Amount</Text>
                        <View style={TextInputContainer}>
                            <TextInput placeholder="$0.00" keyboardType="numeric" onChangeText={(text) => this.setState({ saleAmount: text })} value={this.state.saleAmount} style={TextInputStyle} />
                        </View>
                    </View>
                    <View style={ProceedButtonContainer}>
                        <KeyboardAvoidingView>
                            <TouchableOpacity style={ButtonContainer}
                                onPress={() => this._onProceed()}>
                                <Text style={ButtonText}>Proceed</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>
                    </View>
                </View >
            </ImageBackground >
        );
    }
}
