import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './containers/Home/Home';
import NewSale from './containers/NewSale/NewSale';
import VoidTransaction from './containers/VoidTransaction/VoidTransaction';
import TransactionVoided from './containers/TransactionVoided/TransactionVoided';
import Transactions from './containers/Transactions/Transactions';
import SwipeCard from './containers/SwipeCard/SwipeCard';
import TransactionCompleted from './containers/TransactionCompleted/TransactionCompleted';
import TransactionRejected from './containers/TransactionRejected/TransactionRejected';
import VoidTransactionConfirm from './containers/VoidTransactionConfirm/VoidTransactionConfirm';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        NewSale: {
            screen: NewSale
        },
        VoidTransaction: {
            screen: VoidTransaction
        },
        TransactionVoided: {
            screen: TransactionVoided
        },
        Transactions: {
            screen: Transactions
        },
        SwipeCard: {
            screen: SwipeCard
        },
        TransactionCompleted: {
            screen: TransactionCompleted
        },
        TransactionRejected: {
            screen: TransactionRejected
        },
        VoidTransactionConfirm: {
            screen: VoidTransactionConfirm
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

export const AppNavigation = createAppContainer(AppNavigator);