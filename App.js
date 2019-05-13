/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AppNavigation } from "./src/navigation"
import Home from './src/containers/Home/Home';
import NewSale from './src/containers/NewSale/NewSale';
import SwipeCard from './src/containers/SwipeCard/SwipeCard';
import TransactionCompleted from './src/containers/TransactionCompleted/TransactionCompleted';
import TransactionRejected from './src/containers/TransactionRejected/TransactionRejected';
import TransactionVoided from './src/containers/TransactionVoided/TransactionVoided';
import VoidTransactionConfirm from './src/containers/VoidTransactionConfirm/VoidTransactionConfirm';
import VoidTransaction from './src/containers/VoidTransaction/VoidTransaction';
import Transactions from './src/containers/Transactions/Transactions';

export default class App extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <AppNavigation />
    );
  }
}