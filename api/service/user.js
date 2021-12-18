import ModelService from './model';
import EthereumUtil from '../utils/ethereum';

import { BadDataError } from '../utils/errors';

export default class UserService extends ModelService {
    /// Set parent props.
    modelType = 'User';

    static async create({ publicAddress, username }) {
        return await this._create({
            publicAddress,
            username,
        });
    }

    static async authenticateUser(publicAddress, signature) {
        const user = await this.findOne({ publicAddress });

        if (!user) {
            throw new Error(`User ${publicAddress} not found`);
        }

        const nonce = `dcx-nonce:${user.nonce}`;

        if (EthereumUtil.validateSigature(publicAddress, nonce, signature)) {
            user.nonce = Math.floor(Math.random() * 1000000); // reset nonce for the next log in.
            await this.update(user);
            return user;
        } else {
            throw new BadDataError(
                `Signautre ${signature} is invalid for ${publicAddress}`
            );
        }
    }
}
