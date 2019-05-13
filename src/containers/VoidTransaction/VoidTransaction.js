import React, { Component } from 'react';
import { ImageBackground, View, Image, Text, TouchableOpacity } from "react-native";
import styles from './VoidTransactionStyles'

export default class VoidTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionId: "",
            transactionDetail: ""
        }
    }

    componentDidMount() {
        const transactionId = this.props.navigation.getParam("id", "empty");
        const transactionDetail = this.props.navigation.getParam("detail", "empty");
        this.setState({ transactionId: transactionId, transactionDetail: transactionDetail });
    }

    _onYesVoidTransaction() {
        this.props.navigation.navigate("VoidTransactionConfirm");
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
            TransactionTextContainer,
            TransactionTextStyle,
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
                        <Text style={HeadingText}>Are you sure you want to Void Transaciton ?</Text>
                    </View>
                    <View style={ProceedButtonContainer}>
                        <View style={TransactionTextContainer}>
                            <Text style={TransactionTextStyle}>{this.state.transactionId}</Text>
                            <Text style={TransactionTextStyle}>{this.state.transactionDetail}</Text>
                        </View>
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
