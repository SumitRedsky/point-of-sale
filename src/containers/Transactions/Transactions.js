import React, { Component } from 'react';
import { ImageBackground, View, Image, Text, ListView, TouchableOpacity } from "react-native";
import styles from './TransactionsStyles'

export default class Transactions extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                { id: "Transaction # 123", detail: "Amount $112 Time 12AM" },
                { id: "Transaction # 12323", detail: "Amount $112 Time 12AM" },
                { id: "Transaction # 12345", detail: "Amount $112 Time 12AM" },
                { id: "Transaction # 123", detail: "Amount $112 Time 12AM" },
                { id: "Transaction # 123", detail: "Amount $112 Time 12AM" },
                { id: "Transaction # 123", detail: "Amount $112 Time 12AM" },
                { id: "Transaction # 123", detail: "Amount $112 Time 12AM" },
                { id: "Transaction # 123", detail: "Amount $112 Time 12AM" },
                { id: "Transaction # 123", detail: "Amount $112 Time 12AM" },
                { id: "Transaction # 123", detail: "Amount $112 Time 12AM" },
                { id: "Transaction # 123", detail: "Amount $112 Time 12AM" },
                { id: "Transaction # 123", detail: "Amount $112 Time 12AM" }
            ])
        };
    }

    _onTransaction(rowData) {
        this.props.navigation.navigate("VoidTransaction",
            {
                "id": rowData.id,
                "detail": rowData.detail
            }
        );
    }

    render() {
        const {
            ImageBackgroundStyle,
            MainContainer,
            MenuButtonContainer,
            MenuButtonStyle,
            TopContainer,
            HeadingText,
            TransactionListContainer,
            TransactionList,
            TransactionItemContainer,
            TransactionId,
            TransactionDetail,
            DividerStyle
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
                        <Text style={HeadingText}>Select Transaction</Text>
                    </View>
                    <View style={TransactionListContainer}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) =>
                                <View style={TransactionList}>
                                    <TouchableOpacity style={TransactionItemContainer}
                                        onPress={this._onTransaction.bind(this, rowData)}>
                                        <Text style={TransactionId}>{rowData.id}</Text>
                                        <Text style={TransactionDetail}>{rowData.detail}</Text>
                                    </TouchableOpacity>
                                    <View style={DividerStyle}></View>
                                </View>
                            }
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
