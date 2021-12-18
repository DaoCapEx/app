/**
 *
 *  This is an interface which all other wallet providers should implement.
 */
import { NotImplementedError } from '../errors';

export default class WalletProviderInterface {
    static async onboardWallet() {
        throw new NotImplementedError();
    }

    static async isWalletInstalled() {
        throw new NotImplementedError();
    }

    static async getAccount() {
        throw new NotImplementedError();
    }

    static async getAccounts() {
        throw new NotImplementedError();
    }

    // events

    //eslint-disable-next-line no-unused-vars
    static async onAccountChanged(callback) {
        throw new NotImplementedError();
    }
}
