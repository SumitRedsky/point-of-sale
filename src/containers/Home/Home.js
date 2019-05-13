import React, { Component } from 'react';
import { ImageBackground, View, Image, Text, Button, TouchableOpacity } from "react-native";
import styles from './HomeStyles'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    _onNewSale() {
        this.props.navigation.navigate("NewSale");
    }

    _onVoidSale() {
        this.props.navigation.navigate("Transactions");
    }

    render() {
        const {
            ImageBackgroundStyle,
            MainContainer,
            MenuButtonContainer,
            MenuButtonStyle,
            SalesContainer,
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
                    <View style={SalesContainer}>
                        <TouchableOpacity style={ButtonContainer}
                            onPress={() => this._onNewSale()}>
                            <Text style={ButtonText}>New Sale</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ButtonContainer}
                            onPress={() => this._onVoidSale()}>
                            <Text style={ButtonText}>Void Sale</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground >
        );
    }
}
