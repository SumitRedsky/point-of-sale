import React, { Component } from 'react';
import { ImageBackground, View, Image, Text, TouchableOpacity } from "react-native";
import styles from './SwipeCardStyles'

export default class SwipeCard extends Component {
    constructor(props) {
        super(props);
    }

    _onProceed() {
        this.props.navigation.navigate("TransactionCompleted");
    }

    _onReject() {
        this.props.navigation.navigate("TransactionRejected");
    }

    render() {
        const {
            ImageBackgroundStyle,
            MainContainer,
            MenuButtonContainer,
            MenuButtonStyle,
            InnerContainer,
            HeadingText,
            HeadingTextCard,
            HandCardImage,
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
                        <Text style={HeadingText}>To Complete Transaction</Text>
                        <Text style={HeadingTextCard}>Insert, Swipe, or</Text>
                        <Text style={HeadingTextCard}>Tap Card</Text>
                    </View>
                    <View style={ProceedButtonContainer}>
                        <Image style={HandCardImage}
                            source={require("./../../images/handcard.png")}>
                        </Image>
                        <TouchableOpacity style={ButtonContainer}
                            onPress={() => this._onProceed()}>
                            <Text style={ButtonText}>PROCEED</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ButtonContainer}
                            onPress={() => this._onReject()}>
                            <Text style={ButtonText}>REJECT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
