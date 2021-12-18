import MetaMaskOnboarding from '@metamask/onboarding';

import WalletProviderInterface from './wallet-provider';
import { WalletNotInstalledError } from '../errors';

export default class MetaMask extends WalletProviderInterface {
    static async installWallet() {
        const forwarderOrigin =
            window.location.hostname === 'localhost'
                ? 'http://localhost:2008'
                : undefined;
        const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
        onboarding.startOnboarding();
    }

    static async isWalletInstalled() {
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    }

    static async getAccounts() {
        if (await this.isWalletInstalled()) {
            return await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
        } else {
            throw new WalletNotInstalledError(
                'Metamask wallet is not installed.'
            );
        }
    }

    static async getAccount() {
        if (await this.isWalletInstalled()) {
            const accounts = await this.getAccounts();
            if (accounts.length > 0) {
                return accounts[0];
            }
        } else {
            throw new WalletNotInstalledError(
                'Metamask wallet is not installed.'
            );
        }
    }

    // events

    static async onAccountChanged(callback) {
        if (await this.isWalletInstalled()) {
            window.ethereum.on('accountsChanged', accounts => {
                if (callback) {
                    callback(accounts);
                }
            });
        } else {
            throw new WalletNotInstalledError(
                'Metamask wallet is not installed.'
            );
        }
    }
}
